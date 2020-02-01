var requestURL = "/modules/ServerEvents/serverevents.json";
var request = new XMLHttpRequest();
var now = new Date();
var eventDomDestination = document.getElementById("tapahtumat");
var serverEvents = {
  ongoing: [],
  upcoming: []
};
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  var data = request.response;

  if (typeof data === "string") {
    data = JSON.parse(data);
  }

  data.forEach(function (event) {
    return parseServerEvent(event);
  });

  if (serverEvents.ongoing.length !== 0) {
    initOngoing(serverEvents.ongoing.sort(function (a, b) { return a.startDate.getTime() - b.startDate.getTime() }));
  }

  initUpcoming(serverEvents.upcoming.sort(function (a, b) { return a.startDate.getTime() - b.startDate.getTime() }));
};

function parseDate(str) {
  var parts = str.split(".");
  return new Date(parts[2], parts[1] - 1, parts[0]);
}

function readableTimeValues(date) {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    seconds: date.getSeconds()
  };
}

function createEventElement(event) {
  var main = document.createElement("div");
  var head = document.createElement("div");
  var body = document.createElement("div");
  var time = document.createElement("span");
  var title = document.createElement("span");
  var desc = document.createElement("span");
  main.className = "tapahtuma " + event.state;
  head.className = "tapahtuma-head";
  body.className = "tapahtuma-body";
  time.className = "tapahtuma-time";
  title.className = "tapahtuma-title";
  desc.className = "tapahtuma-desc";
  if (event.options.forceEndDate) {
    time.textContent = event.readableStartDate + " - " + event.readableEndDate;
  } else {
    time.textContent = event.readableStartDate;
  }
  title.textContent = event.title;

  head.appendChild(time);
  head.appendChild(title);

  main.appendChild(head);

  if (event.description.length !== 0) {
    desc.textContent = event.description;
    body.appendChild(desc);
    main.appendChild(body);
  }

  return main;
}

function initUpcoming(serverEvents) {
  var dest = document.createElement("div");
  dest.className = "tapahtuma-tyyppi";
  var title = document.createElement("h5");
  title.className = "card-title";
  title.innerHTML =
    '<i class="fas fa-calendar-alt card-title-icon"></i>Tulevat tapahtumat';
  dest.appendChild(title);

  if (serverEvents.length === 0) {
    var p = document.createElement("p");
    p.textContent = "Ei tulevia tapahtumia.";
    p.className = "no-upcoming";
    dest.appendChild(p);
  } else {
    serverEvents.forEach(function (event) {
      var elem = createEventElement(event);
      elem ? dest.appendChild(elem) : null;
    });
  }

  eventDomDestination.appendChild(dest);
}

function initOngoing(serverEvents) {
  var dest = document.createElement("div");
  dest.className = "tapahtuma-tyyppi";
  var title = document.createElement("h5");
  title.className = "card-title";
  title.innerHTML =
    '<i class="fas fa-exclamation card-title-icon"></i>Meneillään olevat tapahtumat';
  dest.appendChild(title);
  serverEvents.forEach(function (event) {
    var elem = createEventElement(event);
    elem ? dest.appendChild(elem) : null;
  });
  eventDomDestination.appendChild(dest);
}

function parseServerEvent(event) {
  var startDate = parseDate(event.dates["start-date"]);
  var endDate;
  if (event.dates["end-date"]) {
    endDate = parseDate(event.dates["end-date"]);
  }
  var specifiedEndDate = true;

  if (!startDate) {
    throw new Error("Server event had no valid start date");
  }

  if (!endDate || isNaN(endDate.getTime())) {
    specifiedEndDate = false;
    endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 1);
  }

  if (startDate > endDate) {
    throw new Error(
      "Server event can not have an end date before starting date"
    );
  }

  var startData = readableTimeValues(startDate);
  var endData = readableTimeValues(endDate);
  var parsedEvent = {
    startDate: startDate,
    endDate: endDate,
    readableStartDate: startData.day + "." + startData.month + "." + startData.year,
    readableEndDate: endData.day + "." + endData.month + "." + endData.year,
    specifiedEndDate: specifiedEndDate,
    title: event.title,
    description: event.description,
    options: event.options || {}
  };

  if (startDate > now) {
    parsedEvent.state = "upcoming";
    serverEvents.upcoming.push(parsedEvent);
  } else if (startDate < now && endDate > now) {
    parsedEvent.state = "ongoing";
    serverEvents.ongoing.push(parsedEvent);
  }

}




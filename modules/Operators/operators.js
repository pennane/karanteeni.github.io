var requestURL = '/modules/Operators/operators.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
console.log("yeet")
request.onload = function () {
  var data = request.response;
  if (typeof data === "string") {
    data = JSON.parse(data)
  }
  console.log(data)
  console.log(typeof data)
  Object.keys(data).forEach(function (type) {
    var list = data[type];
    createOperatorsDiv(list, type);
  });
};

var builder = document.getElementById('Rakentajat');
var owner = document.getElementById('Omistajat');
var admin = document.getElementById('Adminit');
var op = document.getElementById('Operaattorit');
var mod = document.getElementById('Moderaattorit');

function getDestination(type) {
  var destination;

  switch (type) {
    case "omistajat":
      destination = owner;
      break;

    case "adminit":
      destination = admin;
      break;

    case "operaattorit":
      destination = op;
      break;

    case "moderaattorit":
      destination = mod;
      break;

    case "rakentajat":
      destination = builder;
      break;

    default:
      throw new Error("Could not resolve destination element");
  }

  return destination;
}

function createEmptyListText(type, destination) {
  var h4 = document.createElement('h4');
  var destination;

  switch (type) {
    case "omistajat":
      h4.textContent = '#Sellout';
      break;

    case "adminit":
      h4.textContent = 'Ketään ei ole katsomassa Operaattoreiden perään. :(';
      break;

    case "operaattorit":
      h4.textContent = 'Operaattorit ovat karanneet jonnekin! Ehkä moderaattoreista voi joskus löytyä kelvollinen...';
      break;

    case "moderaattorit":
      h4.innerHTML = 'Oh noes! Moderators not found. Ehkä sinun kannattaisi <a id="link" href="yphaku">hakea</a>!';
      break;

    case "rakentajat":
      h4.innerHTML = 'Katastrofaalista! Rakentajat ovat lakossa. Jos sinulta löytyy taitoa, voisit <a id="link" href="yphaku">hakea</a>!';
      break;

    default:
      break;
  }

  if (!h4.textContent || !destination) {
    throw new Error("Missing destination or have a faulty h4 element");
  }

  destination.parentNode.insertBefore(h4, destination.nextSibling);
}

function createYpElement(operator, cssClass) {
  var card = document.createElement('div');
  card.className = 'yp-card b-card-light ' + cssClass;

  var cardInner = document.createElement('div');
  cardInner.className = 'yp-card-inner b-card-dark ' + cssClass;

  var cardBody = document.createElement('div');
  cardBody.className = 'yp-card-body ' + cssClass;

  var cardFooter = document.createElement('div');
  cardFooter.className = 'yp-card-footer ' + cssClass;

  var cardHeader = document.createElement('div');
  cardHeader.className = 'yp-card-header ' + cssClass;

  var cardImg = document.createElement('div');
  cardImg.className = 'yp-card-img ' + cssClass;

  var cardText = document.createElement('div');
  cardText.className = 'yp-card-text ' + cssClass;

  var cardRank = document.createElement('div');
  cardRank.className = 'yp-card-rank c-card-ligher ' + cssClass;

  var h3 = document.createElement('h3');
  var img = document.createElement('img');
  var p = document.createElement('p');
  var span = document.createElement('span');

  h3.textContent = operator.nimi;
  p.textContent = operator.kuvaus;
  span.textContent = cssClass;

  img.src = 'https://visage.surgeplay.com/full/' + operator.uuid;

  cardHeader.appendChild(h3);
  cardImg.appendChild(img);
  cardText.appendChild(p);
  cardRank.appendChild(span);

  cardBody.appendChild(cardHeader);
  cardBody.appendChild(cardImg);
  cardBody.appendChild(cardText);

  cardFooter.appendChild(cardRank);

  cardInner.appendChild(cardBody);
  cardInner.appendChild(cardFooter);

  card.appendChild(cardInner);

  return card;
}

function createOperatorsDiv(operators, opType) {
  if (operators.length === 0) {
    createEmptyListText(opType);
    return null;
  }

  var destination = getDestination(opType);
  var operatorWrapper = document.createElement('div');
  operatorWrapper.className = 'yp-wrapper';
  operators.forEach(function (operator) {
    var opElement = createYpElement(operator, opType);
    operatorWrapper.appendChild(opElement);
  });
  destination.parentNode.insertBefore(operatorWrapper, destination.nextSibling);
}
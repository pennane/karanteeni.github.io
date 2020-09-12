var requestURL = '/modules/Operators/operators.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
  var data = request.response;
  if (typeof data === "string") {
    data = JSON.parse(data)
  }
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
      throw new Error("Could not resolve a destination element");
  }

  return destination;
}

function createEmptyListText(type) {
  var h4 = document.createElement('h4');
  var destination = getDestination(type)

  switch (type) {
    case "omistajat":
      h4.innerHTML = '#Sellout';
      break;

    case "adminit":
      h4.innerHTML = 'Ketään ei ole katsomassa Operaattoreiden perään. :(';
      break;

    case "operaattorit":
      h4.innerHTML = 'Operaattorit ovat karanneet jonnekin! Ehkä moderaattoreista voi joskus löytyä kelvollinen...';
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

  if (!h4.innerHTML || !destination) {
    throw new Error("Missing a destination or the h4 element is faulty");
  }

  destination.parentNode.insertBefore(h4, destination.nextSibling);
}

function createYpElement(operator, cssClass) {
  var card = document.createElement('div');
  card.className = 'admin-card-container ' + cssClass;

  var cardInner = document.createElement('div');
  cardInner.className = 'admin-card ' + cssClass;

  var cardBody = document.createElement('div');
  cardBody.className = 'admin-content ' + cssClass;

  var cardBackground = document.createElement('div');
  cardBackground.className = 'background ' + cssClass;

  var cardFooter = document.createElement('div');
  cardFooter.className = 'admin-footer ' + cssClass;

  var cardHeader = document.createElement('div');
  cardHeader.className = 'admin-name ' + cssClass;

  var cardImg = document.createElement('div');
  cardImg.className = 'avatar ' + cssClass;

  var cardText = document.createElement('div');
  cardText.className = 'admin-strength ' + cssClass;

  var cardRank = document.createElement('div');
  cardRank.className = 'admin-type ' + cssClass;

  var h3 = document.createElement('h3');
  var img = document.createElement('img');
  var p = document.createElement('p');
  var span = document.createElement('span');

  h3.className = 'admin-card-heading'

  for (let j = 0; j < operator.vahvuudet.length; j++) {
    const li = document.createElement('p');
    const bullet = document.createElement('i');
    bullet.className = "far fa-arrow-alt-circle-right admin-strength-bullet";
    var textNode = document.createTextNode(operator.vahvuudet[j]);
    li.appendChild(bullet)
    li.appendChild(textNode);
    cardText.appendChild(li);
  }

  h3.textContent = operator.nimi;
  p.textContent = operator.kuvaus;
  span.textContent = cssClass;


  img.src = 'https://visage.surgeplay.com/full/' + operator.uuid;

  cardHeader.appendChild(h3);
  cardImg.appendChild(img);
  cardRank.appendChild(span);
  cardFooter.appendChild(p);

  cardBackground.appendChild(cardImg);
  cardBody.appendChild(cardRank);
  cardBody.appendChild(cardHeader);
  cardBody.appendChild(cardText);

  cardInner.appendChild(cardBackground);
  cardInner.appendChild(cardBody);
  cardInner.appendChild(cardFooter);

  card.appendChild(cardInner);

  return card;
}

function createOperatorsDiv(operators, opType) {
  if (operators.length === 0 || !operators) {
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
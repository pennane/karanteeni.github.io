var requestURL = '/modules/Donators/donators.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var donators = request.response;
    giveMoney(donators);
}

var donator = document.getElementById('lahjoittajat')

function giveMoney(jsonObj) {

    var lahjoitus = jsonObj['lahjoittajat'];
        
    for (var i = 0; i < lahjoitus.length; i++) {

      var tr = document.createElement('tr');

      var th1 = document.createElement('th');
      th1.scope = 'row';
      th1.textContent = lahjoitus[i].pvm;

      var td1 = document.createElement('td');
      td1.textContent = lahjoitus[i].nimi;

      var td2 = document.createElement('td');
      td2.textContent = lahjoitus[i].amount;

      var td3 = document.createElement('td');
      td3.textContent = lahjoitus[i].heart;
  
      tr.appendChild(th1);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);

      donator.appendChild(tr);
    }
  }
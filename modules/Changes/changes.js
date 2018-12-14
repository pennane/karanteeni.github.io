var requestURL = '/modules/Changes/changes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var muutokset = request.response;
    makeChanges(muutokset);
}

var muutos = document.getElementById('muutokset')

function makeChanges(jsonObj) {

    var change = jsonObj['muutokset'];
        
    for (var i = 0; i < change.length; i++) {

      var acc = document.createElement('div');
      acc.className = 'accordion';
      acc.setAttribute('id', 'muutokset');

      muutos.appendChild(acc);
    }
  }
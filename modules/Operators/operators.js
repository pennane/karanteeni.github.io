var requestURL = '/modules/Operators/operators.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var operators = request.response;
    giveOp(operators);
    giveAdm(operators);
    giveOperator(operators);
    giveMod(operators);
    giveBuild(operators);
}

var builder = document.getElementById('Rakentajat');
var owner = document.getElementById('Omistajat');
var admin = document.getElementById('Adminit');
var op = document.getElementById('Operaattorit');
var mod = document.getElementById('Moderaattorit');

function giveOp(jsonObj) {

    var owners = jsonObj['omistajat'];

    if (owners.length != 0) {
      var hr = document.createElement('hr');
      var br = document.createElement('br');
  
      var row = document.createElement('div');
      row.className = 'row';
      row.style.textAlign = 'center';
          
      for (var i = 0; i < owners.length; i++) {
  
        var col = document.createElement('div');
        col.className = 'col-sm';
        col.style.marginBottom = '20px';
  
        var card = document.createElement('div');
        card.className = 'card';
        card.style.width = '18rem';
        card.style.border = '2px solid red';
        card.style.borderRadius = '0.80rem';
        card.style.backgroundColor = '#fff993';
        card.style.color = 'black';
        card.style.margin = 'auto';
  
        var cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.style.paddingTop = '15px';
        cardTitle.textContent = owners[i].nimi;
  
        var ypImg = document.createElement('div');
        ypImg.className = 'yp-img';
  
        var ypskin = document.createElement('img');
        ypskin.className = 'card-img-top';
        ypskin.style.width = '100px';
        ypskin.style.marginTop = '1.2em';
        ypskin.style.marginBottom = '1.2em';
        ypskin.style.height = '225px';
        ypskin.setAttribute('src', 'https://crafatar.com/renders/body/' + owners[i].uuid);
  
        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.style.backgroundColor = '#fff993';
        cardBody.style.color = 'black';
        cardBody.style.borderRadius = '0.80rem';
  
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = owners[i].kuvaus;
    
        row.appendChild(col);
        col.appendChild(card);
        card.appendChild(cardTitle);
        card.appendChild(ypImg);
        ypImg.appendChild(ypskin);
        card.appendChild(cardBody);
        cardBody.appendChild(cardText);
  
        owner.parentNode.insertBefore(row, owner.nextSibling);
        row.parentNode.insertBefore(hr, owner.nextSibling);
        row.parentNode.insertBefore(br, hr.nextSibling);
        
      }
    } else {
      var h4 = document.createElement('h4');
      h4.innerHTML = '#Sellout';
      owner.parentNode.insertBefore(h4, owner.nextSibling);
    }
  }

  function giveAdm(jsonObj) {

    var hr = document.createElement('hr');
    var br = document.createElement('br');

    var admins = jsonObj['adminit'];

    if (admins.length != 0) {
      var row = document.createElement('div');
      row.className = 'row';
      row.style.textAlign = 'center';
          
      
      for (var i = 0; i < admins.length; i++) {
  
          var col = document.createElement('div');
          col.className = 'col-sm';
          col.style.marginBottom = '20px';
    
          var card = document.createElement('div');
          card.className = 'card';
          card.style.width = '18rem';
          card.style.border = '2px solid red';
          card.style.borderRadius = '0.80rem';
          card.style.backgroundColor = '#fff993';
          card.style.color = 'black';
          card.style.margin = 'auto';
    
          var cardTitle = document.createElement('h5');
          cardTitle.className = 'card-title';
          cardTitle.style.paddingTop = '15px';
          cardTitle.textContent = admins[i].nimi;
    
          var ypImg = document.createElement('div');
          ypImg.className = 'yp-img';
    
          var ypskin = document.createElement('img');
          ypskin.className = 'card-img-top';
          ypskin.style.width = '100px';
          ypskin.style.marginTop = '1.2em';
          ypskin.style.marginBottom = '1.2em';
          ypskin.style.height = '225px';
          ypskin.setAttribute('src', 'https://crafatar.com/renders/body/' + admins[i].uuid);
    
          var cardBody = document.createElement('div');
          cardBody.className = 'card-body';
          cardBody.style.backgroundColor = '#fff993';
          cardBody.style.color = 'black';
          cardBody.style.borderRadius = '0.80rem';
    
          var cardText = document.createElement('p');
          cardText.className = 'card-text';
          cardText.textContent = admins[i].kuvaus;
      
          row.appendChild(col);
          col.appendChild(card);
          card.appendChild(cardTitle);
          card.appendChild(ypImg);
          ypImg.appendChild(ypskin);
          card.appendChild(cardBody);
          cardBody.appendChild(cardText);
    
          admin.parentNode.insertBefore(row, admin.nextSibling)
          row.parentNode.insertBefore(hr, admin.nextSibling);
          row.parentNode.insertBefore(br, hr.nextSibling);
      }
    } else {
      var h4 = document.createElement('h4');
      h4.innerHTML = 'Ketään ei ole katsomassa Operaattoreiden perään. :(';
      admin.parentNode.insertBefore(h4, admin.nextSibling);
    }
  }

    function giveOperator(jsonObj) {

    var smods = jsonObj['operaattorit'];

    if (smods.length != 0) {
      var hr = document.createElement('hr');
      var br = document.createElement('br');
  
      var row = document.createElement('div');
      row.className = 'row';
      row.style.textAlign = 'center';
  
      for (var i = 0; i < smods.length; i++) {
        var col = document.createElement('div');
        col.className = 'col-sm';
        col.style.marginBottom = '20px';
  
        var card = document.createElement('div');
        card.className = 'card';
        card.style.width = '18rem';
        card.style.border = '2px solid red';
        card.style.borderRadius = '0.80rem';
        card.style.backgroundColor = '#fff993';
        card.style.color = 'black';
        card.style.margin = 'auto';
  
        var cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.style.paddingTop = '15px';
        cardTitle.textContent = smods[i].nimi;
  
        var ypImg = document.createElement('div');
        ypImg.className = 'yp-img';
  
        var ypskin = document.createElement('img');
        ypskin.className = 'card-img-top';
        ypskin.style.width = '100px';
        ypskin.style.marginTop = '1.2em';
        ypskin.style.marginBottom = '1.2em';
        ypskin.style.height = '225px';
        ypskin.setAttribute('src', 'https://crafatar.com/renders/body/' + smods[i].uuid);
  
        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.style.backgroundColor = '#fff993';
        cardBody.style.color = 'black';
        cardBody.style.borderRadius = '0.80rem';
  
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = smods[i].kuvaus;
    
        row.appendChild(col);
        col.appendChild(card);
        card.appendChild(cardTitle);
        card.appendChild(ypImg);
        ypImg.appendChild(ypskin);
        card.appendChild(cardBody);
        cardBody.appendChild(cardText);
  
        op.parentNode.insertBefore(row, op.nextSibling);
        row.parentNode.insertBefore(hr, op.nextSibling);
        row.parentNode.insertBefore(br, hr.nextSibling);
      }
    } else {
      var h4 = document.createElement('h4');
      h4.innerHTML = 'Operaattorit ovat karanneet jonnekin! Ehkä moderaattoreista voi joskus löytyä kelvollinen...';
      op.parentNode.insertBefore(h4, op.nextSibling);
    }
  }

  function giveMod(jsonObj) {

    var mods = jsonObj['moderaattorit'];

    if (mods.length != 0) {
      var hr = document.createElement('hr');
      var br = document.createElement('br');
  
      var row = document.createElement('div');
      row.className = 'row';
      row.style.textAlign = 'center';
  
      /* */for (var i = 0; i < mods.length; i++) {
  
        var col = document.createElement('div');
        col.className = 'col-sm';
        col.style.marginBottom = '20px';
  
        var card = document.createElement('div');
        card.className = 'card';
        card.style.width = '18rem';
        card.style.border = '2px solid red';
        card.style.borderRadius = '0.80rem';
        card.style.backgroundColor = '#fff993';
        card.style.color = 'black';
        card.style.margin = 'auto';
  
        var cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.style.paddingTop = '15px';
        cardTitle.textContent = mods[i].nimi;
  
        var ypImg = document.createElement('div');
        ypImg.className = 'yp-img';
  
        var ypskin = document.createElement('img');
        ypskin.className = 'card-img-top';
        ypskin.style.width = '100px';
        ypskin.style.marginTop = '1.2em';
        ypskin.style.marginBottom = '1.2em';
        ypskin.style.height = '225px';
        ypskin.setAttribute('src', 'https://crafatar.com/renders/body/' + mods[i].uuid);
  
        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.style.backgroundColor = '#fff993';
        cardBody.style.color = 'black';
        cardBody.style.borderRadius = '0.80rem';
  
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = mods[i].kuvaus;
    
        row.appendChild(col);
        col.appendChild(card);
        card.appendChild(cardTitle);
        card.appendChild(ypImg);
        ypImg.appendChild(ypskin);
        card.appendChild(cardBody);
        cardBody.appendChild(cardText);
  
        mod.parentNode.insertBefore(row, mod.nextSibling);
        row.parentNode.insertBefore(hr, mod.nextSibling);
        row.parentNode.insertBefore(br, hr.nextSibling);
      }
    } else {
      var h4 = document.createElement('h4');
      h4.innerHTML = 'Oh noes! Moderators not found. Ehkä sinun kannattaisi <a id="link" href="yphaku">hakea</a>!';
      mod.parentNode.insertBefore(h4, mod.nextSibling);
  }

     /* */
}

  function giveBuild(jsonObj) {

    var builders = jsonObj['rakentajat'];
    
    if (builders.length != 0) {
      var hr = document.createElement('hr');
      var br = document.createElement('br');
  
      var row = document.createElement('div');
      row.className = 'row';
      row.style.textAlign = 'center';
  
        for (var i = 0; i < builders.length; i++) {
  
          var col = document.createElement('div');
          col.className = 'col-sm';
          col.style.marginBottom = '20px';
    
          var card = document.createElement('div');
          card.className = 'card';
          card.style.width = '18rem';
          card.style.border = '2px solid red';
          card.style.borderRadius = '0.80rem';
          card.style.backgroundColor = '#fff993';
          card.style.color = 'black';
          card.style.margin = 'auto';
    
          var cardTitle = document.createElement('h5');
          cardTitle.className = 'card-title';
          cardTitle.style.paddingTop = '15px';
          cardTitle.textContent = builders[i].nimi;
    
          var ypImg = document.createElement('div');
          ypImg.className = 'yp-img';
    
          var ypskin = document.createElement('img');
          ypskin.className = 'card-img-top';
          ypskin.style.width = '100px';
          ypskin.style.marginTop = '1.2em';
          ypskin.style.marginBottom = '1.2em';
          ypskin.style.height = '225px';
          ypskin.setAttribute('src', 'https://crafatar.com/renders/body/' + builders[i].uuid);
    
          var cardBody = document.createElement('div');
          cardBody.className = 'card-body';
          cardBody.style.backgroundColor = '#fff993';
          cardBody.style.color = 'black';
          cardBody.style.borderRadius = '0.80rem';
    
          var cardText = document.createElement('p');
          cardText.className = 'card-text';
          cardText.textContent = builders[i].kuvaus;
      
          row.appendChild(col);
          col.appendChild(card);
          card.appendChild(cardTitle);
          card.appendChild(ypImg);
          ypImg.appendChild(ypskin);
          card.appendChild(cardBody);
          cardBody.appendChild(cardText);
  
          builder.parentNode.insertBefore(row, builder.nextSibling);
          row.parentNode.insertBefore(hr, builder.nextSibling);
          row.parentNode.insertBefore(br, hr.nextSibling);
        }
    } else {
      var h4 = document.createElement('h4');
      h4.innerHTML = 'Katastrofaalista! Rakentajat ovat lakossa. Jos sinulta löytyy taitoa, voisit <a id="link" href="yphaku">hakea</a>!';
      builder.parentNode.insertBefore(h4, builder.nextSibling);
    }
  }
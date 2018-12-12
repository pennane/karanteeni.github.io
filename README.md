# Karanteeni

Peruspaske sivut (HTML, CSS, JS) :D

## "Hei pukki, mullois vaan yks toive... että maailmassa olisi rauha"

ja sitten se, että kuka ikinä tätä lukeekaan ymmärtää nämä "ohjeet".

## Muokkaaminen

**Yleistä:** JavaScript moduulit löytyy kansiosta `/modules`, taustakuvat (sekä yleensäkin muut kuvat) löytää kansiosta `/assets/images/` ja skinit löytää kansiosta `/assets/skins/`, joille toistaiseksi ei ole mitään käyttöä. Paketti myös sisältää pohjasivun, jolla voit luoda samantyylisen sivun helposti tarvittaessa.

### Palvelinkysely

Etusivulla (`index.html`) on palvelinkysely, joka näyttää palvelimen IP:n, pelaajamäärän, statuksen, sekä palvelimen portin.

### Navigaatiopalkki

Navigaatiopalkki ei ole missään HTML-tiedostossa "omansa", vaan on ladattu JavaScriptilla omasta HTML-tiedostosta, joka sijaitsee `/assets/includes/` kansiossa nimellä `navbar.html` tai `navnew.html`. Kyseistä tiedostoa muokkaamalla muutat jokaisen HTML-sivun navigaatiopalkkia **samanaikaisesti**. Allaolevat kaksi riviä kuuluisi näkyä jokaisessa tiedostossa. Luokat voi asettaa normaalisti `<nav>` attribuuttiin, kuten on toimittu.

```html
<!-- Navbar -->
<nav karainclude-html="assets/includes/navbar.html" class="navbar navbar-expand-lg navbar-dark karanav fixed-top"></nav><br><br>
```

JavaScriptin kyseiseen ominaisuuteen löytää sijainnista `/modules/Include/` nimellä `include.js`.

### Ylläpitosivut

Ylläpitosivut ovat käytännössä vain rakenne. Ylläpitäjien lisääminen tapahtuu käytännössä `/modules/Operators/operators.json` tiedoston kautta, jolloin `operators.js` luo elementit kyseisten ylläpitäjien ympärille. `/modules/Operators/operators.json` sisältää arrayn omistajille, admineille ja rakentajille, jolloin elementit tulevat varmasti oikean kategorian alapuolelle ylläpitosivussa. Alta löytyy esimerkki:

```json
{
    "omistajat": [
        {
            "nimi": "Jomeee",
            "kuvaus": "Ylläpitäjä",
            "uuid": "numeroita"
        }
    ],
    "adminit": [
        {
            "nimi": "Jomeee",
            "kuvaus": "Ylläpitäjä",
            "uuid": "numeroita"
        }
    ],
    "rakentajat": [
        {
            "nimi": "Jomeee",
            "kuvaus": "Ylläpitäjä",
            "uuid": "numeroita"
        }
    ]
}
```
UUID:tä käytetään lähinnä skinin hakemiseen, joka päivittyy automaattisesti tietyn ajan kuluessa. Kuvaus ja nimi luonnollisesti tuvat näkyviin elementteinä oikeisiin paikkoihin.

### Preloader

`index.html` sisältää preloaderin, jota voi käyttää tarvittaessa. Sivusto ei kuitenkaan ole ladattaessa raskas, joten en ajatellut, että se olisi tarpeellista laittaa, joten jätin koodin elämään vain kommenttina. Preloaderin JavaScriptin löytää sijainnista `/modules/Preloader/` nimellä `preloader.js`.

### #vainylläpitojutut

"Vain ylläpitojutut" ovat koottu etusivulle JavaScriptin avulla. Kyseisiä juttuja voi lisätä sijainnissa `/modules/Jutut/` nimellä `jutut.js`. Skriptin sisällytys löytyy riviltä 134 tiedostosta `index.html`. Alla on vielä esimerkkimalli ``jutut.js` sisällöstä.

```javascript
       {
          teksti: "Vois käydä kuolemassa.",
          kuuluisuus: "LouNii"
       }
```

## Tiedettyjä "ongelmia"

* Toistaiseksi kaikki ovat ominaisuuksia.

## Kasattu

* [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - Käyttöliittymäpohjainen web-kehys
* [jQuery](https://jquery.com/) - JavaScript kirjasto

## Hatunnosto

* [Minecraft Server Status](https://mcsrvstat.us/) - Käytetty palvelinkyselyyn
* [Crafatar](https://crafatar.com/) - Käytetty skinien kyselyyn

## Lisenssi

Voit katsoa lisenssin tiedostosta [LICENSE](https://gitlab.com/Ixynas/Karanteeni/raw/master/LICENSE). Tiedosto on myös pakattu mukaan.

## Kiitos

Kiitos, että sain auttaa teitä ja että hyväksyitte avun edellisistä vastoinkäymisistä huolimatta. Voin jatkaa näiden päivityksiä, mikäli sen sallitte, mutta voin jättää pallon myös kokonaan teidän haltuun. -Ixynas
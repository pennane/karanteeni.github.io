# Karanteeni

Peruspaske sivut (HTML, CSS, JS) :D

Versio: 2.6.2

## "Hei pukki, mullois vaan yks toive... että maailmassa olisi rauha..."

ja sitten se, että kuka ikinä tätä lukeekaan ymmärtää nämä "ohjeet".

## Muokkaaminen

**Yleistä:** JavaScript moduulit löytyy kansiosta `/modules`, taustakuvat (sekä yleensäkin muut kuvat) löytää kansiosta `/assets/images/` ja skinit löytää kansiosta `/assets/skins/`, joille toistaiseksi ei ole mitään käyttöä. Paketti myös sisältää pohjasivun, jolla voit luoda samantyylisen sivun helposti tarvittaessa.
React -komponentit löytyy kansiosta `/assets/components`.

### React komponentit

Navigaatiopalkki (samoin kuin moni muu komponentti) on toteutettu Reactilla. Jokaisessa tiedostossa on erikseen script tagit kyseiseen JSX komponenttiin.

```html
<!-- Navbar -->
<div id="nav"></div>

<!-- Sivun alalaidassa erikseen script tagi, joka kutsuu kyseisen JSX komponentin. -->
<script src="./assets/components/navbar.jsx" type="text/jsx"></script>
```

Jokainen komponentti toimii samalla tavalla. Muita komponentteja esimerkiksi ovat muutoslokin nappi (`changelog_button.jsx`), footer (`footer.jsx`), pelaaja-arvot (`ranks.jsx`), sekä reseptit (`recipes.jsx`).

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

"Vain ylläpitojutut" ovat koottu etusivulle JavaScriptin avulla. Kyseisiä juttuja voi lisätä sijainnissa `/modules/Jutut/` nimellä `jutut.js`. Skriptin sisällytys löytyy riviltä 134 tiedostosta `index.html`. Alla on vielä esimerkkimalli `jutut.js` sisällöstä.

```javascript
       {
          teksti: "Vois käydä kuolemassa.",
          kuuluisuus: "LouNii"
       }
```

## Tiedettyjä "ongelmia"

* Kaikki kunnossa toistaiseksi.

## Kasattu

* [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - Frontend Web-kehys (CSS)
* [React](https://reactjs.org/) - Frontend Web-kehys (JavaScript)
* [jQuery](https://jquery.com/) - JavaScript kirjasto

## Hatunnosto

* [Crafatar](https://crafatar.com/) - Käytetty skinien kyselyyn

## Lisenssi

Voit katsoa lisenssin tiedostosta [LICENSE](https://gitlab.com/Ixynas/Karanteeni/raw/master/LICENSE). Tiedosto on myös pakattu mukaan.

## Kiitos

Kiitos, että sain auttaa teitä ja että hyväksyitte avun edellisistä vastoinkäymisistä huolimatta. Voin jatkaa näiden päivityksiä, mikäli sen sallitte, mutta voin jättää pallon myös kokonaan teidän haltuun. -Ixynas

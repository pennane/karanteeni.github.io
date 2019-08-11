# Karanteeni

Peruspaske sivut (HTML, CSS, JS) :D

Versio: 3.9.0

## "Hei pukki, mullois vaan yks toive... että maailmassa olisi rauha..."

ja sitten se, että kuka ikinä tätä lukeekaan ymmärtää nämä "ohjeet".

## Muokkaaminen

**Yleistä:** JavaScript moduulit löytyy kansiosta `/modules`, taustakuvat (sekä yleensäkin muut kuvat) löytää kansiosta `/assets/images/` ja skinit löytää kansiosta `/assets/skins/`, joille toistaiseksi ei ole mitään käyttöä. Paketti myös sisältää pohjasivun, jolla voit luoda samantyylisen sivun helposti tarvittaessa. Paketti sisältää myös JSX-komponentit helppoa muokkaamista varten, mutta komponentit täytyy esikääntää selaimelle luettavaksi JavaScriptiksi, jotka löytää `/src` kansiosta.

### React komponentit

Navigaatiopalkki (samoin kuin moni muu komponentti) on toteutettu Reactilla. Jokaisessa tiedostossa on erikseen script tagit kyseiseen komponenttiin.

```html
<!-- Navbar -->
<div id="nav"></div>

<!-- Sivun alalaidassa erikseen script tagi, joka kutsuu kyseisen JSX komponentin. -->
<script src="./src/navbar.js"></script>
```

Jokainen komponentti toimii samalla tavalla. Muita komponentteja esimerkiksi ovat muutoslokin nappi (`changelog_button.js`), footer (`footer.js`), pelaaja-arvot (`table_ranks.js`), sekä reseptit (`recipes.js`).

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
    "operaattorit": [
        {
            "nimi": "Jomeee",
            "kuvaus": "Ylläpitäjä",
            "uuid": "numeroita"
        }
    ],
    "moderaattorit": [
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

### #vainylläpitojutut

"Vain ylläpitojutut" ovat koottu etusivulle JavaScriptin avulla. Kyseisiä juttuja voi lisätä sijainnissa `/modules/Jutut/` nimellä `jutut.js`. Alla on vielä esimerkkimalli `jutut.js` sisällöstä.

```javascript
       {
          teksti: "Vois käydä kuolemassa.",
          kuuluisuus: "LouNii"
       }
```

## Tiedettyjä "ongelmia"

* Kaikki kunnossa toistaiseksi.

## Kasattu

* [Bootstrap](https://getbootstrap.com/) - Frontend Web-kehys (CSS)
* [React](https://reactjs.org/) - Frontend Web-kehys (JavaScript)
* [jQuery](https://jquery.com/) - JavaScript kirjasto
* [Rakkaus](https://fi.wikipedia.org/wiki/Rakkaus) - Koska ilman verta, hikeä, kyyneleitä ja rakkautta ei tätäkään sivua olisi saatu aikaiseksi

## Hatunnosto

* [Crafatar](https://crafatar.com/) - Käytetty skinien kyselyyn
* [Minecraft Server Status](https://mcsrvstat.us/) - Käytetty palvelimen statukseen
* [Clipboard.js](https://clipboardjs.com/) - Käytetty elementtien kopioimiseen leikepöydälle
* [Toastr](https://toastrjs.com/) - Käytetty paahtoleipien paahtamiseen

## Lisenssi

Voit katsoa lisenssin tiedostosta [LICENSE](https://raw.githubusercontent.com/Karanteeni/karanteeni.github.io/master/LICENSE.md). Tiedosto on myös pakattu mukaan.

## Kiitos

Kiitos, että sain auttaa teitä ja että hyväksyitte avun edellisistä vastoinkäymisistä huolimatta. Voin jatkaa näiden päivityksiä, mikäli sen sallitte, mutta voin jättää pallon myös kokonaan teidän haltuun. -Ixynas

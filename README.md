# Karanteeni

Peruspaske sivut (HTML, CSS, JS) :D

Versio: 4.3.0

## Esivaatimukset

-   Node.js >= 12
-   Yleinen perusosaaminen JavaScriptista
-   Reactin perustuntemus

## Rakenne

```
karanteeni.github.io/
├── assets/
│   ├── fonts/
|   |   └── Sisältää fontit
│   ├── images/
|   |   └── Sisältää kuvat
│   └── skins/
|       └── Sisältää skinit (harvoin käytetään)
├── components/
│   └── Sisältää React-komponentit
├── dist/
|    └── Sisältää käännetyt React-komponentit
├── modules/
|   └── Sisältää JavaScript moduulit
└── vendor/
    ├── bootstrap/
    |   └── Sisältää bootstrap css ja js
    ├── css/
    |   └── Sisältää Karanteenin css
    ├── FontAwesome/
    |   └── Sisältää FontAwesome -ikonipaketin css
    ├── jquery/
    |   └── Sisältää jQueryn js-tiedostot
    └── webfonts/
        └── Sisältää FontAwesomen fontit
```

Paketti sisältää myös pohjasivun, jolla voit luoda samantyylisen sivun helposti tarvittaessa. React-komponentit täytyy esikääntää selaimelle luettavaksi JavaScriptiksi, jotka löytää `/components` kansiosta. Lisää tästä löydät [React-komponenttien kääntämisestä](#React-komponenttien-kääntäminen)

### React-komponentit

Navigaatiopalkki (samoin kuin moni muu komponentti) on toteutettu Reactilla. Jokaisessa tiedostossa on erikseen script tagit kyseiseen komponenttiin.

```html
<!-- Navbar -->
<div id="nav"></div>

<!-- Sivun alalaidassa erikseen script tagi, joka kutsuu kyseisen JSX komponentin. -->
<script src="./dist/navbar.js"></script>
```

Jokainen komponentti toimii samalla tavalla. Muita komponentteja esimerkiksi ovat muutoslokin nappi (`changelog_button.js`), footer (`footer.js`), pelaaja-arvot (`table_ranks.js`), sekä reseptit (`recipes.js`).

### Ylläpitosivut

Ylläpitosivut ovat käytännössä vain rakenne. Ylläpitäjien lisääminen tapahtuu käytännössä `/modules/Operators/operators.json` tiedoston kautta, jolloin `/dist/operators.js` luo elementit kyseisten ylläpitäjien ympärille. `/modules/Operators/operators.json` sisältää arrayn omistajille, admineille ja rakentajille, jolloin elementit tulevat varmasti oikean kategorian alapuolelle ylläpitosivussa. Alta löytyy esimerkki:

```json
{
    "omistajat": [
        {
            "nimi": "Jomeee",
            "kuvaus": "Ylläpitäjä",
            "vahvuudet": ["Vahvuus"],
            "uuid": "numeroita"
        }
    ],
    "adminit": [
        {
            "nimi": "Jomeee",
            "kuvaus": "Ylläpitäjä",
            "vahvuudet": ["Vahvuus"],
            "uuid": "numeroita"
        }
    ],
    "operaattorit": [
        {
            "nimi": "Jomeee",
            "kuvaus": "Ylläpitäjä",
            "vahvuudet": ["Vahvuus"],
            "uuid": "numeroita"
        }
    ],
    "moderaattorit": [
        {
            "nimi": "Jomeee",
            "kuvaus": "Ylläpitäjä",
            "vahvuudet": ["Vahvuus"],
            "uuid": "numeroita"
        }
    ],
    "rakentajat": [
        {
            "nimi": "Jomeee",
            "kuvaus": "Ylläpitäjä",
            "vahvuudet": ["Vahvuus"],
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

## React-komponenttien kääntäminen

Reactin JSX-komponentit täytyy kääntää selaimelle luettavaksi JavaScriptiksi. Tämä onnistuu helposti, mikäli omistat Node Package Managerin (npm), mikä tulee autom. Node.js mukana.

Ensin pidä huolta, että tarvittavat paketit ovat asennettu terminaalin komennolla:

`npm install`

### Vaihtoehto 1 - Tiedostojen automaattinen kääntäminen

Mikäli haluat Babelin kääntävän JSX-tiedostot automaattisesti kehityksen yhteydessä, suorita komento:

`npm run watch-jsx`

Tämän jälkeen voit muokata rauhassa JSX-tiedostoja. Babel hoitaa kääntämisen JavaScriptiksi, eikä sinun tarvitse koskea niihin :).

### Vaihtoehto 2 - Tiedostojen kääntäminen scriptillä tarvittaessa

Mikäli haluat kääntää JSX-tiedostot manuaalisesti, suorita aina käännön yhteydessä komento:

`npm run build-jsx`

## Tiedettyjä "ongelmia"

-   Kaikki kunnossa toistaiseksi.

## Kasattu

-   [Bootstrap](https://getbootstrap.com/) - Frontend Web-kehys (CSS)
-   [React](https://reactjs.org/) - Frontend Web-kehys (JavaScript)
-   [jQuery](https://jquery.com/) - JavaScript kirjasto
-   [Rakkaus](https://fi.wikipedia.org/wiki/Rakkaus) - Koska ilman verta, hikeä, kyyneleitä ja rakkautta ei tätäkään sivua olisi saatu aikaiseksi

## Big thank you

-   [Visage](https://visage.surgeplay.com/) - Used for querying skins
-   [Minecraft Server Status](https://mcsrvstat.us/) - Used for querying server status
-   [Clipboard.js](https://clipboardjs.com/) - Used for copying elements into clipboard
-   [March08 Animated Burgers](https://march08.github.io/animated-burgers/) - Used as mobile navbar icons
-   [Toastr](https://toastrjs.com/) - Used for sending toasts
-   [particles.js](https://vincentgarreau.com/particles.js/) - Used for particles in the home page

## Lisenssi

Voit katsoa lisenssin tiedostosta [LICENSE](https://raw.githubusercontent.com/Karanteeni/karanteeni.github.io/master/LICENSE.md). Tiedosto on myös pakattu mukaan.

## Kiitos

Kiitos, että sain auttaa teitä ja että hyväksyitte avun edellisistä vastoinkäymisistä huolimatta. Voin jatkaa näiden päivityksiä, mikäli sen sallitte, mutta voin jättää pallon myös kokonaan teidän haltuun. -Ixynas

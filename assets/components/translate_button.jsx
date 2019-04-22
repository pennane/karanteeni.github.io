'use strict';

const button = document.getElementById('translate_button');
const title = document.querySelector('h1#title');

class Translate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {english: false};
        this.el = (title.innerHTML = '<b>Karanteeni UI 0.2</b>')

        this.handleState = this.handleState.bind(this);
    }

    handleState() {
        this.setState(state => ({
          english: !state.english
        }));
      }

      componentDidMount() {
            return [
                this.el
            ]
        }
}


class TranslateButton extends Translate {
    render() {

        const isEnglish = this.state.english;
        let html;

        if(isEnglish) {
            html = document.querySelector('div#content').innerHTML = '<small>Updated 22.12.2018</small><p class="mt-5">Karanteeni UI is that you\'re watching right now.'
            + ' We got bored with a red-yellow theme and decided to create visually dark user interface, which everyone likes. There are, of course, other major updates on the site,'
            + ' which exact release date we don\'t know yet. This site is for development purposes only, and no function is related'
            + ' <b>to the final result of the layout</b>.\n <p class="h2 pt-5">So what is it about?</p><br>'
                + 'Simply the functioning and new look of the site. There are hopefully new features coming to the site, as long as we can get things done first.'
                + ' However, the new look was necessary and not everything has even been completed yet. That\'s why you may see broken elements, off-coloured things,'
                + ' or things that are poorly implemented at all. <br><br>'
                + 'Two frontend web frameworks have been used on the site, other is based on JavaScript, the other one in CSS. React and Bootstrap have brought comfort and ease of use'
                + ' for the creation of user interface. The appearance of the site has not changed very radically, except for the certain sections. The biggest part of change'
                + ' is most likely the change of color scheme. <br><br>'
                + 'The site was designed to be designed for later use. Here you will see the first steps of the interface. Today it looks like this, tomorrow it looks'
                + ' different. :) </p>'
        } else {
            html = document.querySelector('div#content').innerHTML = '<small>Päivitetty 22.12.2018</small><p class="mt-5">Karanteeni UI on juuri sitä, mitä olet nyt katsomassa.'
            + ' Kyllästyimme punakeltaiseen sävyyn ja päätimme luoda sen tumman ulkoasun, josta kaikki tykkäävät. Sivustolla on toki tapahtumassa muitakin laajoja päivityksiä,'
            + ' joiden tarkkaa julkaisuajankohtaa emme tiedä. Tämä sivusto on luotu kehitystä varten, eikä mikään ominaisuus ole tällä sivustolla sidonnainen'
            + ' <b>lopulliseen ulkoasuun</b>.\n <p class="h2 pt-5">Mistä tässä sitten on kyse?</p><br>'
                + 'Yksinkertaisesti uudesta ulkoasusta ja sivustosta. Sivustolle on tulossa toivottavasti uusia ominaisuuksia, kunhan hommat saataisiin ensin rullaamaan.'
                + ' Uusi ulkoasu oli kuitenkin tarpeen, eikä kaikkea ole vieläkään saatu valmiiksi. Siksi saatat nähdä rikkinäisiä elementtejä, teemaan sopimatonta sisältöä'
                + ' tai ylipäätänsä huonosti toteutettuja asioita. <br><br>'
                + 'Sivustoon on käytetty kahta frontend-verkkokehystä, toinen JavaScript ja toinen CSS pohjainen. React ja Bootstrap ovat tuoneet helppoutta ja mukavuutta'
                + ' käyttöliittymän luontiin. Sivuston ulkoasu ei ole muuttunut kovin radikaalisti, kuin tiettyjen osioiden kannalta. Suurin ulkoasumuutos on todennäköisesti'
                + ' värityksen ja teeman vaihto. <br><br>'
                + 'Sivustolle oli tarkoitus suunnitella ulkoasu myöhempää käyttöä varten. Tässä näette käyttöliittymän ensiaskeleita. Tänään se on tällainen, huomenna se on'
                + 'toisenmoinen. :) </p>'
        }

        return (
            <button onClick={this.handleState} className="btn btn-outline-light kara-btn translation" data-toggle="tooltip" title="Toggle translate"><i className="fas fa-language"></i></button>
        )
    }
}

ReactDOM.render(<TranslateButton/>, button);

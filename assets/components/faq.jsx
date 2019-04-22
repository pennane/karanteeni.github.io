'use-strict';

class FrequentlyAskedQuestions extends React.Component {
    render() {
        return(
            <div class="accordion" id="faqAccordion">
                <Divider name='Yleinen'/>
                    <Accordion id='yle1' question='Koska palvelin saa 1.14 päivityksen?' target='ylecol1' answer='No Estimated Time of Arrival is provided.'/>
                    <Accordion id='yle2' question='Minkä lumousten kanssa Tuhoaminen ei ole yhteensopiva?' target='ylecol2' answer='Vaikka tuhoamiseen voi laittaa lumouksia kiinni,
                    se ei ole yhteensopiva mm. Mendingin, Fortunen, Succ:n, Sulatuksen tai Silk Touchin kanssa, ja näin ollen rikkoo hakkusi.'/>
                    <Accordion id='yle3' question='Saanko asettaa kodin Netheriin tai Endiin?' target='ylecol3' answer='Saat, mutta emme suosittele. Nether ja End resetoidaan
                    kuukauden välein, mikä voi aiheuttaa kodin korruptoitumista ja sinun kuoleman. Tämä tarkoittaa siis sitä, että saatat kuolla jos käytät kotia resetoinnin jälkeen.
                    Ylläpito ei ole velvollinen palauttamaan tavaroitasi.' />
                    <Accordion id='yle4' question='Voinko käyttää palvelimen muita omia lumouksia?' target='ylecol4' answer='Voit. Ota huomioon, että palvelimen omat lumoukset
                    ovat rikki ja kehitysvaiheessa. Näin ollen emme voi taata niiden yhteensopivuutta keskenään tai vanillan lumouksien kanssa.'/>
                    <Accordion id='yle5' question='Tahtoisin ylläpitäjäksi. Kuinka voin saavuttaa sen?' target='ylecol5' answer={['Käy lukemassa ohjeet ',
                    <a id="link" href="/yphaku">täältä</a>, ' ja lähetä hakemus Karanteenin sähköpostiin.']}/>
                    <Accordion id='yle6' question='Kuinka monta blockia spawnissa on?' target='ylecol6' answer={['On. ', <em>-PreGauris</em>]}/>
                    <Accordion id='yle7' question='Apua! Ei ole oikeuksia komentoon, vaikka pitäisi olla.' target='ylecol7' answer='Koita poistua palvelimelta ja liittyä
                    uudelleen. Ihme ja kumma tämä korjaa suurimman osan oikeusongelmistani.'/>

                <Divider name='Suojaus'/>
                    <Accordion id='prot1' question='Miten voin suojata alueeni?' target='protcol1' answer='Ylläpitäjä suojaa alueen. Mikäli aiot luoda kylän, voit päättää
                    alueelle nimen. Warpin kylälle saa vasta, kun kylällä on 15 asukasta.'/>
                    <Accordion id='prot2' question='Apua! Taloani on grieffattu!' target='protcol2' answer='Ei hätää. Pääset Karanteenin Discordiin /discord komennolla, tai voit
                    nykäistä jo paikalla olevaa ylläpitäjää hihasta. Joka tapauksessa saat grieffatun talosi kuntoon, sekä tavarat takaisin. Grieffaaja sitä vastoin saa porttikiellon
                    palvelimelle.'/>
                    <Accordion id='prot3' question='Kuinka annan kaverilleni oikeudet alueeseen?' target='protcol3' answer={['Oikeudet alueeseen voit antaa komennolla ',
                    <code>/trust suojauksen_nimi pelaajan_nimi</code>, ' seisen suojauksen sisällä. Suojauksen nimen saat selville komennolla /rg i, kun seisot sen päällä.']}/>
                    <Accordion id='prot4' question='Kuinka annan kaverilleni oikeudet chesteihin ja uuneihin?' target='protcol4' answer={['Voit antaa oikeudet kyseisiin blockeihin ',
                    'katsomalla blockia ja kirjoittamalla komennon ', <code>/+oikeudet pelaajan_nimi</code>, '. Tämän jälkeen kaverillasi on oikeudet avata kyseinen arkku.',
                    'Komento toimii myös muihin container blockeihin.']}/>

                <Divider name='Ekonomia'/>
                    <Accordion id='eco1' question='Kuinka voin luoda arkkukaupan?' target='ecol1' answer='Voit luoda arkkukaupan lyömällä arkkua tavara kädessä ja Shift
                    painettuna pohjaan. Tämän jälkeen chat kysyy sinulta hinnan tavaralle. Kirjoita hinta ja näin arkkukauppasi on valmis.'/>
                    <Accordion id='eco2' question='Mitä valuuttaa palvelin käyttää ja kuinka saan sitä?' target='ecol2' answer={['Palvelimella on rahavaluuttana pennit.',
                    'Pennejä saat kaivamalla raaka-aineita maan syvyyksistä ja muuttamalla ne blockeiksi. Voit myydä blockit sen jälkeen spawnin kaupassa (/warp kauppa).',
                    'Myytäviksi blockeiksi kelpaavat vain Coal, Quartz, Iron, Gold, Redstone, Lapis Lazuli, Emerald ja Diamond blockit.',<br/>, <br/>,
                    'Voit myös luoda arkkukaupan tai äänestää. Jokaisesta äänestyksestä saat 100 penniä, mutta varmista, että olet Survival maassa.']}/>
                    <Accordion id='eco3' question='En saanut äänestyksessä pennejä.' target='ecol3' answer='Varmista, että olet ensikerralla Survivalin päämaassa. Ylläpito
                    antanee rahat manuaalisesti.'/>

                <Divider name='Kodit'/>
                    <Accordion id='home1' question='Hukkasin kotini. Kuinka saan sen takaisin?' target='homecol1' answer='Nykäise ylläpitäjää hihasta ja kerro hänelle mitä teit
                    viimeksi kotisi lähettyviltä ja miltä se näytti. Näin saamme palautettua sinut oikeaan paikkaan'/>
                    <Accordion id='home2' question='En pysty teleporttaamaan, poistamaan tai asettamaan koteja. Internal error, wat do?' target='homecol2' answer='Sano lähimmälle
                    ylläpitäjälle asiasta. Todennäköisesti joku tai jotkin kodeistasi ovat korruptoituneet ja joudumme poistamaan ne manuaalisesti. Mikäli ylläpitoa ei ole paikalla,
                    liity Karanteenin Discord palvelimelle ja kerro ongelmastasi hohhoijaa:lle, Jomelle tai Nuublesille.'/>
            </div>
        )
    }
}

class Accordion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            question: this.props.question,
            target: this.props.target,
            answer: this.props.answer
        }
    }
    render() {
        return (
            <div class="card bg-transparent">
                <div class="card-header" id={this.props.id}>
                    <h2 class="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={'#' + this.props.target} aria-expanded="true" aria-controls={this.props.target}>
                        {this.props.question}
                        </button>
                    </h2>
                </div>
                <div id={this.props.target} className="collapse" aria-labelledby={this.props.id} data-parent="#faqAccordion">
                    <div class="card-body">
                        {this.props.answer}
                    </div>
                </div>
            </div>
        )
    }
}

class Divider extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: this.props.name
        }
    }
    render() {
        return (
            <h4 className='text-left mt-3'>{this.props.name}</h4>
        )
    }
}

ReactDOM.render(<FrequentlyAskedQuestions/>, document.getElementById('faq'));
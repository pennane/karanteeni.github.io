'use-strict';

class FrequentlyAskedQuestions extends React.Component {
    render() {
        return(
            <div class="accordion" id="faqAccordion">
                <Divider id='yleinen' name='Yleinen'/>
                    <Accordion id='yle1' question='Koska palvelin saa päivityksen?' target='ylecol1' answer='Wise chinese man once said: 我不知道'/>
                    <Accordion id='yle2' question='Tahtoisin ylläpitäjäksi. Kuinka voin saavuttaa sen?' target='ylecol2' answer={['Käy lukemassa ohjeet ',
                    <a id="link" href="/yphaku">täältä</a>, ' ja lähetä hakemus käyttäen annettua lomaketta.']}/>
                    <Accordion id='yle3' question='Apua! Ei ole oikeuksia komentoon, vaikka pitäisi olla.' target='ylecol3' answer='Koita poistua palvelimelta ja liittyä
                    uudelleen. Mikäli ongelma ei korjaantunut, nykäise ylläpitäjää hihasta.'/>
                    <Accordion id='yle4' question='Kuinka pääsen korkeammalle tasolle?' target='ylecol4' answer={['Pelaamalla. Rankeista löydät lisätietoa ', 
                    <a id="link" href="rankit">täältä</a>, '.']}/>
                    <Accordion id='yle5' question='Löysin palvelimelta peliä rikkovan vian. Mitä teen?' target='ylecol5' answer={['Ota yhteyttä ylläpitäjään joko palvelimella',
                    ' tai liity Karanteenin Discordiin ja valitse sieltä kanava "Bugit ja parannusehdotukset". Mikäli bugia voi hyväksikäyttää, pidä se omana tietonasi, äläkä kerro muille pelaajille.', <br/>, <br/>,
                    'Bugin hyväksikäyttö on ', <b>ankarasti kiellettyä</b>, '. Mikäli jäät siitä kiinni, saat siitä automaattisesti tuntuvan porttikiellon.', <br/>, <br/>,
                    'Hyväksikäytettävän / peliä rikkovan bugin ilmiantamisesta saa yleensä korvauksen.']}/>
                    <Accordion id='yle6' question='Voinko käyttää kahta tiliä palvelimella?' target='ylecol6' answer={['Voit, mutta tilit eivät saa hyötyä toisistaan. Tähän lukeutuu', 
                    ' mm. tavarapakkausten ja äänestysrahojen siirtäminen toiselle tilille. Pelitilit eivät saa olla yhtä aikaa palvelimella.']}/>
                    <Accordion id='yle7' question='Kuinka usein maailma nollataan?' target='ylecol7' answer={['Maailma nollataan yleensä noin puolen vuoden välein,',
                    ' mutta ei tapahdu automaationa. Yleensä maailman nollaus myös tähdätään seuraavan Minecraftin suuren versiopäivityksen kohdille.', <br/>, <br/>,
                    'Nether ja End sitä vastoin nollataan kerran kuukaudessa, yleensä joka kuukauden alussa.']}/>

                <Divider id='suojaus' name='Suojaus'/>
                    <Accordion id='prot1' question='Miten voin suojata alueeni?' target='protcol1' answer={['Ylläpitäjä suojaa alueen ja suojaukseen vaaditaan talon alku.',
                    ' Mikäli aiot luoda kylän, voit päättää alueelle nimen. Warpin kylälle saa vasta, kun kylällä on 15 asukasta.', <br/>, <br/>,
                    'Netheriin ja Endiin ei pääsääntöisesti suojata alueita.']}/>
                    <Accordion id='prot2' question='Apua! Taloani on grieffattu!' target='protcol2' answer='Ei hätää. Pääset Karanteenin Discordiin /discord komennolla, tai voit
                    nykäistä jo paikalla olevaa ylläpitäjää hihasta. Joka tapauksessa saat grieffatun talosi kuntoon, sekä tavarat takaisin. Grieffaaja sitä vastoin saa porttikiellon
                    palvelimelle.'/>
                    <Accordion id='prot3' question='Kuinka annan kaverilleni oikeudet alueeseen?' target='protcol3' answer={['Oikeudet alueeseen voit antaa komennolla ',
                    <code>/trust suojauksen_nimi pelaajan_nimi</code>, ' seisten suojauksen sisällä. Suojauksen nimen saat selville komennolla ', <code>/rg i</code>, ' kun seisot sen päällä.']}/>
                    <Accordion id='prot4' question='Kuinka annan kaverilleni oikeudet chesteihin ja uuneihin?' target='protcol4' answer={['Voit antaa oikeudet kyseisiin blockeihin ',
                    'katsomalla blockia ja kirjoittamalla komennon ', <code>/+oikeudet pelaajan_nimi</code>, '. Tämän jälkeen kaverillasi on oikeudet avata kyseinen arkku.',
                    ' Komento toimii myös muihin container blockeihin.']}/>
                    <Accordion id='prot5' question='Löysin suojaamattoman arkun. Voinko ottaa sieltä tavaraa?' target='protcol5' answer='Et. Vaikka löytäisit arkun tai kokonaan
                    suojaamattoman arkun, et saa ottaa sieltä tavaroita tai rikkoa paikkaa. Grieffaaminen johtaa usein porttikieltoon.'/>

                <Divider id='ekonomia' name='Ekonomia'/>
                    <Accordion id='eco1' question='Kuinka voin luoda arkkukaupan?' target='ecol1' answer='Voit luoda arkkukaupan lyömällä arkkua tavara kädessä ja Shift
                    painettuna pohjaan. Tämän jälkeen chat kysyy sinulta hinnan tavaralle. Kirjoita hinta ja näin arkkukauppasi on valmis.'/>
                    
                    <Accordion id='eco2' question='Mitä valuuttaa palvelin käyttää ja kuinka saan sitä?' target='ecol2' answer={['Palvelimella on rahavaluuttana pennit.',
                    ' Pennejä saat hankkimalla uutta peliaikaa, sekä palvelinta äänestämällä ', <code>/vote</code>, '. Jokainen äänestykerta on 50 pennin arvoinen.',<br></br>,'Voit myös myydä sekä ostaa tavaraa käyttämällä arkkukauppoja.']}/>
                    {/*
                    <Accordion id='eco2' question='Mitä valuuttaa palvelin käyttää ja kuinka saan sitä?' target='ecol2' answer={['Palvelimella on rahavaluuttana pennit.',
                    ' Pennejä saat kaivamalla raaka-aineita maan syvyyksistä ja muuttamalla ne blockeiksi. Voit myydä blockit sen jälkeen spawnin kaupassa (/warp kauppa).',
                    ' Myytäviksi blockeiksi kelpaavat vain Coal, Quartz, Iron, Gold, Redstone, Lapis Lazuli, Emerald ja Diamond blockit.',<br/>, <br/>,
                    'Voit myös luoda arkkukaupan tai äänestää. Jokaisesta äänestyksestä saat 100 penniä, mutta varmista, että olet Survival maassa.']}/>
                    */}

                <Divider id='kodit' name='Kodit'/>
                    <Accordion id='home1' question='Hukkasin kotini. Kuinka saan sen takaisin?' target='homecol1' answer='Nykäise ylläpitäjää hihasta ja kerro hänelle mitä teit
                    viimeksi kotisi lähettyviltä ja miltä se näytti. Näin saamme palautettua sinut oikeaan paikkaan'/>
                    <Accordion id='home2' question='En pysty teleporttaamaan, poistamaan tai asettamaan koteja. Internal error, wat do?' target='homecol2' answer='Sano lähimmälle
                    ylläpitäjälle asiasta. Todennäköisesti joku tai jotkin kodeistasi ovat korruptoituneet ja joudumme poistamaan ne manuaalisesti. Mikäli ylläpitoa ei ole paikalla,
                    liity Karanteenin Discord palvelimelle ja kerro siellä ongelmastasi ylläpidolle.'/>
                    <Accordion id='home3' question='Saanko asettaa kodin Netheriin tai Endiin?' target='homecol3' answer='Saat, mutta emme suosittele. Nether ja End resetoidaan
                    kuukauden välein, mikä voi aiheuttaa kodin korruptoitumista ja sinun kuoleman. Tämä tarkoittaa siis sitä, että saatat kuolla jos käytät kotia resetoinnin jälkeen.
                    Ylläpito ei ole velvollinen palauttamaan tavaroitasi.'/>
                
                <Divider id='rangaistukset' name='Rangaistukset'/>
                    <Accordion id='pun1' question='Montako rangaistusta voin saada?' target='puncol1' answer='Riippuu käyttäytymisestäsi servulla. Toistaiseksi annamme korkeintaan kaksi porttikieltoa, joista
                    jälkimmäinen on aina ikuinen, jos ensimmäinen on ollut yli viiden (5) päivän mittainen.'/>
                    <Accordion id='pun2' question='Mitä rankaisumenetelmiä teillä on olemassa?' target='puncol2' answer='Hiljennykset, varoitukset, sekä porttikiellot. Kolme varoitusta on
                    aina viikon porttikielto.'/>
                    <Accordion id='pun3' question='Sain rangaistuksen turhasta!' target='puncol3' answer='Liity Karanteenin Discordiin ja kerro asiasi #apua -kanavalla.
                    Muista, että vaikka jokin ei olisi kiellettyä säännöissä, siitä voidaan silti rangaista. Ylläpitäjien näkemykset voivat myös erota toisistaan, jonka vuoksi
                    keskustele rangaistuksesta rangaistuksen antajan kanssa.'/>

                <Divider id='modit' name='Modit'/>
                    <Accordion id='mod1' question='Mitkä modit ovat sallittuja Karanteenissa?' target='modcol1' answer='Pääsääntöisesti kaikki pelaajia hyödyttävät modit ovat kiellettyjä, siinä missä grafiikkamodit
                    kuten OptiFine ovat sallittuja. Nykäise ylläpitäjää hihasta mikäli et ole varma.'/>
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
            name: this.props.name,
            id: this.props.id
        }
    }
    render() {
        return (
            <h4 id={this.props.id} className='text-left mt-3'>{this.props.name}</h4>
        )
    }
}

ReactDOM.render(<FrequentlyAskedQuestions/>, document.getElementById('faq'));
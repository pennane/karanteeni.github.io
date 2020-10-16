'use-strict';


class Articles extends React.Component {
    render() {
        return (
            <React.Fragment>

                <ArticleBody>
                    <Title label={true} type='announcement'>
                        1.16.3
                    </Title>
                    <Time>
                        11.09.2020
                    </Time>
                    <Content>
                        <p>
                            Palvelin on päivitetty nyt 1.16.3 versioon. Tämän lisäksi nykyinen roadmappimme ei pidä paikkaansa ja se täytynee päivittää uudelleen jossain kohti.
                            Toistaiseksi halloween-tapahtuma on siis peruttu ajanpuutteen vuoksi ja keskitymme täysillä joulujuhlaan. Päivitetyn roadmapin saanette myöhemmin.
                        </p>
                        <p>
                            Ilmoittanemme myös, että Eye of Enderit toistaiseksi johdattavat täysin satunnaisiin paikkoihin, eli ovat rikki. Todennäköinen syy tälle on 1.15 kartta,
                            sillä emme generoineet uutta karttaa tässä päivityksessä.
                        </p>
                        <p>
                            Mukavaa syksyn odotusta.
                        </p>
                        <p>
                            Ystävällisin terveisin,<br/>
                            Karanteenin ylläpito
                        </p>
                    </Content>
                </ArticleBody>


                <ArticleBody>
                    <Title label={true} type='update'>
                        Welcome to the Nether!
                    </Title>
                    <Time>
                        20.08.2020, muokattu 11.09.2020
                    </Time>
                    <Content>
                        <p>
                            <a id="link" href="https://www.minecraft.net/fi-fi/article/nether-update-java" target="_blank" rel="noopener noreferrer">The Nether Update</a> on
                            saapunut myös Karanteeniin! TL;DR löytynee postauksen lopusta.
                        </p>
                        <p>
                            Nether Update on Karanteenin suurin pelikokemusta muuttava päivitys. 1.16.2 version pyöriessä palvelimella, mietimme samalla palvelintamme.
                            Kysyimme teiltä 3. kesäkuuta 2020, millä tavoin voimme parantaa teidän pelikokemustanne ja olemme jo saaneet suunnitelmaa tähän. Nether Update teki
                            joitain asioita helpoksi meidän kantiltamme. Löimme lukkoon 29. kesäkuuta, että nollaamme Netherin tästedes viimeisen kerran hetkeen. Samalla End
                            nollautuu vain kerran kartan aikana, suunnilleen puolessa välissä puolen vuoden aikataulua.
                        </p>
                        <br/>
                        <p>
                            Kuten varmasti huomaatte, nettisivuja on mukautettu <strong>huomattavasti</strong>. Nettisivujen tiettyjä elementtejä on "modernisoitu" ja tehty
                            selkeämmäksi. Samalla nettisivut saivat hornan tulisen ulkoasun juhlistaaksemme Nether Updatea. Ylläpitokortit saivat uuden ulkoasun, jossa nyt
                            lyhyesti selitetty myös ylläpitäjien vahvuudet. Navigaatiopalkki sai itselleen napit ja alasvetovalikkoihin animaatiot. Footeria laajennettiin ja
                            sisältää varmasti kauan kaivatut sosiaalisen median linkit. Sen lisäksi sieltä pääsee helposti navigoimaan seuraavaan paikkaan, mikäli kokee
                            tarpeelliseksi. Työtä nettisivujen kanssa on kuitenkin vielä paljon, sillä selkeä ulkoasu ja käyttökokemus ovat hyviä ominaisuuksia.
                        </p><br/>
                        <p>
                            <strong>Miksi tässä päivityksessä kesti näin kauan?</strong> Ajan puute, 1.16.2 version odottaminen, plugineiden päivittäminen, odottamattomat
                            ongelmat... Man, life is unpredictable at times.
                        </p>
                        <p>
                            <strong>TL;DR:</strong><br/>
                            <ul>
                            <li>Palvelimella pyörii Paper 1.16.2</li>
                            <li>End ja Nether nollattu, End nollataan jatkossa vain kerran per kartta</li>
                            <li>Nettisivua "modernisoitu", mutta sitä jatketaan + Nether teema</li>
                            </ul>
                        </p>
                        <p>
                            Terveisiä Crimson Forestista, Netheristä. <br/>
                            Karanteenin ylläpito
                        </p>
                    </Content>
                </ArticleBody>


                <ArticleBody>
                    <Title label={true} type='announcement'>
                        Kesän mapreset
                    </Title>
                    <Time>
                        22.04.2019
                    </Time>
                    <Content>
                        <p>
                            Iltaa!
                        </p>
                        <p>
                            Maailmanloppu ja mapin resetointi meni yllättävän sulavasti. Resetoinnnin yhteydessä korjattiin tiettyjä bugeja, kuten mobien
                            tracking range, lumouspöydän väärät ehdotukset ja Nether-portaalien + mobien yhteistyö. Sen lisäksi kyliin liittyvä mainostussääntö
                            on nyt muutettu hieman vapaammaksi, jonka täsmennyksen voi lukea <a id="link" href="/saannot">säännöistä</a>, sekä Discordin ilmoituskanavalta.
                        </p>
                        <br/>
                        <p>
                            <strong>Sääntömuutos in a nutshell:</strong><br/><br/>
                            <ol>
                            <li>Kyliä saa mainostaa yleisesti chatissä.</li>
                            <li>MSG-mainostus on kiellettyä</li>
                            <li>Copy & Paste mainosviestit ovat kiellettyjä</li>
                            <li>Voit mainostaa kylääsi spawnilla</li>
                            </ol>
                        </p><br/>
                        <p>
                            Toivottavasti nautitte uudistuksista ja paransimme jälleen pelikokemusta. Olette yhteisönä meille tärkeä! Hyvää kesää kaikille! &#9829;
                        </p>
                        <p>
                            Ystävällisin terveisin, <br/>
                            Karanteenin ylläpito
                        </p>
                    </Content>
                </ArticleBody>


                <ArticleBody>
                    <Title label={true} type='announcement'>
                        Karanteeni ja uusi palvelin
                    </Title>
                    <Time>
                        22.04.2019
                    </Time>
                    <Content>
                        <p>
                            Hyvää iltaa!
                        </p>
                        <p>
                            Karanteenin datan siirto uudelle palvelimelle on onnistuneesti suoritettu. Palvelimen suorituskyky käytännössä kymmenkertaistui ja käyttöön otettiin
                            myös uusi palvelinohjelmisto. Kiitämme teitä pitkäaikaisesta kärsivällisyydestä, toivottavasti pelikokemuksenne on nyt parantunut. :3
                        </p>
                        <br/>
                        <p>
                            Ystävällisin terveisin, <br/>
                            Karanteenin ylläpito
                        </p>
                    </Content>
                </ArticleBody>


                <ArticleBody>
                    <Title label={true} type='update'>
                        1.15.2 Map reset
                    </Title>
                    <Time>
                        22.04.2019
                    </Time>
                    <Content>
                        <p>
                            Palvelimella on juuri (16.2.2020) resetattu kartta, jossa versiona toimii 1.15.2.
                            Toisin sanoen viime mapin rahat, rakennelmat ja muut ovat nyt historiaa, ja tämä tarkoittaa sitä, että
                            viimein voi taas aloittaa rakentelut niin sanotusti nätisti puhtaalta pöydältä.
                        </p>
                        <p>
                            <strong>P.S </strong>Ylläpitohaku pyörii edelleen. Innokkaita ja haun vaatimuksia täyttäviä halukkaita
                            kaivataan ylläpitojoukkoon. Lisätietoa ylläpitoon hakemisesta löytyy&nbsp;
                            <a href="yphaku" id="link">täältä</a>.
                        </p>
                        <br/>
                        <p>
                            Ystävällisin terveisin, <br/>
                            Karanteenin ylläpito
                        </p>
                    </Content>
                </ArticleBody>


                <ArticleBody>
                    <Title label={true} type='announcement'>
                        Joulun ja korjausten näkymät
                    </Title>
                    <Time>
                        22.04.2019
                    </Time>
                    <Content>
                        <p>
                            Pyrimme parhaamme mukaan selättämään jo aikansa palvelinta kiusanneet 1.14 version mukana saapuneet
                            ongelmat, ja kiitämme teitä kärsivällisyydestä. Puhutaan nyt kuitenkin jostain mukavammasta, nimittäin
                            joulusta.
                        </p>
                        <p>
                            Karanteenin joulukuu tulee olemaan varsin kiireellistä aikaa koko Karanteenin väelle elottomasta
                            ylläpitoon. Joulukuulta voi odottaa päivityksiä palvelimen toimintaan liittyen (komentojen, pluginien
                            korjauksia yms.), mutta ehkä mielenkiintoisempaa on huomauttaa, että parannusten ohella on saapumassa
                            monia jouluisia tapahtumia.
                        </p>
                        <p>
                            Joulukuussa Karanteeniin aukeaa joulukalenteri, minkä ansiosta joulu tulee olemaan varsin
                            tapahtumakeskeinen.
                            Suosittelemme pitämään silmällä tätä sivua sekä Discordin ilmoitukset ja tapahtumat -kanavia, sillä
                            luvassa on varsin hauskoja ja mielenkiintoisia yllätyksiä.
                        </p>
                        <p>
                            Huomioitavaa myös on, että täällä netissä pyritään korjaamaan vanhentuneet tiedot voimassaoleviksi.
                            Pitkälti kaikki paikkaansa pitämätön tieto on jo karsittu pois, mutta mikäli silmään kuitenkin vielä
                            kantautuu
                            väärää tai vanhentunutta tietoa, pyydämme ilmoittamaan siitä ylläpidolle.
                        </p>
                        <br/>
                        <strong>TLDR;</strong> Joulukuussa Karanteenissa on kaksi päälimmäistä agendaa: palvelimen
                        pintaremontointi ja tapahtumakeskeinen joulun odotus.<br/><br/>
                        <p>
                            Ystävällisin terveisin, <br/>
                            Karanteenin ylläpito
                        </p>
                    </Content>
                </ArticleBody>

                <ArticleBody>
                    <Title label={true} type='update'>
                        Villages & Pillages
                    </Title>
                    <Time>
                        22.04.2019
                    </Time>
                    <Content>
                        <p>
                            Kauan odotettu 1.14 päivitys Karanteeniin on saapunut! <br/><br/>
                            <strong>TLDR;</strong> vaihdoimme palveluntarjoajaa ja otimme käyttöön BungeeCordin (Spigot 1.14.4).
                            Palvelimella esiintyy bugeja, eikä kaikkia ominaisuuksia
                            ole vielä lisätty, mutta saapuvat ajan kanssa. <br/><br/>
                            <strong><span class="text-danger">HUOM!</span></strong> Tiedämme, että serverillä on lagia (johtuen
                            1.14.4), sitä ei tarvitse kertoa. <br/><br/>
                            Päivitys tuo tullessaan BungeeCordin, uuden IP-osoitteen, uutta palvelinrautaa (jotta serveri pysyisi
                            pelaamiskelpoisena), uudet pluginit ja huomattavasti
                            vähemmän bugeja. Karanteeni aloittaa toimintansa aluksi pelkästään Survival pelimuodolla PvP:n jäädessä
                            tauolle. Nuublesin ollessa kiireinen ei kaikkia
                            ominaisuuksia ole myöskään ehditty toteuttaa, mutta saapuvat ajan kanssa. Creative ja Hub lisätään
                            myöhemmin, jotka BungeeCordin ansiosta toteutuvat omina
                            palvelimina. Pähkinänkuoressa tämä tarkoittaa sitä, että voitte jatkaa rauhassa Survivalin pelaamista,
                            jos Gauris kaataa Creativen sillä välin. <br/><br/>
                            Suunnitelmissa on myös Skyblockin ja minipelien tuominen takaisin, kukin omina versioinaan kunhan aikaa
                            ensin löytyy. Survivalin päämuutoksiin tulevaisuudessa
                            kuuluu ekonomian muuttaminen ja tasapainottaminen, pelimuodon vaikeuttaminen itsessään, sekä
                            mahdollisesti pelaajien omat suojaukset. Jälkimmäisestä ei ole
                            mitään varmuutta. <br/><br/>
                            Nettisivut saivat myös hieman ehostusta ympäri sivustoa. Vanha muutosloki on dumpattu ja tilalle luotu
                            loki 1.14 versiota koskevia muutoksia varten. <br/><br/>
                            <strong>Muistutuksen arvoisia asioita tähän loppuun:</strong> Karanteeni hakee edelleen uutta ja
                            aktiivista ylläpitoa, nettisivu saattaa sisältää vanhaa tietoa
                            ja palvelimen IP-osoite on vaihtunut. <br/><br/>
                            Ystävällisin terveisin, <br/>
                            Karanteenin ylläpito
                        </p>
                    </Content>
                </ArticleBody>


                <ArticleBody>
                    <Title label={true} type='announcement'>
                        Nettisivujen uusi ulkoasu
                    </Title>
                    <Time>
                        22.04.2019
                    </Time>
                    <Content>
                        <p>
                            Tervehdys. <br/>
                            Olemme tapelleet syyskuusta lähtien sivujen värimaailman kanssa. Joidenkin mielestä joku
                            oli liian
                            kirkas, joku liian tumma, eikä koskaan sopivaa.
                            Kun laitoimme tumman teeman suurimman osan toiveesta ettei silmät hajoa, tajusimme, että
                            sivut näyttivät
                            itseasiassa tylsiltä.
                            Pääsimme kuitenkin hyvin lähelle värimaailmaa, jossa suurin osa sopii hyvin yhteen, eikä
                            näytä liian
                            tylsältä tai kankealta, vaikka geneeriseltä saattaa
                            näyttääkin. <br/><br/>
                            Mikä sitten muuttui?
                            <ul>
                                <li>Ylläpitojutut vaihtanut paikkaa, sekä niiden määrää lisätty</li>
                                <li>Fonttikoko pienentynyt</li>
                                <li>Minecraft -tyylinen fontti ja ulkoasu</li>
                                <li>Vanha tuttu palvelimen statuskysely palautettu</li>
                                <li>Lisätty UKK -osio</li>
                                <li>Rankit saivat uuden ulkoasun (kiitos Susselle ideasta!)</li>
                            </ul>
                            Toivomme, että tämä miellyttää silmäänne hieman enemmän. :)
                        </p>
                    </Content>
                </ArticleBody>

                <ArticleBody>
                    <Title label={true} type='announcement'>
                        Ylläpitohaku
                    </Title>
                    <Time>
                        12.03.2019
                    </Time>
                    <Content>
                        <p>
                            Hei. <br/>
                            Karanteenin ylläpitoarvojärjestys on muuttunut, jonka seurauksena olemme avanneet
                            avoimet hakemukset
                            kaikille. Karanteenissa on pitkän aikaa ollut tasan kaksi
                            <span data-toggle="tooltip" data-placement="top"
                            title="Omistajaa ei lasketa, sillä sinne ei ole mahdollista päästä."><b>ylläpitoarvoa</b></span>,
                            Rakentaja ja Admin. Tähän on kuitenkin tehty muutoksia, joka mahdollistaa nyt avoimet
                            hakemukset
                            ylläpitoon. Uusia ylläpitoarvoja on kaksi,
                            kokonaismäärän ollessa neljä. <br/>Hakemuksien ollessa edelleen vapaamuotoisia, kriteerit
                            ovat kuitenkin
                            muuttuneet. Lisätietoa löydät
                            <a href="yphaku" id="link">täältä</a>. <br/><br/>
                            Toivomme, että ratkaisu olisi kaikille hyödyksi, etenkin yhteisölle itselleen. Onnea
                            jokaiselle, joka
                            hakemuksen lähettää. :)
                        </p>
                    </Content>
                </ArticleBody>
            </React.Fragment>
        )
    }
}


const ArticleBody = (props) => {
    return (
        <div className="px-1 container pt-3 pb-3">
            <div className="karaupdate card bg-transparent card-body content">
                {props.children}
            </div>
        </div>
    )
}


const Title = (props) => {

    if (props.label) {
        if (props.type == "update") {
            return (
                <h2 id="title" className="title">
                    {props.children}&nbsp;
                    <Label text="Päivitys" css="success"/>
                </h2>
            )
        } else if (props.type == "important") {
            return (
                <h2 id="title" className="title">
                    {props.children}&nbsp;
                    <Label text="Tärkeä" css="danger"/>
                </h2>
            )
        } else if (props.type == "announcement") {
            return (
                <h2 id="title" className="title">
                    {props.children}&nbsp;
                    <Label text="Ilmoitus" css="primary"/>
                </h2>
            )
        } else if (props.type == "event") {
            return (
                <h2 id="title" className="title">
                    {props.children}&nbsp;
                    <Label text="Tapahtuma" css="secondary"/>
                </h2>
            )
        } else if (props.type == "tech") {
            return (
                <h2 id="title" className="title">
                    {props.children}&nbsp;
                    <Label text="Tekninen" css="warn"/>
                </h2>
            )
        }
    } else {
        return (
            <h2 id="title" className="title">
                {props.children}
            </h2>
        )
    }
}


const Time = (props) => {
    return (
        <small>
            {props.children}
        </small>
    )
}


const Content = (props) => {
    return (
        <div className="mt-3" id="content">
            {props.children}
        </div>
    )
}


const Image = (props) => {
    if (props.link) {
        return (
            <a href={props.link} target="_blank">
                <img data-toggle="tooltip" data-placement="top"
                title="Klikkaamalla kuvaa voit nähdä sen täysikokoisena." className="img-fluid" src={props.source}/>
            </a>
        )
    } else {
        return (
            <img src={props.source}/>
        )
    }
}

const Label = ({text, css}) => {
    return (
        <span className={'badge badge-pill badge-' + css}>{text}</span>
    )
}

ReactDOM.render(<Articles/>, document.getElementById('articles'));
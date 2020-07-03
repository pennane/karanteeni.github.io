class CommonRules extends React.Component {
    render() {
        return (
            <React.Fragment>
                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Hack-clientit ovat kiellettyjä</Heading>
                        <Description>
                            Huijausohjelmien (esim. Xray) käyttäminen on kiellettyä.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Modit ovat kiellettyjä</Heading>
                        <Description>
                            Pelin etenemistä edistävien modien käyttäminen (esim. schematica) on kiellettyä.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="allowed"/>
                    <Content>
                        <Heading>Optifine</Heading>
                        <Description>
                            Optifine, ja Optifinen kaltaiset suoritustehoa parantavat modit ovat sallittuja.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Asiattoman skinin tai käyttäjänimen käyttäminen on kiellettyä</Heading>
                        <Description>
                            Jos nimesi tai skinisi on rasistinen, alatyylinen, loukkaava, tai muuten asiaton, sinua pyydetään vaihtamaan se.
                            Muuten käyttäjäsi bannitaan skinin tai nimen vaihdon ajaksi.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Alt-accounttien hyväksikäyttäminen kielletty</Heading>
                        <Description>
                            Et saa käyttää alt-accountteja pääkäyttäjän edun hyväksi (esimerkiksi rahan siirtämistä, tai rankkien ominaisuuksien jakamista).
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Afkaaminen kielletty</Heading>
                        <Description>
                            Palvelimella afkaaminen on kielletty. Afkikoneiden rakentaminen tästä syystä myös ankarasti kielletty. <br/>
                            
                            Mobifarmeilla afkaaminen keräten mobeja on myös kiellettyä. Kuitenkin automaattiset mobifarmit on sallittuja,
                            kunhan entiteettejä ei keräänny liikaa aiheuttaakseen lagia.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Palvelimen lagittaminen kielletty</Heading>
                        <Description>
                            Palvelinta rasittavien ja lagittavien redstonerakennelmien teko on kielletty (esim. loputtomiin käyvät kellot, 0-tick farmit).
                            Lisää rakennelmaan sulkemisvipu ja pidä laite suljettuna, jos se ei ole käytössä. <br/><br/>
                            Palvelimen lagittamiseen kuuluu myös entiteetit (hostile mobit, lemmikit, kyläläiset).
                            <strong>
                            &nbsp;Ylläpidolla on oikeus tappaa suojauksestasi eläimiä, mikäli ne kuormittavat palvelinta.
                            </strong> <br/>
                            Tämän lisäksi teleporttailu matrixin ulkopuolelle (esimerkiksi koordinaatit yli Endin ja Netherin generointirajan, sekä mapin ulkopuolelle
                            jonka rajat ovat +-10k) on kiellettyä. Palvelimen tahallisesta lagittamisesta seuraa aina ikuinen porttikielto.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Ansaitun rankin hyväksikäyttäminen kielletty</Heading>
                        <Description>
                            Sinua alempirankkiset pelaajat eivät saa hyötyä rankkisi ominaisuuksista. Et saa esimerkiksi muuntaa spawnerin tyyppiä toisten puolesta,
                            tai myydä spawnereita, joihin pelaajalla ei ole vielä oikeutta.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="notice"/>
                    <Content>
                        <Heading>Olet velvoitettu ilmoittamaan rikkeestä</Heading>
                        <Description>
                            Jos havaitset sääntöjen rikkomista, välitä tieto välittömästi ylläpidolle. Pyri hankkimaan todisteita, kuten screenshotteja tai videoita.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>
           </React.Fragment>
        )
    }
}

class ChatRules extends React.Component {
    render() {
        return (
            <React.Fragment>
                <RuleContainer>
                    <Rule>
                    <Icon icon="important"/>
                    <Content>
                        <Heading>Pidetään keskustelut asiallisena</Heading>
                        <Description>
                            Muista, että keskustelet oikeiden ihmisten kanssa. Pyritään olemaan mahdollisimman ystävällisiä toisillemme.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>

                <RuleContainer>
                    <Rule>
                    <Icon icon="important"/>
                    <Content>
                        <Heading>Pidetään kieli kurissa</Heading>
                        <Description>
                            Turha kiroilu ja toisten pelaajien härnäminen tai kiusaaminen ei ole asianmukaista. Ollaanhan ihmisiksi.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>

                <RuleContainer>
                    <Rule>
                    <Icon icon="important"/>
                    <Content>
                        <Heading>Pidetään chatti siistinä</Heading>
                        <Description>
                            Turha spammaaminen, floodaaminen, ja CAPSILLA KIRJOITTAMINEN on kiellettyä.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Mainostaminen on kiellettyä</Heading>
                        <Description>
                            Älä mainosta (varsinkaan toisia palvelimia). Tämä ei kuitenkaan tarkoita sitä ettetkö saisi kertoa minkä merkkinen hiiri tai auto sinulla on,
                            mutta siinä se raja sitten kulkeekin.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>
            </React.Fragment>
        )
    }
}

class AdditionalRules extends React.Component {
    render() {
        return (
            <React.Fragment>
                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Grieffaaminen on kielletty</Heading>
                        <Description>
                            Toisten pelaajien rakennelmien tuhoaminen ja omaisuuden varastaminen on kielletty. Mikäli tielläsi on rakennus, pyydä ylläpitoa rikkomaan
                            tai siirtämään sitä.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Pelaajien vedättäminen, skämmääminen on kiellettyä</Heading>
                        <Description>
                            Et saa esimerkiksi huijata toiselta tavaraa.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Maisemagrieffaaminen kielletty</Heading>
                        <Description>
                            Maaston ja maiseman turmeleminen on kiellettyä. Puut on kasvatettava takaisin, hiekan hakkuu ei saa jättää rumia jälkiä ympäristöön,
                            turhien epäesteettisten rakennelmien rakentaminen on kielletty (esim. 1x1 dirt tornit).
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="notice"/>
                    <Content>
                        <Heading>Villager kylät ovat rauhoitettuja</Heading>
                        <Description>
                            Villager kyliä ei saa grieffata. Kylistä ei saa viedä sänkyjä tai <Tooltip work><strong>workstationeja.</strong></Tooltip> Kylien peltoja
                            saa käyttää, kunhan ne muistaa täyttää takaisin. Kylien heinäpaalut, sekä kellot saa ottaa itselleen. Kylän voi ottaa kodikseen, jolloin
                            kyliä koskevat säännöt eivät enää päde.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Pelaajien tappaminen ja pelaaja-ansojen rakentaminen kielletty</Heading>
                        <Description>
                            Et saa aiheuttaa vahinkoa toisiin pelaajiin. Rakennelmat, jotka voivat tappaa pelaajan, ovat ankarasti kiellettyjä.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                        <Icon icon="notice"/>
                        <Content>
                            <Heading>Karanteeni on poliittisesti neutraali palvelin</Heading>
                            <Description>
                                Tämä tarkoittaa sitä, että chatissa ja palvelimella pyritään välttämään poliittisia aatteita, symboleita tai ideologioita. Myös
                                yleistä keskustelua politiikasta pyritään välttämään, koska se yleensä aiheuttaa väittelyitä ja eripuraa.
                            </Description>
                        </Content>
                    </Rule>
                </RuleContainer>
            </React.Fragment>
        )
    }
}


class PlayerTownRules extends React.Component {
    render() {
        return (
            <React.Fragment>

                <RuleContainer>
                    <Rule>
                        <Icon icon="notice"/>
                        <Content>
                            <Heading>Kylän mainostaminen julkisesti</Heading>
                            <Description>
                                Kylien mainostus on sallittua, mutta jos pelaajat antavat siitä palautetta, täytyy siinä hommassa rauhoittua. Pyynnön ohittamisesta
                                seuraa varoitus. Pyyntöä ei kuitenkaan saa tehdä syyttä, kaikilla on oltava mahdollisuus saada pelaajia kyläänsä.
                            </Description>
                        </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                        <Icon icon="denied"/>
                        <Content>
                            <Heading>Kylän mainostaminen yksityisesti</Heading>
                            <Description>
                                Kylien mainostus yksityisviestillä on kiellettyä. Tällä vältämme sen, että joku kokee mainostuksen hyökkäävänä. Kyliä saa mainostaa
                                julkisesti pitäen sen rajoissa. (Kts. yllä)
                            </Description>
                        </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                        <Icon icon="denied"/>
                        <Content>
                            <Heading>Copy &amp; Paste viestit ovat kiellettyjä</Heading>
                            <Description>
                                Copy Paste eli niin sanottu massapostaus on kiellettyä. Kukaan ei jaksa nähdä joka viides minuutti täysin samaa viestiä kylästäsi
                                ja siitä mitä palveluita siellä on. Kokeile sen sijaan mainostaa kylääsi ystävällisesti ja henkilökohtaisesti. Jos joku tarvitsee
                                xp-farmia ja kylässäsi on sellainen, mainitse se ihmeessä.
                            </Description>
                        </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                        <Icon icon="important"/>
                        <Content>
                            <Heading>Mainosta kylääsi spawnilla!</Heading>
                            <Description>
                                Jomelle voi yksityisviestillä laittaa 256x128 resoluutioisen kuvan, jossa mainostat omaa kylääsi. Se laitetaan
                                spawnille. Kylällä <u>on oltava warp</u>, jotta mainoksesi laitetaan näkyviin!
                            </Description>
                        </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                        <Icon icon="allowed"/>
                        <Content>
                            <Heading>Xp-farmit ja /spawner</Heading>
                            <Description>
                                Kyliin on mahdollista muuttaa spesifi spawner, mutta spawner täytyy palauttaa tai myydä alkuperäisessä mobissa takaisin.
                            </Description>
                        </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                        <Icon icon="notice"/>
                        <Content>
                            <Heading>Kylästä häätäminen</Heading>
                            <Description>
                                Kylän omistaja(t) voi(vat) häätää pelaajan sääntörikkomuksen seurauksena. Mikäli kylästä häädetään henkilö, tulee hänen tavaransa
                                palauttaa. Mikäli henkilö poistetaan kylästä ilman, että tavaroita palautetaan asianmukaisessa ajassa, on häätäjä rikkonut serverin
                                sääntöjä (varastaminen).
                            </Description>
                        </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                        <Icon icon="important"/>
                        <Content>
                            <Heading>Rakennusten purkaminen</Heading>
                            <Description>
                                Kylän omistajilla on oikeus purkaa rakennuksia <u><strong>kylänsä alueelta</strong></u>, antaen asukkaille asianmukaisessa ajassa
                                ennen sitä ilmoituksen rakennusten purkamisesta (n. viikko). Mikäli puretaan serverillä pelaamisen lopettaneen pelaajan talo, tulee
                                hänen tavaransa siirtää talteen nimettyihin arkkuihin, jotta ne voidaan palauttaa hänelle hänen palatessa servulle. Mikäli talo on
                                pelaajan rakentama, tulee myös taloon käytetyt materiaalit palauttaa.
                            </Description>
                        </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                        <Icon icon="important"/>
                        <Content>
                            <Heading>Maksut / verotus</Heading>
                            <Description>
                                Kylät voivat vaatia maksua pelaajilta, uhkauksena kylästä häätö. Pelaajilla ei ole kuitenkaan pakotetta maksaa maksuja, eikä heiltä
                                oleteta sitä. Mikäli maksun saanut henkilö ei ole kylän asukas saadessaan maksun, ei hänellä ole velvoitetta maksaa sitä. Kuitenkin
                                kylän omistaja(t) voi(vat) evätä häneltä kylään pääsyn jatkossa.
                            </Description>
                        </Content>
                    </Rule>
                </RuleContainer>

            </React.Fragment>
        )
    }
}


class Tooltip extends React.Component {
    render() {

        const workstations = "Bed, Lectern, Composter, Grindstone, Blast Furnace, Smoker, Fletching Table, Cartography Table, Brewing Stand, Smithing Table, " + 
        "Barrel, Loom, Stonecutter"

        const work = this.props.work;

        if (work) {
            return (
                <span data-toggle='tooltip' data-placement='top' title={workstations}>{this.props.children}</span>
            )
        }
    }
}

const RuleContainer = (props) => {
    return (
        <div className="rule-container">
            {props.children}
        </div>
    )
}

const Rule = (props) => {
    return (
        <div className="rule">
            {props.children}
        </div>
    )
}

const Heading = (props) => {
    return (
        <div className="rule-head">
            <h3 className="rule-heading">
                {props.children}
            </h3>
        </div>
    )
}

const Content = (props) => {
    return (
        <div className="rule-content">
            {props.children}
        </div>
    )
}

const Description = (props) => {
    return (
        <div className="rule-specify">
            <div className="rule-spefier">
                {props.children}
            </div>
        </div>
    )
}

const Icon = (props) => {
    if (props.icon == "denied") {
        return (
            <div className="rule-icon-parent">
                <div className="rule-icon denied">
                    <i className="fas fa-times"></i>
                </div>
            </div>
        )
    } else if (props.icon == "notice") {
        return (
            <div className="rule-icon-parent">
                <div className="rule-icon notice">
                    <i className="fas fa-exclamation"></i>
                </div>
            </div>
        )
    } else if (props.icon == "allowed") {
        return (
            <div className="rule-icon-parent">
                <div className="rule-icon accepted">
                    <i className="fas fa-check"></i>
                </div>
            </div>
        )
    } else if (props.icon == "important") {
        return (
            <div className="rule-icon-parent">
                <div className="rule-icon keep-in-mind">
                    <i className="fas fa-exclamation"></i>
                </div>
            </div>
        )
    } else {
        return (
            <p>Icon type was not specified.</p>
        )
    }
}

ReactDOM.render(<CommonRules/>, document.getElementById('common'));
ReactDOM.render(<ChatRules/>, document.getElementById('behavior'));
ReactDOM.render(<AdditionalRules/>, document.getElementById('addon'));
ReactDOM.render(<PlayerTownRules/>, document.getElementById('playertown'));
'use strict';

{/* Tullaan uusimaan ja automatisoimaan joku päivä. Sori täst. */}


class Month extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            month: this.props.month, /* Aina pienellä esim. maaliskuu2019 */
            btntext: this.props.btntext /* Normaalisti esim. Maaliskuu 2019 */
        }
    }
    render() {
        return (
            <div className='card bg-transparent border-gold'>
                <div class='card-header' id={this.props.month + '_1'}>
                    <h5 class='mb-0'>
                        <button className='btn btn-link' type='button' data-toggle='collapse' data-target={'#' + this.props.month} aria-expanded='false' aria-controls={this.props.month}>
                            {this.props.btntext}
                        </button>
                    </h5>
                </div>
                {this.props.children}
            </div>
        )
    }
}


class Body extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            class: this.props.class,
            month: this.props.month
        }
    }

    render() {
        return (
            <div id={this.props.month} className={'collapse ' + (this.props.showing ? 'show' : null)} aria-labelledby={this.props.month + '_1'} data-parent='#muutokset'>
                <div className='card-body'>
                    {this.props.children}
                </div>
            </div>
        )

    }
}


const Dated = (props) => {
    return (
        <p>{props.date}</p>
    )
}


const Change = (props) => {
    return (
        <li>{props.children}</li>
    )
}


class Changelog extends React.Component {
    render() {
        return (
            <div className='accordion text-left'>


                <Month month='maaliskuu2020' btntext='Maaliskuu 2020' >
                    <Body month='maaliskuu2020' showing>
                        <Dated date='27.3.2020'/>
                        <ul>
                            <Change>Lisätty seuraavat komennot: /jöms /retu /tank /ash</Change>
                        </ul>
                        <Dated date='22.3.2020' />
                        <ul>
                            <Change>Spawnereita voi taas muuttaa creeper- ja squid-spawnereiksi</Change>
                            <Change>/vote ei avaa enää valikkoa. Chattiin tulee molemmat linkit.</Change>
                        </ul>
                        <Dated date='18.3.2020' />
                        <ul>
                            <Change>lisätty uusia shortcutkomentoja /nax, /nubbe, /skidaddleskidoodle [/nou, /reverse, /unoreverse]</Change>
                        </ul>
                        <Dated date='12.3.2020' />
                        <ul>
                            <Change>Granite, diorite, andesite, cobble, stone voi nyt sulattaa blast furnacessa graveliksi</Change>
                        </ul>
                        <Dated date='9.3.2020' />
                        <ul>
                            <Change>Uusi komento /alue. Näyttää alueen nimen.</Change>
                        </ul>

                    </Body>
                </Month>


                <Month month='helmikuu2020' btntext='Helmikuu 2020' >
                    <Body month='helmikuu2020'>
                        <Dated date='24.2.2020' />
                        <ul>
                            <Change>/radio toimii taas</Change>
                            <Change>Uusi komento /music</Change>
                            <Change>Sillanrakennus poistettu käytöstä monistusglitchin takia</Change>
                        </ul>
                        <Dated date='16.2.2020' />
                        <ul>
                            <Change>Map reset</Change>
                        </ul>

                    </Body>
                </Month>


                <Month month='tammikuu2020' btntext='Tammikuu 2020' >
                    <Body month='tammikuu2020'>
                        <Dated date='16.1.2020' />
                        <ul>
                            <Change>/tk tuotu takaisin</Change>
                        </ul>
                        <Dated date='13.1.2020' />
                        <ul>
                            <Change>Vote korjattu</Change>
                        </ul>
                    </Body>
                </Month>


                <Month month='joulukuu2019' btntext='Joulukuu 2019' >
                    <Body month='joulukuu2019'>
                        <Dated date='13.12.2019' />
                        <ul>
                            <Change>Lisätty /ignore (/ignore add nimi, /ignore list, /ignore remove nimi)</Change>
                        </ul>
                        <Dated date='11.12.2019' />
                        <ul>
                            <Change>Lisätty Bedrock versiosta tuttu sillanrakennusominaisuus</Change>
                            <Change>Lisätty uusi resepti: 6 lasipaneelia -> glass block </Change>
                            <Change>Lisätty uusi resepti uuniin: stainded glass -> glass block</Change>
                        </ul>
                        <Dated date='10.12.2019' />
                        <ul>
                            <Change>Rankkikohtaiset kotien määrät korjattu</Change>
                            <Change>Spawnerien otto silktouchilla ja ilman silktouchia korjattu</Change>
                        </ul>
                        <Dated date='7.12.2019' />
                        <ul>
                            <Change>Tabin servervärejä paranneltu</Change>
                            <Change>Taikamaton kanssa ei enää ota fall damagea</Change>
                            <Change>Entiteetit eivät ota damagea taikamaton sivuista</Change>
                            <Change>Permiplugin osaa käsitellä offline pelaajia, ja pystyy asettamaan oikeuksia ilman relogia</Change>
                            <Change>Korjattu coreplugarin komennonsuorittajasta komponenttibugi</Change>
                        </ul>
                    </Body>
                </Month>


                <Month month='marraskuu2019' btntext='Marraskuu 2019'>
                    <Body month='marraskuu2019'>
                        <Dated date='30.11.2019' />
                        <ul>
                            <Change>Korjattu prismarine slabien muunaminen täys blockeiksi</Change>
                            <Change>Lisätty mahdollisuus muuntaa Blast Furnacella hiilipalikoista mustaa väriainetta</Change>
                        </ul>
                        <Dated date='22.11.2019' />
                        <ul>
                            <Change>Discord chatin värit korjattu</Change>
                        </ul>
                        <Dated date='16.11.2019' />
                        <ul>
                            <Change>Tuomas veturi päivitetty</Change>
                            <Change>Looppaus + random toimii nyt</Change>
                            <Change>Voikukat korjattu</Change>
                        </ul>
                    </Body>
                </Month>


                <Month month='lokakuu2019' btntext='Lokakuu 2019'>
                    <Body month='lokakuu2019'>
                        <Dated date='31.10.2019' />
                        <ul>
                            <Change>/sit tuotu takaisin</Change>
                        </ul>
                        <Dated date='26.10.2019' />
                        <ul>
                            <Change>/vote toimii taas</Change>
                            <Change>(Realistinen) eläintenkanto takaisin servulla</Change>
                        </ul>
                        <Dated date='25.10.2019' />
                        <ul>
                            <Change>/nimeä komento lisätty palvelimelle</Change>
                            <Change>Lisätty ylläpidolle /setsign</Change>
                            <Change>Korjattu viestibugi /nick player nick -komennossa (koskien ylläpitoa)</Change>
                            <Change>/baltop korjattu</Change>
                        </ul>
                    </Body>
                </Month>


                <Month month='syyskuu2019' btntext='Syyskuu 2019'>
                    <Body month='syyskuu2019' showing={false}>
                        <Dated date='25.09.2019' />
                        <ul>
                            <Change>Tpa:n /back fixattu oikeiden pelaajien sijaintiin</Change>
                            <Change>mobGriefing asetettu takaisin päälle</Change>
                        </ul>
                        <Dated date='24.09.2019' />
                        <ul>
                            <Change>Tp:n ja /spawn komennon /back tallentaa nyt sijainnin</Change>
                        </ul>
                        <Dated date='21.09.2019' />
                        <ul>
                            <Change>/kms ja /kys lisätty</Change>
                            <Change>Spawnerit putoaa taas Silk Touch -enchantilla</Change>
                        </ul>
                    </Body>
                </Month>


                <Month month='elokuu2019' btntext='Elokuu 2019'>
                    <Body month='elokuu2019' showing={false}>
                        <Dated date='19.08.2019' />
                        <ul>
                            <Change>Coreprotect osaa nyt tallentaa lentävät blockit</Change>
                            <Change>Tnt ja tnt_minecart ei enää lennätä niin paljon blockei -> parempia raivaukseen</Change>
                            <Change>Lisätty custom recipet servulle</Change>
                        </ul>
                        <Dated date='17.08.2019' />
                        <ul>
                            <Change>Paranneltu databasen käyttöö: StatManager, Karanteenials, KaranteeniPerms, Chatar</Change>
                            <Change>
                                Mahdollisesti vähennetty joinauksesta seuraavaa lagia: KaranteeniPerms, Karanteenials, KaranteeniCore, StatManager,
                                Chatar (vaihdettu db sync -> async. jos ongelmia ilmenee niin ilmoittakaa)
                            </Change>
                            <Change>Lisätty automaattinen restart (yp käyttäkää komentoa /restarter:restart)</Change>
                            <Change>Poistettu virheellisiä blockeja taikamatosta</Change>
                            <Change>
                                Löydetty ISO bugi timereista joka johti siihen että kaikki timerit ajettiin joka tickillä. Nyt fixattu, hyvällä tuurilla isoja vaikutuksia
                                tehokkuuteen
                            </Change>
                            <Change>Operaattorista ylöspäin oikat /player kill nimi</Change>
                        </ul>
                        <Dated date='16.08.2019' />
                        <ul>
                            <Change>/rtp toimii, aiempaa nopeampi ja ei mene veden alle</Change>
                        </ul>
                        <Dated date='13.08.2019' />
                        <ul>
                            <Change>Fixattu "epäturvallinen sijainti" teleportatessa</Change>
                            <Change>Fixattu puuttunut ääni kotiin teleportatessa</Change>
                            <Change>/rtp tehostettu</Change>
                            <Change>Fixattu rtp veden alle vienti</Change>
                        </ul>
                        <Dated date='11.08.2019' />
                        <ul>
                            <Change>Uusi versio ja uudet kujeet. 1.14 on saapunut.</Change>
                        </ul>
                    </Body>
                </Month>


            </div>
        )
    }
}


ReactDOM.render(<Changelog />, document.getElementById('muutokset'));
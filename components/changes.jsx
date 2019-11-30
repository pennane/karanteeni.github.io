'use strict';

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

class Changebody extends React.Component {
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

class ChangeDate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: this.props.date /* Päivämäärä */
        }
    }

    render() {
        return (
            <p>{this.props.date}</p>
        )
    }
}

class Changelist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            change: this.props.change
        }
    }

    render() {
        return (
            <li>{this.props.change}</li>
        )
    }
}

class ChangeLog extends React.Component {
    render() {
        return (
            <div className='accordion text-left'>
                <Month month='marraskuu2019' btntext='Marraskuu 2019'>
                    <Changebody month='marraskuu2019' showing>
                        <ChangeDate date='30.11.2019' />
                        <ul>
                            <Changelist change='Korjattu prismarine slabien muunaminen täys blockeiksi' />
                            <Changelist change='Lisätty mahdollisuus muuntaa Blast Furnacella hiilipalikoista mustaa väriainetta' />
                        </ul>
                        <ChangeDate date='22.11.2019' />
                        <ul>
                            <Changelist change='Discord chatin värit korjattu' />
                        </ul>
                        <ChangeDate date='16.11.2019' />
                        <ul>
                            <Changelist change='Tuomas veturi päivitetty' />
                            <Changelist change='Looppaus + random toimii nyt' />
                            <Changelist change='Voikukat korjattu' />
                        </ul>
                    </Changebody>
                </Month>
                <Month month='lokakuu2019' btntext='Lokakuu 2019'>
                    <Changebody month='lokakuu2019'>
                        <ChangeDate date='31.10.2019' />
                        <ul>
                            <Changelist change='/sit tuotu takaisin' />
                        </ul>
                        <ChangeDate date='26.10.2019' />
                        <ul>
                            <Changelist change='/vote toimii taas' />
                            <Changelist change='(Realistinen) eläintenkanto takaisin servulla' />
                        </ul>
                        <ChangeDate date='25.10.2019' />
                        <ul>
                            <Changelist change='/nimeä komento lisätty palvelimelle' />
                            <Changelist change='Lisätty ylläpidolle /setsign' />
                            <Changelist change='Korjattu viestibugi /nick player nick -komennossa (koskien ylläpitoa)' />
                            <Changelist change='/baltop korjattu' />
                        </ul>
                    </Changebody>
                </Month>
                <Month month='syyskuu2019' btntext='Syyskuu 2019'>
                    <Changebody month='syyskuu2019' showing={false}>
                        <ChangeDate date='25.09.2019' />
                        <ul>
                            <Changelist change='Tpa:n /back fixattu oikeiden pelaajien sijaintiin' />
                            <Changelist change='mobGriefing asetettu takaisin päälle' />
                        </ul>
                        <ChangeDate date='24.09.2019' />
                        <ul>
                            <Changelist change='Tp:n ja /spawn komennon /back tallentaa nyt sijainnin' />
                        </ul>
                        <ChangeDate date='21.09.2019' />
                        <ul>
                            <Changelist change='/kms ja /kys lisätty' />
                            <Changelist change='Spawnerit putoaa taas Silk Touch -enchantilla' />
                        </ul>
                    </Changebody>
                </Month>
                <Month month='elokuu2019' btntext='Elokuu 2019'>
                    <Changebody month='elokuu2019' showing={false}>
                        <ChangeDate date='19.08.2019' />
                        <ul>
                            <Changelist change='Coreprotect osaa nyt tallentaa lentävät blockit' />
                            <Changelist change='Tnt ja tnt_minecart ei enää lennätä niin paljon blockei -> parempia raivaukseen' />
                            <Changelist change='lisätty custom recipet servulle' />
                        </ul>
                        <ChangeDate date='17.08.2019' />
                        <ul>
                            <Changelist change='Paranneltu databasen käyttöö: StatManager, Karanteenials, KaranteeniPerms, Chatar' />
                            <Changelist change='Mahdollisesti vähennetty joinauksesta seuraavaa lagia: KaranteeniPerms, Karanteenials, KaranteeniCore, StatManager, Chatar (vaihdettu db sync -> async. jos ongelmia ilmenee niin ilmoittakaa)' />
                            <Changelist change='Lisätty automaattinen restart (yp käyttäkää komentoa /restarter:restart)' />
                            <Changelist change='Poistettu virheellisiä blockeja taikamatosta' />
                            <Changelist change='Löydetty ISO bugi timereista joka johti siihen että kaikki timerit ajettiin joka tickillä. Nyt fixattu, hyvällä tuurilla isoja vaikutuksia tehokkuuteen' />
                            <Changelist change='Operaattorista ylöspäin oikat /player kill <nimi>' />
                        </ul>
                        <ChangeDate date='16.08.2019' />
                        <ul>
                            <Changelist change='/rtp toimii, aiempaa nopeampi ja ei mene veden alle' />
                        </ul>
                        <ChangeDate date='13.08.2019' />
                        <ul>
                            <Changelist change='Fixattu "epäturvallinen sijainti" teleportatessa' />
                            <Changelist change='Fixattu puuttunut ääni kotiin teleportatessa' />
                            <Changelist change='/rtp tehostettu' />
                            <Changelist change='Fixattu rtp veden alle vienti' />
                        </ul>
                        <ChangeDate date='11.08.2019' />
                        <ul>
                            <Changelist change='Uusi versio ja uudet kujeet. 1.14 on saapunut.' />
                        </ul>
                    </Changebody>
                </Month>
            </div>
        )
    }
}

ReactDOM.render(<ChangeLog />, document.getElementById('muutokset'));
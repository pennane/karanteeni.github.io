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
            <div className='card border-gold'>
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
        const showing = this.props.showing
        if (showing) {
            return (
                <div id={this.props.month} className='collapse show' aria-labelledby={this.props.month + '_1'} data-parent='#muutokset'>
                    <div className='card-body'>
                        {this.props.children}
                    </div>
                </div>
            )
        }
        return (
            <div id={this.props.month} className='collapse' aria-labelledby={this.props.month + '_1'} data-parent='#muutokset'>
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
        return(
            <p>{this.props.date}</p>
        )
    }
}

class Changelist extends React.Component {
    constructor (props) {
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
                <Month month='maaliskuu2019' btntext='Maaliskuu 2019'>
                    <Changebody month='maaliskuu2019' showing>
                        <ChangeDate date='20.03.2019'/>
                        <ul>
                            <Changelist change={['PvP-maailmassa ei ', 
                            <b><span data-toggle='tooltip' data-placement='top' data-html='true' title='Chest, Trapped Chest, Furnace, Hopper, Dropper, Dispenser ja Shulker box'>palikat*</span></b> 
                            ,' enää lukitu']}/>
                        </ul>
                        <ChangeDate date='19.03.2019'/>
                        <ul>
                            <Changelist change='Mod / Op voivat nyt nähdä pelaajien kodit'/>
                       </ul>
                       <ChangeDate date='18.03.2019'/>
                       <ul>
                           <Changelist change='Mod / Op voivat nyt ohittaa tptogglen'/>
                           <Changelist change='Rankaisu ei toimi enää Mod / Op'/>
                       </ul>
                       <ChangeDate date='16.03.2019'/>
                       <ul>
                           <Changelist change='Lisätty /yphaku komento'/>
                           <Changelist change='Korjattu automaattibannien ban iterointi'/>
                       </ul>
                       <ChangeDate date='10.03.2019'/>
                       <ul>
                           <Changelist change='Lisätty /kys komento'/>
                           <Changelist change='Lisätty kaksi uutta ylläpitoarvoa'/>
                           <Changelist change='Pelaajat eivät voi asettaa mykistystä enää ylläpidolle'/>
                           <Changelist change='Korjattu vääriä merkkejä autobannin syystä'/>
                           <Changelist change='Lisätty vinkki moderaattorihausta ja päivitetty edellisiä vinkkejä'/>
                       </ul>
                       <ChangeDate date='07.03.2019'/>
                       <ul>
                            <Changelist change='Korjattu /spawner komennon Spider entiteetin kelpoisuus (ei sallittu -> sallittu)'/>
                       </ul>
                       <ChangeDate date='01.03.2019'/>
                       <ul>
                           <Changelist change='Creative korjattu ja avattu!'/>
                           <Changelist change='Parantajien salainen tieto ei triggeröidy Creativesta'/>
                       </ul>
                    </Changebody>
                </Month>
                <Month month='helmikuu2019' btntext='Helmikuu 2019'>
                <Changebody month='helmikuu2019' showing={false}>
                    <ChangeDate date='23.02.2019'/>
                    <ul>
                        <Changelist change='Luotu /nimeä off -komento, jotta voit poistaa esineestä nimen'/>
                        <Changelist change='Korjattu kauppa, pienillä muutoksilla'/>
                        <Changelist change='Parantajien secret thing korjattu. ;)'/>
                    </ul>
                    <ChangeDate date='20.02.2019'/>
                    <ul>
                        <Changelist change='Luotu /realname komento'/>
                        <Changelist change='Korjattu toinen vanishiin liittyvä asia'/>
                    </ul>
                    <ChangeDate date='19.02.2019'/>
                    <ul>
                        <Changelist change='Lisätty datapaketit palvelimelle (reseptit)'/>
                    </ul>
                    <ChangeDate date='18.02.2019'/>
                    <ul>
                        <Changelist change='Korjattu viestejä'/>
                        <Changelist change='Asetettu rajapinta Vanishille (fixattiin ylläpitoasioita)'/>
                        <Changelist change='Korjattu sääntökirjassa yhden sivun overflow'/>
                    </ul>
                    <ChangeDate date='13.02.2019'/>
                    <ul>
                        <Changelist change='Spigot päivitetty 1.13.2'/>
                        <Changelist change='Korjattu sääntökirjassa yhden sivun overflow'/>
                    </ul>
                </Changebody>
                </Month>
                <Month month='tammikuu2019' btntext='Tammikuu 2019'>
                    <Changebody month='tammikuu2019' showing={false}>
                        <ChangeDate date='12.01.2019'/>
                        <ul>
                            <Changelist change='Trusteja lisättäessä UUID:n sijasta näkyy nyt nimi'/>
                            <Changelist change='Teksti "Sait avaimen" votettamisen yhteydessä otettu pois'/>
                        </ul>
                        <ChangeDate date='09.01.2019'/>
                        <ul>
                            <Changelist change='Spigot päivitetty 1.13.2'/>
                            <Changelist change='Seen komennosta otettu IP-osoitteen näkyvyys pois komentoa suoritettaessa Discord chattiin'/>
                            <Changelist change='Varmistettu, että yö ja päivä toimii oikeilla permeillä, kuten kuuluukin'/>
                        </ul>
                    </Changebody>
                </Month>
                <Month month='joulukuu2018' btntext='Joulukuu 2018'>
                    <Changebody month='joulukuu2018' showing={false}>
                        <ChangeDate date='20.12.2018'/>
                        <ul>
                            <Changelist change='Korjattu Parantajien kick komento'/>
                            <Changelist change='Lisätty tphere komento admineille'/>
                            <Changelist change='/rankaise komento ei toimi enää ylläpitäjiin'/>
                            <Changelist change='Lisätty /rankit komento'/>
                            <Changelist change='Lisätty globaali viesti kun pelaaja menee afk tai poistuu afkista'/>
                        </ul>
                        <ChangeDate date='13.12.2018'/>
                        <ul>
                            <Changelist change='Korjattu kitit (vihdoin ja viimein)'/>
                            <Changelist change='Rtp teleporttaa nyt myös negatiivisille koordinaateille'/>
                            <Changelist change='Kyltti lisätty sallittuihin blokkeihin hissin kanssa'/>
                        </ul>
                    </Changebody>
                </Month>
                <Month month='lokakuu2018' btntext='Lokakuu 2018'>
                    <Changebody month='lokakuu2018' showing={false}>
                        <ChangeDate date='28.10.2018'/>
                        <ul>
                            <Changelist change='Lentomatot eivät riko enää lasipaneeleita'/>
                            <Changelist change='Lentomattoihin on lisätty värit rankkien mukaan'/>
                            <Changelist change='Voikukkia voi nyt laittaa ruukkuihin'/>
                            <Changelist change='Offline pelaajan varoittaminen toimii nyt niin kuin pitääkin'/>
                            <Changelist change='Työkalut, joissa on Succ -enchant kuluu nyt tavallisesti'/>
                        </ul>
                        <ChangeDate date='18.10.2018'/>
                        <ul>
                            <Changelist change='Spigotin vanha versio palautettu'/>
                        </ul>
                        <ChangeDate date='17.10.2018'/>
                        <ul>
                            <Changelist change='Setnoobspawn korjattu'/>
                            <Changelist change='Palvelimen random kaatuminen korjattu'/>
                            <Changelist change='Spigot päivitetty (1.13.2)'/>
                            <Changelist change='Pelaajien /tp x y z on korjattu'/>
                            <Changelist change='Inventorypluginia päivitetty'/>
                            <Changelist change='WorldEdittiä päivitetty'/>
                        </ul>
                        <ChangeDate date='16.10.2018'/>
                        <ul>
                            <Changelist change='Mahdollinen palvelimen kaatumisen aiheuttava bugi korjattu'/>
                            <Changelist change='Nickin formatoinnilla on nyt rankkikohtaiset oikeudet'/>
                        </ul>
                        <ChangeDate date='14.10.2018'/>
                        <ul>
                            <Changelist change='Bugi, jossa aiheutui tavaran loputtomuus on nyt korjattu'/>
                            <Changelist change='Invin tyhjentyminen maailmojen vaihtuessa on nyt loppunut'/>
                            <Changelist change='Kittien pitäisi toimia'/>
                            <Changelist change='Korjattu Nekromantikoiden ja Kuolemattomien rankup spam'/>
                            <Changelist change='Crafting recipejä lisätty'/>
                        </ul>
                        <ChangeDate date='13.10.2018'/>
                        <ul>
                            <Changelist change='Enchantit toimintaan'/>
                            <Changelist change='Homea ei voi enää ylikirjoittaa eri maailmassa (vaatii erinimisen homen)'/>
                            <Changelist change='Voikukkien puhalluseventti tapahtuu nyt vain kerran kahden sijasta'/>
                            <Changelist change='Koralleja voi farmata bonemealilla'/>
                            <Changelist change='Nekromantikoille lisätty oikeudet komentoon /co i'/>
                            <Changelist change='Kaupassa esineiden loputon myynti korjattu'/>
                            <Changelist change='Warppien poisto toimii kuten kuuluu'/>
                            <Changelist change='/enchant komento päivitetty myös mukautettuihin enchantteihin'/>
                            <Changelist change='Spigot päivitetty (1.13.1)'/>
                            <Changelist change='Minecraft Discord-chat toimii taas'/>
                        </ul>
                        <ChangeDate date='05.10.2018'/>
                        <ul>
                            <Changelist change='Rankin prefixin formatointi lisätty (lyhyt / pitkä)'/>
                            <Changelist change='Korjattu tapahtuma, jossa eläimet nousivat olkapäälle ruokittaessa'/>
                        </ul>
                        <ChangeDate date='04.10.2018'/>
                        <ul>
                            <Changelist change='Monia slabeja saa yhdistettyä takaisin kokonaisiksi blockeiksi'/>
                            <Changelist change='Chainmail armorit ovat craftattavissa'/>
                            <Changelist change='Stone -> Gravel -> Sand -> Glass sulatus'/>
                            <Changelist change='Skeleton Skull ja Player head ovat craftattavissa'/>
                            <Changelist change='Korallien tyyppi vaihdettavissa (ei koske blockeja)'/>
                            <Changelist change='XP-bottlen voi craftaa'/>
                            <Changelist change='Timublokeista voi craftaa dirtin'/>
                            <Changelist change='Korjattu lentomatosta lasin hakkaaminen Silk Touchilla'/>
                            <Changelist change='Lojaalien rankit näkyvät nyt oikein'/>
                            <Changelist change='Afk-timeout on nyt tuplattu (2min -> 4min)'/>
                        </ul>
                        <ChangeDate date='03.10.2018'/>
                        <ul>
                            <Changelist change='Bugi kuolinarkkujen sisällön katoamisesta uloskirjautumisen yhteydessä korjattu'/>
                            <Changelist change='Fly poistettu endistä'/>
                            <Changelist change='Pelaajilla mahdollisuus käyttää /trust'/>
                            <Changelist change='Curse of Vanishing ei kadonnut kuolin chestistä (korjattu)'/>
                            <Changelist change='Korjattu msg virhe tuntemattomista merkeistä'/>
                            <Changelist change='Korjattu bugi loputtomista skulleista /skull komennolla'/>
                            <Changelist change='Lisätty Boosterpack'/>
                            <Changelist change='Lisätty autofill home, delhome ja warp komentoihin'/>
                            <Changelist change='Hetken sängyssä makaaminen karkottaa Phantomit kolmeksi päiväksi'/>
                        </ul>
                    </Changebody>
                </Month>
                <Month month='syyskuu2018' btntext='Syyskuu 2018'>
                    <Changebody month='syyskuu2018' showing={false}>
                        <ChangeDate date='29.09.2018'/>
                        <ul>
                            <Changelist change='Hississä cave_air ei enää estä hissin toimintaa'/>
                        </ul>
                        <ChangeDate date='28.09.2018'/>
                        <ul>
                            <Changelist change='Tab completion kodeille ja warpeille lisätty'/>
                            <Changelist change='Rtp aikarajoitus valikon kautta'/>
                            <Changelist change='Lentomatto toimii nyt Netherissä'/>
                            <Changelist change='Lentomatto ja fly poistettu endistä'/>
                            <Changelist change='Voidiin putoaminen Endissä ei enää teleporttaa pelaajaa spawnille'/>
                            <Changelist change='Fly ei enää lähde pois tarpeettomasti Netherin ja Overworldin välillä'/>
                        </ul>
                        <ChangeDate date='26.09.2018'/>
                        <ul>
                            <Changelist change='Lentomatto päällä ei enää ota fall damagea'/>
                            <Changelist change='Enderchest komento toimii kuten kuuluu'/>
                            <Changelist change='Lentomatto ei renderöi enää joka tickissä'/>
                            <Changelist change='Lentomattoa ei voi enää räjäyttää'/>
                            <Changelist change='Pääsy pelaajilta /warn komentoon on estetty'/>
                            <Changelist change='Lentomatto ei tukehduta allaolevia entiteettejä'/>
                            <Changelist change='Inventoryt tallentuu nyt maailmanvaihdosten aikana kuten pitääkin'/>
                        </ul>
                        <ChangeDate date='25.09.2018'/>
                        <ul>
                            <Changelist change='Spigot päivitetty 1.13'/>
                            <Changelist change='Afk-kick korjattu'/>
                            <Changelist change='/sethomea ei estetä, mikäli home on 60 blockin sisällä'/>
                            <Changelist change='/enderchest komento'/>
                            <Changelist change='/near komentoon lisätty etäisyysargumentti'/>
                            <Changelist change='Korjattu telepadin kohde NULL'/>
                            <Changelist change='Alias /värit lisätty komennolle /colors'/>
                            <Changelist change='Työpöydälle aliakset /wbench ja /craft'/>
                            <Changelist change='Forceop ban -komento toimi pelaajilla (korjattu)'/>
                        </ul>
                    </Changebody>
                </Month>
            </div>
        )
    }
}

ReactDOM.render(<ChangeLog/>, document.getElementById('muutokset'));
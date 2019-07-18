'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Month = function (_React$Component) {
    _inherits(Month, _React$Component);

    function Month(props) {
        _classCallCheck(this, Month);

        var _this = _possibleConstructorReturn(this, (Month.__proto__ || Object.getPrototypeOf(Month)).call(this, props));

        _this.state = {
            month: _this.props.month, /* Aina pienellä esim. maaliskuu2019 */
            btntext: _this.props.btntext /* Normaalisti esim. Maaliskuu 2019 */
        };
        return _this;
    }

    _createClass(Month, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'card bg-transparent border-gold' },
                React.createElement(
                    'div',
                    { 'class': 'card-header', id: this.props.month + '_1' },
                    React.createElement(
                        'h5',
                        { 'class': 'mb-0' },
                        React.createElement(
                            'button',
                            { className: 'btn btn-link', type: 'button', 'data-toggle': 'collapse', 'data-target': '#' + this.props.month, 'aria-expanded': 'false', 'aria-controls': this.props.month },
                            this.props.btntext
                        )
                    )
                ),
                this.props.children
            );
        }
    }]);

    return Month;
}(React.Component);

var Changebody = function (_React$Component2) {
    _inherits(Changebody, _React$Component2);

    function Changebody(props) {
        _classCallCheck(this, Changebody);

        var _this2 = _possibleConstructorReturn(this, (Changebody.__proto__ || Object.getPrototypeOf(Changebody)).call(this, props));

        _this2.state = {
            class: _this2.props.class,
            month: _this2.props.month
        };
        return _this2;
    }

    _createClass(Changebody, [{
        key: 'render',
        value: function render() {
            var showing = this.props.showing;
            if (showing) {
                return React.createElement(
                    'div',
                    { id: this.props.month, className: 'collapse show', 'aria-labelledby': this.props.month + '_1', 'data-parent': '#muutokset' },
                    React.createElement(
                        'div',
                        { className: 'card-body' },
                        this.props.children
                    )
                );
            }
            return React.createElement(
                'div',
                { id: this.props.month, className: 'collapse', 'aria-labelledby': this.props.month + '_1', 'data-parent': '#muutokset' },
                React.createElement(
                    'div',
                    { className: 'card-body' },
                    this.props.children
                )
            );
        }
    }]);

    return Changebody;
}(React.Component);

var ChangeDate = function (_React$Component3) {
    _inherits(ChangeDate, _React$Component3);

    function ChangeDate(props) {
        _classCallCheck(this, ChangeDate);

        var _this3 = _possibleConstructorReturn(this, (ChangeDate.__proto__ || Object.getPrototypeOf(ChangeDate)).call(this, props));

        _this3.state = {
            date: _this3.props.date /* Päivämäärä */
        };
        return _this3;
    }

    _createClass(ChangeDate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                null,
                this.props.date
            );
        }
    }]);

    return ChangeDate;
}(React.Component);

var Changelist = function (_React$Component4) {
    _inherits(Changelist, _React$Component4);

    function Changelist(props) {
        _classCallCheck(this, Changelist);

        var _this4 = _possibleConstructorReturn(this, (Changelist.__proto__ || Object.getPrototypeOf(Changelist)).call(this, props));

        _this4.state = {
            change: _this4.props.change
        };
        return _this4;
    }

    _createClass(Changelist, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'li',
                null,
                this.props.change
            );
        }
    }]);

    return Changelist;
}(React.Component);

var ChangeLog = function (_React$Component5) {
    _inherits(ChangeLog, _React$Component5);

    function ChangeLog() {
        _classCallCheck(this, ChangeLog);

        return _possibleConstructorReturn(this, (ChangeLog.__proto__ || Object.getPrototypeOf(ChangeLog)).apply(this, arguments));
    }

    _createClass(ChangeLog, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'accordion text-left' },
                React.createElement(
                    Month,
                    { month: 'heinakuu2019', btntext: 'Hein\xE4kuu 2019' },
                    React.createElement(
                        Changebody,
                        { month: 'heinakuu2019', showing: true },
                        React.createElement(ChangeDate, { date: '17.07.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Korjattu tpa komennon kriittinen hajoaminen liittyen edelliseen korjaukseen' }),
                            React.createElement(Changelist, { change: 'Korjattu msg komento pelaajan ollessa Vanish' }),
                            React.createElement(Changelist, { change: 'Tpa pyynt\xF6 vanhentuu nyt automaattisesti pelaajan l\xE4htiess\xE4 palvelimelta' })
                        ),
                        React.createElement(ChangeDate, { date: '10.07.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Korjattu /seenin n\xE4kyminen Vanish pelaajilla' }),
                            React.createElement(Changelist, { change: 'Korjattu bugi Vanishin kanssa, joka salli pelaajien teleporttaamisen Vanish pelaajiin' })
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'kesakuu2019', btntext: 'Kes\xE4kuu 2019' },
                    React.createElement(
                        Changebody,
                        { month: 'kesakuu2019', showing: false },
                        React.createElement(ChangeDate, { date: '29.06.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Korjattu /lunastavote' }),
                            React.createElement(Changelist, { change: '/crea komento ohjastaa k\xE4ytt\xE4m\xE4\xE4n /p komentoja /plot komennon sijasta' })
                        ),
                        React.createElement(ChangeDate, { date: '17.06.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Fixattu oikeudet Operaattoreille koskea asioihin' }),
                            React.createElement(Changelist, { change: 'Korjattu muita virheit\xE4 palvelimella, jotka eiv\xE4t vaikuta pelaamiseen mill\xE4\xE4n tavalla' })
                        ),
                        React.createElement(ChangeDate, { date: '07.06.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: ['Korjattu xp exploit kokonaisuudessaan ', React.createElement(
                                    'b',
                                    null,
                                    '(Huom! Viesti etusivulla on edelleen voimassa!)'
                                ), ''] }),
                            React.createElement(Changelist, { change: 'XP pullojen heitto Creativessa on taas mahdollista' }),
                            React.createElement(Changelist, { change: 'Potion Effectit j\xE4iv\xE4t voimaan maailmaa vaihdettaessa -> Fixed' }),
                            React.createElement(Changelist, { change: 'Fixattu Creativen viesti /level komennosta' })
                        ),
                        React.createElement(ChangeDate, { date: '06.06.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Korjattu Mod / Op kohdalla rankaisutimerin k\xE4ynnistyminen' }),
                            React.createElement(Changelist, { change: 'Lis\xE4tty /rspawn alias rtp komennolle' }),
                            React.createElement(Changelist, { change: 'Estetty Enchanted Bottlen heitt\xE4minen Creativessa' })
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'toukokuu2019', btntext: 'Toukokuu 2019' },
                    React.createElement(
                        Changebody,
                        { month: 'toukokuu2019', showing: false },
                        React.createElement(ChangeDate, { date: 'I have nothing to say.' })
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'huhtikuu2019', btntext: 'Huhtikuu 2019' },
                    React.createElement(
                        Changebody,
                        { month: 'huhtikuu2019', showing: false },
                        React.createElement(ChangeDate, { date: '21.04.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: '/rankit n\xE4ytt\xE4\xE4 my\xF6s prefixit' }),
                            React.createElement(Changelist, { change: 'Korjattu tabin IP-osoite' }),
                            React.createElement(Changelist, { change: 'Fixattu yll\xE4pitoty\xF6t\xE4 haittaavia asioita' })
                        ),
                        React.createElement(ChangeDate, { date: '18.04.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Succ enchant ei en\xE4\xE4 kadota tavaroita, jos invi on t\xE4ynn\xE4.' }),
                            React.createElement(Changelist, { change: 'Edell\xE4 mainittu enchant ei my\xF6sk\xE4\xE4n ime tavaroitasi inviin, kun hajotat container blockin (chest, shulker box jne.) ja koska yll\xE4mainittu muutos on tapahtunut, et voi my\xF6sk\xE4\xE4n kadottaa niit\xE4 en\xE4\xE4.' }),
                            React.createElement(Changelist, { change: 'Lis\xE4tty /rules komento, joka antaa s\xE4\xE4nt\xF6kirjan inviin (tai pudottaa maahan mik\xE4li t\xE4ynn\xE4) ja antaa sinulle suoran linkin, jonne voit menn\xE4 lukemaan' })
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'maaliskuu2019', btntext: 'Maaliskuu 2019' },
                    React.createElement(
                        Changebody,
                        { month: 'maaliskuu2019', showing: false },
                        React.createElement(ChangeDate, { date: '29.03.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Varoituslistan lopussa n\xE4kyy nyt teksti muistutuksena, ett\xE4 voitte kysy\xE4 lis\xE4tietoa yll\xE4pidolta' }),
                            React.createElement(Changelist, { change: 'Lis\xE4tty lis\xE4tietoihin merkint\xE4 maailmasta ja koordinaateista miss\xE4 se on annettu (v\xE4ltet\xE4\xE4n tuplavaroituksia)' }),
                            React.createElement(Changelist, { change: 'Korjattu asioita Mod / Op (ja lis\xE4\xE4 viel\xE4 varmasti korjataankin)' }),
                            React.createElement(Changelist, { change: 'V\xE4\xE4r\xE4 viesti yll\xE4pidon potkimisesta korjattu' })
                        ),
                        React.createElement(ChangeDate, { date: '24.03.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Pelaajan liittyess\xE4 palvelimelle, palvelin ilmoittaa varoitusten lukum\xE4\xE4r\xE4st\xE4, jos niit\xE4 on' }),
                            React.createElement(Changelist, { change: 'Pelaajan saadessa varoitus, pelaaja potkitaan j\xE4lleen palvelimelta varoituksen syyll\xE4. Kolmannesta varoituksesta viikon automaattinen porttikielto varoitusrajan t\xE4yttymisest\xE4' }),
                            React.createElement(Changelist, { change: 'Moderaattoreita ja Operaattoreita ei voida en\xE4\xE4 hiljent\xE4\xE4' }),
                            React.createElement(Changelist, { change: 'Yll\xE4pitoa yleisesti ei voida en\xE4\xE4 potkia (antaa viel\xE4 v\xE4\xE4r\xE4n viestin, korjataan tulevaisuudessa)' }),
                            React.createElement(Changelist, { change: 'Moderaattorit ja Operaattorit n\xE4kev\xE4t nyt kun joku potkitaan, hiljennet\xE4\xE4n, tai jotakuta varoitetaan' }),
                            React.createElement(Changelist, { change: 'Salainen tieto ei n\xE4y, mik\xE4li yll\xE4pito on "afk" :-D' }),
                            React.createElement(Changelist, { change: 'Asetettu punaisen n\xE4yt\xF6n oletusarvo ep\xE4todeksi kun uusi pelaaja liittyy serverille.' })
                        ),
                        React.createElement(ChangeDate, { date: '20.03.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: ['PvP-maailmassa ei ', React.createElement(
                                    'b',
                                    null,
                                    React.createElement(
                                        'span',
                                        { 'data-toggle': 'tooltip', 'data-placement': 'top', 'data-html': 'true', title: 'Chest, Trapped Chest, Furnace, Hopper, Dropper, Dispenser ja Shulker box' },
                                        'palikat*'
                                    )
                                ), ' enää lukitu'] })
                        ),
                        React.createElement(ChangeDate, { date: '19.03.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Mod / Op voivat nyt n\xE4hd\xE4 pelaajien kodit' })
                        ),
                        React.createElement(ChangeDate, { date: '18.03.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Mod / Op voivat nyt ohittaa tptogglen' }),
                            React.createElement(Changelist, { change: 'Rankaisu ei toimi en\xE4\xE4 Mod / Op' })
                        ),
                        React.createElement(ChangeDate, { date: '16.03.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Lis\xE4tty /yphaku komento' }),
                            React.createElement(Changelist, { change: 'Korjattu automaattibannien iterointi jokaisen itemin kohdalla' })
                        ),
                        React.createElement(ChangeDate, { date: '10.03.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Lis\xE4tty /kys komento' }),
                            React.createElement(Changelist, { change: 'Lis\xE4tty kaksi uutta yll\xE4pitoarvoa' }),
                            React.createElement(Changelist, { change: 'Pelaajat eiv\xE4t voi asettaa mykistyst\xE4 en\xE4\xE4 yll\xE4pidolle' }),
                            React.createElement(Changelist, { change: 'Korjattu v\xE4\xE4ri\xE4 merkkej\xE4 autobannin syyst\xE4' }),
                            React.createElement(Changelist, { change: 'Lis\xE4tty vinkki moderaattorihausta ja p\xE4ivitetty edellisi\xE4 vinkkej\xE4' })
                        ),
                        React.createElement(ChangeDate, { date: '07.03.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Korjattu /spawner komennon Spider entiteetin kelpoisuus (ei sallittu -> sallittu)' })
                        ),
                        React.createElement(ChangeDate, { date: '01.03.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Creative korjattu ja avattu!' }),
                            React.createElement(Changelist, { change: 'Parantajien salainen tieto ei trigger\xF6idy Creativesta' })
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'helmikuu2019', btntext: 'Helmikuu 2019' },
                    React.createElement(
                        Changebody,
                        { month: 'helmikuu2019', showing: false },
                        React.createElement(ChangeDate, { date: '23.02.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Luotu /nime\xE4 off -komento, jotta voit poistaa esineest\xE4 nimen' }),
                            React.createElement(Changelist, { change: 'Korjattu kauppa, pienill\xE4 muutoksilla' }),
                            React.createElement(Changelist, { change: 'Parantajien secret thing korjattu. ;)' })
                        ),
                        React.createElement(ChangeDate, { date: '20.02.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Luotu /realname komento' }),
                            React.createElement(Changelist, { change: 'Korjattu toinen vanishiin liittyv\xE4 asia' })
                        ),
                        React.createElement(ChangeDate, { date: '19.02.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Lis\xE4tty datapaketit palvelimelle (reseptit)' })
                        ),
                        React.createElement(ChangeDate, { date: '18.02.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Korjattu viestej\xE4' }),
                            React.createElement(Changelist, { change: 'Asetettu rajapinta Vanishille (fixattiin yll\xE4pitoasioita)' }),
                            React.createElement(Changelist, { change: 'Korjattu s\xE4\xE4nt\xF6kirjassa yhden sivun overflow' })
                        ),
                        React.createElement(ChangeDate, { date: '13.02.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Spigot p\xE4ivitetty 1.13.2' }),
                            React.createElement(Changelist, { change: 'Korjattu s\xE4\xE4nt\xF6kirjassa yhden sivun overflow' })
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'tammikuu2019', btntext: 'Tammikuu 2019' },
                    React.createElement(
                        Changebody,
                        { month: 'tammikuu2019', showing: false },
                        React.createElement(ChangeDate, { date: '12.01.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Trusteja lis\xE4tt\xE4ess\xE4 UUID:n sijasta n\xE4kyy nyt nimi' }),
                            React.createElement(Changelist, { change: 'Teksti "Sait avaimen" votettamisen yhteydess\xE4 otettu pois' })
                        ),
                        React.createElement(ChangeDate, { date: '09.01.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Spigot p\xE4ivitetty 1.13.2' }),
                            React.createElement(Changelist, { change: 'Seen komennosta otettu IP-osoitteen n\xE4kyvyys pois komentoa suoritettaessa Discord chattiin' }),
                            React.createElement(Changelist, { change: 'Varmistettu, ett\xE4 y\xF6 ja p\xE4iv\xE4 toimii oikeilla permeill\xE4, kuten kuuluukin' })
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'joulukuu2018', btntext: 'Joulukuu 2018' },
                    React.createElement(
                        Changebody,
                        { month: 'joulukuu2018', showing: false },
                        React.createElement(ChangeDate, { date: '20.12.2018' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Korjattu Parantajien kick komento' }),
                            React.createElement(Changelist, { change: 'Lis\xE4tty tphere komento admineille' }),
                            React.createElement(Changelist, { change: '/rankaise komento ei toimi en\xE4\xE4 yll\xE4pit\xE4jiin' }),
                            React.createElement(Changelist, { change: 'Lis\xE4tty /rankit komento' }),
                            React.createElement(Changelist, { change: 'Lis\xE4tty globaali viesti kun pelaaja menee afk tai poistuu afkista' })
                        ),
                        React.createElement(ChangeDate, { date: '13.12.2018' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Korjattu kitit (vihdoin ja viimein)' }),
                            React.createElement(Changelist, { change: 'Rtp teleporttaa nyt my\xF6s negatiivisille koordinaateille' }),
                            React.createElement(Changelist, { change: 'Kyltti lis\xE4tty sallittuihin blokkeihin hissin kanssa' })
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'marraskuu2018', btntext: 'Marraskuu 2018' },
                    React.createElement(
                        Changebody,
                        { month: 'marraskuu2018', showing: false },
                        React.createElement(ChangeDate, { date: 'Vuoden pimein kuukausi on n\xE4ytt\xE4ytynyt.' })
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'lokakuu2018', btntext: 'Lokakuu 2018' },
                    React.createElement(
                        Changebody,
                        { month: 'lokakuu2018', showing: false },
                        React.createElement(ChangeDate, { date: '28.10.2018' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Lentomatot eiv\xE4t riko en\xE4\xE4 lasipaneeleita' }),
                            React.createElement(Changelist, { change: 'Lentomattoihin on lis\xE4tty v\xE4rit rankkien mukaan' }),
                            React.createElement(Changelist, { change: 'Voikukkia voi nyt laittaa ruukkuihin' }),
                            React.createElement(Changelist, { change: 'Offline pelaajan varoittaminen toimii nyt niin kuin pit\xE4\xE4kin' }),
                            React.createElement(Changelist, { change: 'Ty\xF6kalut, joissa on Succ -enchant kuluu nyt tavallisesti' })
                        ),
                        React.createElement(ChangeDate, { date: '18.10.2018' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Spigotin vanha versio palautettu' })
                        ),
                        React.createElement(ChangeDate, { date: '17.10.2018' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Setnoobspawn korjattu' }),
                            React.createElement(Changelist, { change: 'Palvelimen random kaatuminen korjattu' }),
                            React.createElement(Changelist, { change: 'Spigot p\xE4ivitetty (1.13.2)' }),
                            React.createElement(Changelist, { change: 'Pelaajien /tp x y z on korjattu' }),
                            React.createElement(Changelist, { change: 'Inventorypluginia p\xE4ivitetty' }),
                            React.createElement(Changelist, { change: 'WorldEditti\xE4 p\xE4ivitetty' })
                        ),
                        React.createElement(ChangeDate, { date: '16.10.2018' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Mahdollinen palvelimen kaatumisen aiheuttava bugi korjattu' }),
                            React.createElement(Changelist, { change: 'Nickin formatoinnilla on nyt rankkikohtaiset oikeudet' })
                        ),
                        React.createElement(ChangeDate, { date: '14.10.2018' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Bugi, jossa aiheutui tavaran loputtomuus on nyt korjattu' }),
                            React.createElement(Changelist, { change: 'Invin tyhjentyminen maailmojen vaihtuessa on nyt loppunut' }),
                            React.createElement(Changelist, { change: 'Kittien pit\xE4isi toimia' }),
                            React.createElement(Changelist, { change: 'Korjattu Nekromantikoiden ja Kuolemattomien rankup spam' }),
                            React.createElement(Changelist, { change: 'Crafting recipej\xE4 lis\xE4tty' })
                        ),
                        React.createElement(ChangeDate, { date: '13.10.2018' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Enchantit toimintaan' }),
                            React.createElement(Changelist, { change: 'Homea ei voi en\xE4\xE4 ylikirjoittaa eri maailmassa (vaatii erinimisen homen)' }),
                            React.createElement(Changelist, { change: 'Voikukkien puhalluseventti tapahtuu nyt vain kerran kahden sijasta' }),
                            React.createElement(Changelist, { change: 'Koralleja voi farmata bonemealilla' }),
                            React.createElement(Changelist, { change: 'Nekromantikoille lis\xE4tty oikeudet komentoon /co i' }),
                            React.createElement(Changelist, { change: 'Kaupassa esineiden loputon myynti korjattu' }),
                            React.createElement(Changelist, { change: 'Warppien poisto toimii kuten kuuluu' }),
                            React.createElement(Changelist, { change: '/enchant komento p\xE4ivitetty my\xF6s mukautettuihin enchantteihin' }),
                            React.createElement(Changelist, { change: 'Spigot p\xE4ivitetty (1.13.1)' }),
                            React.createElement(Changelist, { change: 'Minecraft Discord-chat toimii taas' })
                        ),
                        React.createElement(ChangeDate, { date: '05.10.2018' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Rankin prefixin formatointi lis\xE4tty (lyhyt / pitk\xE4)' }),
                            React.createElement(Changelist, { change: 'Korjattu tapahtuma, jossa el\xE4imet nousivat olkap\xE4\xE4lle ruokittaessa' })
                        ),
                        React.createElement(ChangeDate, { date: '04.10.2018' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Monia slabeja saa yhdistetty\xE4 takaisin kokonaisiksi blockeiksi' }),
                            React.createElement(Changelist, { change: 'Chainmail armorit ovat craftattavissa' }),
                            React.createElement(Changelist, { change: 'Stone -> Gravel -> Sand -> Glass sulatus' }),
                            React.createElement(Changelist, { change: 'Skeleton Skull ja Player head ovat craftattavissa' }),
                            React.createElement(Changelist, { change: 'Korallien tyyppi vaihdettavissa (ei koske blockeja)' }),
                            React.createElement(Changelist, { change: 'XP-bottlen voi craftaa' }),
                            React.createElement(Changelist, { change: 'Timublokeista voi craftaa dirtin' }),
                            React.createElement(Changelist, { change: 'Korjattu lentomatosta lasin hakkaaminen Silk Touchilla' }),
                            React.createElement(Changelist, { change: 'Lojaalien rankit n\xE4kyv\xE4t nyt oikein' }),
                            React.createElement(Changelist, { change: 'Afk-timeout on nyt tuplattu (2min -> 4min)' })
                        ),
                        React.createElement(ChangeDate, { date: '03.10.2018' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Bugi kuolinarkkujen sis\xE4ll\xF6n katoamisesta uloskirjautumisen yhteydess\xE4 korjattu' }),
                            React.createElement(Changelist, { change: 'Fly poistettu endist\xE4' }),
                            React.createElement(Changelist, { change: 'Pelaajilla mahdollisuus k\xE4ytt\xE4\xE4 /trust' }),
                            React.createElement(Changelist, { change: 'Curse of Vanishing ei kadonnut kuolin chestist\xE4 (korjattu)' }),
                            React.createElement(Changelist, { change: 'Korjattu msg virhe tuntemattomista merkeist\xE4' }),
                            React.createElement(Changelist, { change: 'Korjattu bugi loputtomista skulleista /skull komennolla' }),
                            React.createElement(Changelist, { change: 'Lis\xE4tty Boosterpack' }),
                            React.createElement(Changelist, { change: 'Lis\xE4tty autofill home, delhome ja warp komentoihin' }),
                            React.createElement(Changelist, { change: 'Hetken s\xE4ngyss\xE4 makaaminen karkottaa Phantomit kolmeksi p\xE4iv\xE4ksi' })
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'syyskuu2018', btntext: 'Syyskuu 2018' },
                    React.createElement(
                        Changebody,
                        { month: 'syyskuu2018', showing: false },
                        React.createElement(ChangeDate, { date: '29.09.2018' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Hississ\xE4 cave_air ei en\xE4\xE4 est\xE4 hissin toimintaa' })
                        ),
                        React.createElement(ChangeDate, { date: '28.09.2018' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Tab completion kodeille ja warpeille lis\xE4tty' }),
                            React.createElement(Changelist, { change: 'Rtp aikarajoitus valikon kautta' }),
                            React.createElement(Changelist, { change: 'Lentomatto toimii nyt Netheriss\xE4' }),
                            React.createElement(Changelist, { change: 'Lentomatto ja fly poistettu endist\xE4' }),
                            React.createElement(Changelist, { change: 'Voidiin putoaminen Endiss\xE4 ei en\xE4\xE4 teleporttaa pelaajaa spawnille' }),
                            React.createElement(Changelist, { change: 'Fly ei en\xE4\xE4 l\xE4hde pois tarpeettomasti Netherin ja Overworldin v\xE4lill\xE4' })
                        ),
                        React.createElement(ChangeDate, { date: '26.09.2018' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Lentomatto p\xE4\xE4ll\xE4 ei en\xE4\xE4 ota fall damagea' }),
                            React.createElement(Changelist, { change: 'Enderchest komento toimii kuten kuuluu' }),
                            React.createElement(Changelist, { change: 'Lentomatto ei render\xF6i en\xE4\xE4 joka tickiss\xE4' }),
                            React.createElement(Changelist, { change: 'Lentomattoa ei voi en\xE4\xE4 r\xE4j\xE4ytt\xE4\xE4' }),
                            React.createElement(Changelist, { change: 'P\xE4\xE4sy pelaajilta /warn komentoon on estetty' }),
                            React.createElement(Changelist, { change: 'Lentomatto ei tukehduta allaolevia entiteettej\xE4' }),
                            React.createElement(Changelist, { change: 'Inventoryt tallentuu nyt maailmanvaihdosten aikana kuten pit\xE4\xE4kin' })
                        ),
                        React.createElement(ChangeDate, { date: '25.09.2018' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Spigot p\xE4ivitetty 1.13' }),
                            React.createElement(Changelist, { change: 'Afk-kick korjattu' }),
                            React.createElement(Changelist, { change: '/sethomea ei estet\xE4, mik\xE4li home on 60 blockin sis\xE4ll\xE4' }),
                            React.createElement(Changelist, { change: '/enderchest komento' }),
                            React.createElement(Changelist, { change: '/near komentoon lis\xE4tty et\xE4isyysargumentti' }),
                            React.createElement(Changelist, { change: 'Korjattu telepadin kohde NULL' }),
                            React.createElement(Changelist, { change: 'Alias /v\xE4rit lis\xE4tty komennolle /colors' }),
                            React.createElement(Changelist, { change: 'Ty\xF6p\xF6yd\xE4lle aliakset /wbench ja /craft' }),
                            React.createElement(Changelist, { change: 'Forceop ban -komento toimi pelaajilla (korjattu)' })
                        )
                    )
                )
            );
        }
    }]);

    return ChangeLog;
}(React.Component);

ReactDOM.render(React.createElement(ChangeLog, null), document.getElementById('muutokset'));
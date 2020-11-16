'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

{/* Tullaan uusimaan ja automatisoimaan joku päivä. Sori täst. */}

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

var Body = function (_React$Component2) {
    _inherits(Body, _React$Component2);

    function Body(props) {
        _classCallCheck(this, Body);

        var _this2 = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));

        _this2.state = {
            class: _this2.props.class,
            month: _this2.props.month
        };
        return _this2;
    }

    _createClass(Body, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: this.props.month, className: 'collapse ' + (this.props.showing ? 'show' : null), 'aria-labelledby': this.props.month + '_1', 'data-parent': '#muutokset' },
                React.createElement(
                    'div',
                    { className: 'card-body' },
                    this.props.children
                )
            );
        }
    }]);

    return Body;
}(React.Component);

var Dated = function Dated(props) {
    return React.createElement(
        'p',
        null,
        props.date
    );
};

var Change = function Change(props) {
    return React.createElement(
        'li',
        null,
        props.children
    );
};

var Changelog = function (_React$Component3) {
    _inherits(Changelog, _React$Component3);

    function Changelog() {
        _classCallCheck(this, Changelog);

        return _possibleConstructorReturn(this, (Changelog.__proto__ || Object.getPrototypeOf(Changelog)).apply(this, arguments));
    }

    _createClass(Changelog, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'accordion text-left' },
                React.createElement(
                    Month,
                    { month: 'marraskuu2020', btntext: 'Marraskuu 2020' },
                    React.createElement(
                        Body,
                        { month: 'marraskuu2020', showing: true },
                        React.createElement(Dated, { date: '14.11.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Poistettu ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/lakanakana'
                                ),
                                '.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/iita'
                                ),
                                '.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                React.createElement(
                                    'code',
                                    null,
                                    '/tptoggle'
                                ),
                                ' toimii oletettavasti. Ylempirankkiset eiv\xE4t en\xE4\xE4 yliaja, vaan heit\xE4 kohdellaan tasavertaisesti.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Potentiaalinen palvelinvirhe korjattu.'
                            )
                        ),
                        React.createElement(Dated, { date: '9.11.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Mobien spawnratea on pienennetty.'
                            )
                        ),
                        React.createElement(Dated, { date: '7.11.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Armorstandin asentoja voi muuttaa oikeaklikkaamalla kyykyss\xE4!'
                            )
                        ),
                        React.createElement(Dated, { date: '4.11.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Palvelin p\xE4ivitetty 1.16.4!'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Palvelimella voi nyt craftaa onnenkeksej\xE4.'
                            )
                        ),
                        React.createElement(Dated, { date: '1.11.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Tab on palautettu Halloween ulkoasusta.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty etuk\xE4teen tilap\xE4inen onnentoivotus uuteen mappiin.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Aikaisemmin hidastelleet votet pit\xE4isi nyt toimia.'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'lokakuu2020', btntext: 'Lokakuu 2020' },
                    React.createElement(
                        Body,
                        { month: 'lokakuu2020' },
                        React.createElement(Dated, { date: '10.10.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Halloween teemainen tabi.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Spawn on nyt halloween teemainen.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Aikaisemmin hidastelleet votet pit\xE4isi nyt toimia.'
                            )
                        ),
                        React.createElement(Dated, { date: '9.10.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Discord bot n\xE4ytt\xE4\xE4 nyt roolit Minecraftin chatissa.'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'syyskuu2020', btntext: 'Syyskuu 2020' },
                    React.createElement(
                        Body,
                        { month: 'syyskuu2020' },
                        React.createElement(Dated, { date: '19.9.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'P\xE4ivitetty tabista palvelimen alkukirjain isoksi.'
                            )
                        ),
                        React.createElement(Dated, { date: '14.9.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Sisukas-rankkisten (ja alempien) virheellinen viesti-ilmoitus oikeuksista on nyt korjattu.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Paranneltu turvallista teleporttia (onnistuu teleporttaamaan slabien p\xE4\xE4lle)'
                            )
                        ),
                        React.createElement(Dated, { date: '12.9.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Added Russian language (thanks Inferdy \u2764).'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Muutettu arvojen v\xE4rit tukemaan RGB.'
                            )
                        ),
                        React.createElement(Dated, { date: '3.9.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'P\xE4ivitetty Jesari'
                            )
                        ),
                        React.createElement(Dated, { date: '1.9.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty oikeus Nekromantikosta yl\xF6sp\xE4in + lahjoittajille k\xE4ytt\xE4\xE4 RGB-v\xE4rej\xE4 pelinimess\xE4.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Korjattu k\xE4\xE4nt\xE4j\xE4ss\xE4 bugi, joka rikkoi k\xE4\xE4nt\xE4j\xE4n pelaajalla ollessa ei-tuettu kieli tietokannassa.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty tapa tehd\xE4 l\xE4t\xE4k\xF6it\xE4.'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'elokuu2020', btntext: 'Elokuu 2020' },
                    React.createElement(
                        Body,
                        { month: 'elokuu2020' },
                        React.createElement(Dated, { date: '31.8.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Chat-v\xE4rit on tullut takaisin rgb tuella.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Parempi k\xE4ytt\xE4jien maininta chatissa.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Fixattu bugi, jossa pelaajalla oli ei-tuettu kieli ja hajotti k\xE4\xE4nt\xE4j\xE4n.'
                            )
                        ),
                        React.createElement(Dated, { date: '30.8.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Builders wand on nyt palvelimella'
                            )
                        ),
                        React.createElement(Dated, { date: '29.8.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty yl\xF6salaisin oleva kieli.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'P\xE4ivitetty palvelin versioon 1.16.2!'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Nether ja End resetattu.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Fixattu bugi, jossa kodin koordinaatti on negatiivinen ja jaollinen 16 => nakkaa virheen.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Rankkien v\xE4limuisti p\xE4ivittyy -> jos rankup ja relog, niin rankki pysyy samana.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Nettisivut p\xE4ivitetty.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Uusi tabin gradient.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                React.createElement(
                                    'code',
                                    null,
                                    '/music'
                                ),
                                ' on lis\xE4tty uudet Netherin musiikit.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                React.createElement(
                                    'code',
                                    null,
                                    '/music'
                                ),
                                ' kuuluvuutta on parannettu.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty vanhat "koodit" takaisin palvelimelle.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty \xE4\xE4niviestej\xE4 palvelimelle.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Iron Golem pakottaa sinut pudottamaan housusi, kun ly\xF6 sinua.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Kuolinviestit jakautuu nyt maailmojen v\xE4lill\xE4.'
                            )
                        ),
                        React.createElement(Dated, { date: '15.8.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty 1.16.2 tuki'
                            )
                        ),
                        React.createElement(Dated, { date: '13.8.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Korjattu vinkki Netherin ja Endin resettaamisesta'
                            )
                        ),
                        React.createElement(Dated, { date: '7.8.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Fixattu bugi yp-chatissa.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty ilmoitus muistuttamaan pelaajia liittymisen yhteydess\xE4 ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/warns'
                                ),
                                ' -komennosta.'
                            )
                        ),
                        React.createElement(Dated, { date: '5.8.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Palvelimen render distance nostettu 10 chunkkiin (+2 chunkkia edellisest\xE4).'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'hein\xE4kuu2020', btntext: 'Hein\xE4kuu 2020' },
                    React.createElement(
                        Body,
                        { month: 'hein\xE4kuu2020' },
                        React.createElement(Dated, { date: '22.7.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Spawnille avattu parkour! ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/warp parkour'
                                )
                            )
                        ),
                        React.createElement(Dated, { date: '5.7.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                React.createElement(
                                    'code',
                                    null,
                                    '/alue'
                                ),
                                ' n\xE4ytt\xE4\xE4 nyt j\xE4senten ja omistajien m\xE4\xE4r\xE4n suojauksessa.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                React.createElement(
                                    'code',
                                    null,
                                    '/alue'
                                ),
                                ' n\xE4ytt\xE4\xE4 molemmat XY pisteet suojauksen koosta.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/manu'
                                )
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Poistettu ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/tank'
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'kes\xE4kuu2020', btntext: 'Kes\xE4kuu 2020' },
                    React.createElement(
                        Body,
                        { month: 'kes\xE4kuu2020' },
                        React.createElement(Dated, { date: '25.6.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty 1.16.1 tuki servulle!'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Toisen pelaajan pelaaja-arvon klikkaaminen chatissa n\xE4ytt\xE4\xE4 nyt kyseisen pelaajan peliajan oman sijaan.'
                            )
                        ),
                        React.createElement(Dated, { date: '18.6.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Karanteenissa toimii VR'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Palvelimella voi nyt antaa lemmikkej\xE4 ja vapauttaa niit\xE4 komennoilla ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/lemmikki anna <pelaaja>'
                                ),
                                ' ja',
                                React.createElement(
                                    'code',
                                    null,
                                    '/lemmikki vapauta'
                                ),
                                '.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Palvelimella voi nyt t\xE4g\xE4t\xE4 ihmisi\xE4 chatissa k\xE4ytt\xE4en ',
                                React.createElement(
                                    'code',
                                    null,
                                    '@pelaajanimi'
                                ),
                                '.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/s\xE4\xE4nn\xF6t'
                                ),
                                ' komento.'
                            )
                        ),
                        React.createElement(Dated, { date: '3.6.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Entity Activation Range nostettu.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Villagerin tradet pit\xE4isi nyt restockaa nopeammin.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Fixattu ongelma, jossa pelaajat satunnaisesti j\xE4iv\xE4t jumiin chunkille.'
                            )
                        ),
                        React.createElement(Dated, { date: '1.6.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Mobien tracking range on default.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Nether-portaalista voi nyt kuljettaa mobeja.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lumousp\xF6yt\xE4 ehdottaa nyt oikeat lumoukset.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Spam fishing problem solved.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Villagereiden t\xF6iden resettaus fixed.'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Netherin katolle on taas mahdollista p\xE4\xE4st\xE4.'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'toukokuu2020', btntext: 'Toukokuu 2020' },
                    React.createElement(
                        Body,
                        { month: 'toukokuu2020' },
                        React.createElement(Dated, { date: '31.5.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty info voteen, ett\xE4 siit\xE4 saa rahaa.'
                            )
                        ),
                        React.createElement(Dated, { date: '15.5.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Y\xF6 kelautuu nopeammin. Mit\xE4 useampi nukkuu, sit\xE4 nopeampi y\xF6.'
                            )
                        ),
                        React.createElement(Dated, { date: '14.5.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty komento ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/votestreak [nimi]'
                                ),
                                '. Ilman nime\xE4 n\xE4kee oman voteputken.'
                            )
                        ),
                        React.createElement(Dated, { date: '11.5.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                React.createElement(
                                    'code',
                                    null,
                                    '/discord'
                                ),
                                ' komento korjattu'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Voten m\xE4\xE4r\xE4 pienennetty 75 -> 50 ja lis\xE4ksi tehty voteputket'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'huhtikuu2020', btntext: 'Huhtikuu 2020' },
                    React.createElement(
                        Body,
                        { month: 'huhtikuu2020' },
                        React.createElement(
                            'p',
                            null,
                            'Mit\xE4\xE4n ei tapahtunut.'
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'maaliskuu2020', btntext: 'Maaliskuu 2020' },
                    React.createElement(
                        Body,
                        { month: 'maaliskuu2020' },
                        React.createElement(Dated, { date: '27.3.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty seuraavat komennot: ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/j\xF6ms /retu /tank /ash'
                                )
                            )
                        ),
                        React.createElement(Dated, { date: '22.3.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Spawnereita voi taas muuttaa creeper- ja squid-spawnereiksi'
                            ),
                            React.createElement(
                                Change,
                                null,
                                React.createElement(
                                    'code',
                                    null,
                                    '/vote'
                                ),
                                ' ei avaa en\xE4\xE4 valikkoa. Chattiin tulee molemmat linkit.'
                            )
                        ),
                        React.createElement(Dated, { date: '18.3.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'lis\xE4tty uusia shortcutkomentoja ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/nax /nubbe /skidaddleskidoodle [/nou /reverse /unoreverse]'
                                )
                            )
                        ),
                        React.createElement(Dated, { date: '12.3.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Granite, diorite, andesite, cobble, stone voi nyt sulattaa blast furnacessa graveliksi'
                            )
                        ),
                        React.createElement(Dated, { date: '9.3.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Uusi komento ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/alue'
                                ),
                                '. N\xE4ytt\xE4\xE4 alueen nimen.'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'helmikuu2020', btntext: 'Helmikuu 2020' },
                    React.createElement(
                        Body,
                        { month: 'helmikuu2020' },
                        React.createElement(Dated, { date: '24.2.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                React.createElement(
                                    'code',
                                    null,
                                    '/radio'
                                ),
                                ' toimii taas'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Uusi komento ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/music'
                                )
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Sillanrakennus poistettu k\xE4yt\xF6st\xE4 monistusglitchin takia'
                            )
                        ),
                        React.createElement(Dated, { date: '16.2.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Map reset'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'tammikuu2020', btntext: 'Tammikuu 2020' },
                    React.createElement(
                        Body,
                        { month: 'tammikuu2020' },
                        React.createElement(Dated, { date: '16.1.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                React.createElement(
                                    'code',
                                    null,
                                    '/tk'
                                ),
                                ' tuotu takaisin'
                            )
                        ),
                        React.createElement(Dated, { date: '13.1.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Vote korjattu'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'joulukuu2019', btntext: 'Joulukuu 2019' },
                    React.createElement(
                        Body,
                        { month: 'joulukuu2019' },
                        React.createElement(Dated, { date: '13.12.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/ignore'
                                ),
                                ' (',
                                React.createElement(
                                    'code',
                                    null,
                                    '/ignore add <nimi>'
                                ),
                                ', ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/ignore list'
                                ),
                                ', ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/ignore remove <nimi>'
                                ),
                                ')'
                            )
                        ),
                        React.createElement(Dated, { date: '11.12.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty Bedrock versiosta tuttu sillanrakennusominaisuus'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty uusi resepti: 6 lasipaneelia -> glass block '
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty uusi resepti uuniin: stainded glass -> glass block'
                            )
                        ),
                        React.createElement(Dated, { date: '10.12.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Rankkikohtaiset kotien m\xE4\xE4r\xE4t korjattu'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Spawnerien otto silktouchilla ja ilman silktouchia korjattu'
                            )
                        ),
                        React.createElement(Dated, { date: '7.12.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Tabin serverv\xE4rej\xE4 paranneltu'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Taikamaton kanssa ei en\xE4\xE4 ota fall damagea'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Entiteetit eiv\xE4t ota damagea taikamaton sivuista'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Permiplugin osaa k\xE4sitell\xE4 offline pelaajia, ja pystyy asettamaan oikeuksia ilman relogia'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Korjattu coreplugarin komennonsuorittajasta komponenttibugi'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'marraskuu2019', btntext: 'Marraskuu 2019' },
                    React.createElement(
                        Body,
                        { month: 'marraskuu2019' },
                        React.createElement(Dated, { date: '30.11.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Korjattu prismarine slabien muunaminen t\xE4ys blockeiksi'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty mahdollisuus muuntaa Blast Furnacella hiilipalikoista mustaa v\xE4riainetta'
                            )
                        ),
                        React.createElement(Dated, { date: '22.11.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Discord chatin v\xE4rit korjattu'
                            )
                        ),
                        React.createElement(Dated, { date: '16.11.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Tuomas veturi p\xE4ivitetty'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Looppaus + random toimii nyt'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Voikukat korjattu'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'lokakuu2019', btntext: 'Lokakuu 2019' },
                    React.createElement(
                        Body,
                        { month: 'lokakuu2019' },
                        React.createElement(Dated, { date: '31.10.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                React.createElement(
                                    'code',
                                    null,
                                    '/sit'
                                ),
                                ' tuotu takaisin'
                            )
                        ),
                        React.createElement(Dated, { date: '26.10.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                React.createElement(
                                    'code',
                                    null,
                                    '/vote'
                                ),
                                ' toimii taas'
                            ),
                            React.createElement(
                                Change,
                                null,
                                '(Realistinen) el\xE4intenkanto takaisin servulla'
                            )
                        ),
                        React.createElement(Dated, { date: '25.10.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                React.createElement(
                                    'code',
                                    null,
                                    '/nime\xE4'
                                ),
                                ' komento lis\xE4tty palvelimelle'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty yll\xE4pidolle ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/setsign'
                                )
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Korjattu viestibugi ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/nick player nick'
                                ),
                                ' -komennossa (koskien yll\xE4pitoa)'
                            ),
                            React.createElement(
                                Change,
                                null,
                                React.createElement(
                                    'code',
                                    null,
                                    '/baltop'
                                ),
                                ' korjattu'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'syyskuu2019', btntext: 'Syyskuu 2019' },
                    React.createElement(
                        Body,
                        { month: 'syyskuu2019', showing: false },
                        React.createElement(Dated, { date: '25.09.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Tpa:n ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/back'
                                ),
                                ' fixattu oikeiden pelaajien sijaintiin'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'mobGriefing asetettu takaisin p\xE4\xE4lle'
                            )
                        ),
                        React.createElement(Dated, { date: '24.09.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Tp:n ja ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/spawn'
                                ),
                                ' komennon ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/back'
                                ),
                                ' tallentaa nyt sijainnin'
                            )
                        ),
                        React.createElement(Dated, { date: '21.09.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                React.createElement(
                                    'code',
                                    null,
                                    '/kms'
                                ),
                                ' ja ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/kys'
                                ),
                                ' lis\xE4tty'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Spawnerit putoaa taas Silk Touch -enchantilla'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'elokuu2019', btntext: 'Elokuu 2019' },
                    React.createElement(
                        Body,
                        { month: 'elokuu2019', showing: false },
                        React.createElement(Dated, { date: '19.08.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Coreprotect osaa nyt tallentaa lent\xE4v\xE4t blockit'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Tnt ja tnt_minecart ei en\xE4\xE4 lenn\xE4t\xE4 niin paljon blockei -> parempia raivaukseen'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty custom recipet servulle'
                            )
                        ),
                        React.createElement(Dated, { date: '17.08.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Paranneltu databasen k\xE4ytt\xF6\xF6: StatManager, Karanteenials, KaranteeniPerms, Chatar'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Mahdollisesti v\xE4hennetty joinauksesta seuraavaa lagia: KaranteeniPerms, Karanteenials, KaranteeniCore, StatManager, Chatar (vaihdettu db sync -> async. jos ongelmia ilmenee niin ilmoittakaa)'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty automaattinen restart (yp k\xE4ytt\xE4k\xE4\xE4 komentoa ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/restarter:restart'
                                ),
                                ')'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Poistettu virheellisi\xE4 blockeja taikamatosta'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'L\xF6ydetty ISO bugi timereista joka johti siihen ett\xE4 kaikki timerit ajettiin joka tickill\xE4. Nyt fixattu, hyv\xE4ll\xE4 tuurilla isoja vaikutuksia tehokkuuteen'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Operaattorista yl\xF6sp\xE4in oikat ',
                                React.createElement(
                                    'code',
                                    null,
                                    '/player kill <nimi>'
                                )
                            )
                        ),
                        React.createElement(Dated, { date: '16.08.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                React.createElement(
                                    'code',
                                    null,
                                    '/rtp'
                                ),
                                ' toimii, aiempaa nopeampi ja ei mene veden alle'
                            )
                        ),
                        React.createElement(Dated, { date: '13.08.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Fixattu "ep\xE4turvallinen sijainti" teleportatessa'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Fixattu puuttunut \xE4\xE4ni kotiin teleportatessa'
                            ),
                            React.createElement(
                                Change,
                                null,
                                React.createElement(
                                    'code',
                                    null,
                                    '/rtp'
                                ),
                                ' tehostettu'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Fixattu rtp veden alle vienti'
                            )
                        ),
                        React.createElement(Dated, { date: '11.08.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Uusi versio ja uudet kujeet. 1.14 on saapunut.'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Changelog;
}(React.Component);

ReactDOM.render(React.createElement(Changelog, null), document.getElementById('muutokset'));
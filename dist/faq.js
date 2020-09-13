'use-strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FrequentlyAskedQuestions = function (_React$Component) {
    _inherits(FrequentlyAskedQuestions, _React$Component);

    function FrequentlyAskedQuestions() {
        _classCallCheck(this, FrequentlyAskedQuestions);

        return _possibleConstructorReturn(this, (FrequentlyAskedQuestions.__proto__ || Object.getPrototypeOf(FrequentlyAskedQuestions)).apply(this, arguments));
    }

    _createClass(FrequentlyAskedQuestions, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(CommonQuestions, null),
                React.createElement(ProtectionQuestions, null),
                React.createElement(EconomyQuestions, null),
                React.createElement(HomeQuestions, null),
                React.createElement(PunishmentQuestions, null),
                React.createElement(ModQuestions, null)
            );
        }
    }]);

    return FrequentlyAskedQuestions;
}(React.Component);

var CommonQuestions = function (_React$Component2) {
    _inherits(CommonQuestions, _React$Component2);

    function CommonQuestions() {
        _classCallCheck(this, CommonQuestions);

        return _possibleConstructorReturn(this, (CommonQuestions.__proto__ || Object.getPrototypeOf(CommonQuestions)).apply(this, arguments));
    }

    _createClass(CommonQuestions, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    Heading,
                    { id: 'yleinen' },
                    'Yleinen'
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'yle1', target: 'ylecol1' },
                        'Koska palvelin saa p\xE4ivityksen?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'yle1', target: 'ylecol1' },
                        'Wise chinese man once said: \u6211\u4E0D\u77E5\u9053'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'yle2', target: 'ylecol2' },
                        'Tahtoisin yll\xE4pit\xE4j\xE4ksi. Kuinka voin saavuttaa sen?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'yle2', target: 'ylecol2' },
                        'K\xE4y lukemassa ohjeet ',
                        React.createElement(
                            'a',
                            { href: '/yphaku', id: 'link' },
                            't\xE4\xE4lt\xE4'
                        ),
                        ' ja l\xE4het\xE4 hakemus k\xE4ytt\xE4en annettua lomaketta.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'yle3', target: 'ylecol3' },
                        'Apua! Ei ole oikeuksia komentoon, vaikka pit\xE4isi olla.'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'yle3', target: 'ylecol3' },
                        'Koita poistua palvelimelta ja liitty\xE4 uudelleen. Mik\xE4li ongelma ei korjaantunut, nyk\xE4ise yll\xE4pit\xE4j\xE4\xE4 hihasta.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'yle4', target: 'ylecol4' },
                        'Kuinka p\xE4\xE4sen korkeammalle tasolle?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'yle4', target: 'ylecol4' },
                        'Pelaamalla. Rankeista l\xF6yd\xE4t lis\xE4tietoa ',
                        React.createElement(
                            'a',
                            { id: 'link', href: '/rankit' },
                            't\xE4\xE4lt\xE4'
                        ),
                        '.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'yle5', target: 'ylecol5' },
                        'L\xF6ysin palvelimelta peli\xE4 rikkovan vian. Mit\xE4 teen?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'yle5', target: 'ylecol5' },
                        'Ota yhteytt\xE4 yll\xE4pit\xE4j\xE4\xE4n joko palvelimella tai liity Karanteenin Discordiin ja valitse sielt\xE4 kanava "Bugit ja parannusehdotukset". Mik\xE4li bugia voi hyv\xE4ksik\xE4ytt\xE4\xE4, pid\xE4 se omana tietonasi, \xE4l\xE4k\xE4 kerro muille pelaajille.',
                        React.createElement('br', null),
                        React.createElement('br', null),
                        'Bugin hyv\xE4ksik\xE4ytt\xF6 on ',
                        React.createElement(
                            'strong',
                            null,
                            'ankarasti kielletty\xE4'
                        ),
                        '. Mik\xE4li j\xE4\xE4t siit\xE4 kiinni, saat siit\xE4 automaattisesti tuntuvan porttikiellon.',
                        React.createElement('br', null),
                        React.createElement('br', null),
                        'Hyv\xE4ksik\xE4ytett\xE4v\xE4n / peli\xE4rikkovan bugin ilmiantamisesta saa yleens\xE4 korvauksen.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'yle6', target: 'ylecol6' },
                        'Voinko k\xE4ytt\xE4\xE4 kahta tili\xE4 palvelimella?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'yle6', target: 'ylecol6' },
                        'Voit, mutta tilit eiv\xE4t saa hy\xF6ty\xE4 toisistaan. T\xE4h\xE4n lukeutuu mm. tavarapakkausten ja \xE4\xE4nestysrahojen siirt\xE4minen toiselle tilille. Pelitilit eiv\xE4t saa olla yht\xE4 aikaa palvelimella.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'yle7', target: 'ylecol7' },
                        'Kuinka usein maailma nollataan?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'yle7', target: 'ylecol7' },
                        'Maailma nollataan yleens\xE4 noin puolen vuoden v\xE4lein, mutta ei tapahdu automaationa. Yleens\xE4 maailman nollaus my\xF6s t\xE4hd\xE4t\xE4\xE4n seuraavan Minecraftin suuren versiop\xE4ivityksen kohdille.',
                        React.createElement('br', null),
                        React.createElement('br', null),
                        'Netheri\xE4 ei nollata ja End nollataan kerran kolmessa kuukaudessa.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'yle8', target: 'ylecol8' },
                        'Mik\xE4 s\xE4ilyy maailman nollauksen yhteydess\xE4?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'yle8', target: 'ylecol8' },
                        'Maailman nollauksessa eli "mapresetissa" kaikki aloittavat samalta viivalta. T\xE4m\xE4 tarkoittaa sit\xE4, ett\xE4 pelaajien rahat, inventory ja koko kartta nollataan maisemanvaihdon vuoksi, jolloin kaikki joutuvat aloittamaan alusta. Peliaika on ainut asia, joka s\xE4ilyy.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'yle9', target: 'ylecol9' },
                        'Kuinka voin lahjoittaa palvelimelle?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'yle9', target: 'ylecol9' },
                        'Koska Karanteenissa ei ole k\xE4yt\xF6ss\xE4 vippej\xE4, vaan kaikki perustuu peliaikaan, voit tehd\xE4 vapaamuotoisen lahjoituksen mm. PayPalilla. Tarkemmat ohjeet l\xF6yd\xE4t ',
                        React.createElement(
                            'a',
                            { id: 'link', href: '/lahjoitus', target: 'blank' },
                            't\xE4\xE4lt\xE4'
                        ),
                        '.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'yle10', target: 'ylecol10' },
                        'Mit\xE4 teen jos tarvitsen yll\xE4pidon apua, mutta he eiv\xE4t ole juuri nyt paikalla?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'yle10', target: 'ylecol10' },
                        'Voit liitty\xE4 Karanteenin ',
                        React.createElement(
                            'a',
                            { id: 'link', href: 'https://discord.gg/dxCtuY7' },
                            'Discord'
                        ),
                        ' -palvelimelle ja pyyt\xE4\xE4 apua luomalla tiketin #apua kanavalta.'
                    )
                )
            );
        }
    }]);

    return CommonQuestions;
}(React.Component);

var ProtectionQuestions = function (_React$Component3) {
    _inherits(ProtectionQuestions, _React$Component3);

    function ProtectionQuestions() {
        _classCallCheck(this, ProtectionQuestions);

        return _possibleConstructorReturn(this, (ProtectionQuestions.__proto__ || Object.getPrototypeOf(ProtectionQuestions)).apply(this, arguments));
    }

    _createClass(ProtectionQuestions, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    Heading,
                    { id: 'suojaus' },
                    'Suojaus'
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'prot1', target: 'protcol1' },
                        'Miten voin suojata alueeni?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'prot1', target: 'protcol1' },
                        'Yll\xE4pito suojaa alueen ja suojaukseen vaaditaan talon alku. Huomaathan, ett\xE4 talosi t\xE4ytyy olla v\xE4hint\xE4\xE4n sadan (100) blockin p\xE4\xE4ss\xE4 l\xE4himm\xE4st\xE4 talosta. Mik\xE4li aiot luoda kyl\xE4n, voit p\xE4\xE4tt\xE4\xE4 alueelle nimen. Warpin kyl\xE4lle saa vasta, kun kyl\xE4ll\xE4 on 15 asukasta. ',
                        React.createElement('br', null),
                        React.createElement('br', null),
                        'Endiin ei p\xE4\xE4s\xE4\xE4nt\xF6isesti suojata alueita.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'prot2', target: 'protcol2' },
                        'Apua! Taloani on grieffattu!'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'prot2', target: 'protcol2' },
                        'Ei h\xE4t\xE4\xE4. P\xE4\xE4set Karanteenin Discordiin ',
                        React.createElement(
                            'code',
                            null,
                            '/discord'
                        ),
                        ' komennolla, tai voit nyk\xE4ist\xE4 jo paikalla olevaa yll\xE4pit\xE4j\xE4\xE4 hihasta. Joka tapauksessa saat grieffatun talosi kuntoon, sek\xE4 tavarat takaisin. Grieffaaja sit\xE4 vastoin saa porttikiellon palvelimelle.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'prot3', target: 'protcol3' },
                        'Kuinka annan kaverilleni oikeudet alueeseen?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'prot3', target: 'protcol3' },
                        'Oikeudet alueeseen voit antaa komennolla ',
                        React.createElement(
                            'code',
                            null,
                            '/trust <suojauksen_nimi> <pelaajan_nimi>'
                        ),
                        ' seisten suojauksen sis\xE4ll\xE4. Suojauksen nimen saat selville komennolla ',
                        React.createElement(
                            'code',
                            null,
                            '/alue'
                        ),
                        ' kun seisot sen p\xE4\xE4ll\xE4.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'prot4', target: 'protcol4' },
                        'Kuinka annan kaverilleni oikeudet chesteihin ja uuneihin?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'prot4', target: 'protcol4' },
                        'Voit antaa oikeudet kyseisiin blockeihin katsomalla blockia ja kirjoittamalla komennon ',
                        React.createElement(
                            'code',
                            null,
                            '/+oikeudet <pelaajan_nimi>'
                        ),
                        '. T\xE4m\xE4n j\xE4lkeen kaverillasi on oikeudet avata kyseinen arkku. Komento toimii my\xF6s muihin container blockeihin.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'prot5', target: 'protcol5' },
                        'L\xF6ysin suojaamattoman arkun. Voinko ottaa sielt\xE4 tavaraa?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'prot5', target: 'protcol5' },
                        'Et. Vaikka l\xF6yt\xE4isit arkun tai kokonaan suojaamattoman arkun, et saa ottaa sielt\xE4 tavaroita tai rikkoa paikkaa. Grieffaaminen johtaa usein porttikieltoon.'
                    )
                )
            );
        }
    }]);

    return ProtectionQuestions;
}(React.Component);

var EconomyQuestions = function (_React$Component4) {
    _inherits(EconomyQuestions, _React$Component4);

    function EconomyQuestions() {
        _classCallCheck(this, EconomyQuestions);

        return _possibleConstructorReturn(this, (EconomyQuestions.__proto__ || Object.getPrototypeOf(EconomyQuestions)).apply(this, arguments));
    }

    _createClass(EconomyQuestions, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    Heading,
                    { id: 'ekonomia' },
                    'Ekonomia'
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'eco1', target: 'ecocol1' },
                        'Kuinka voin luoda arkkukaupan?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'eco1', target: 'ecocol1' },
                        'Voit luoda arkkukaupan ly\xF6m\xE4ll\xE4 arkkua kyykyss\xE4 tavara k\xE4dess\xE4. T\xE4m\xE4n j\xE4lkeen chat kysyy sinulta hinnan tavaralle. Kirjoita hinta ja n\xE4in arkkukauppasi on valmis.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'eco2', target: 'ecocol2' },
                        'Kuinka voin poistaa arkkukaupan?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'eco2', target: 'ecocol2' },
                        'Voit poistaa arkkukaupan hajottamalla kyseisen arkun tai katsomalla arkkukauppaa kohti ja suorittamalla ',
                        React.createElement(
                            'code',
                            null,
                            '/qs remove'
                        ),
                        '.',
                        React.createElement('br', null),
                        React.createElement('br', null),
                        'Muita arkkukaupan komentoja ovat mm. ',
                        React.createElement(
                            'code',
                            null,
                            '/qs price <hinta>'
                        )
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'eco3', target: 'ecocol3' },
                        'Mit\xE4 valuuttaa palvelin k\xE4ytt\xE4\xE4 ja kuinka saan sit\xE4?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'eco3', target: 'ecocol3' },
                        'Palvelimella on rahavaluuttana pennit. Pennej\xE4 saat hankkimalla uutta peliaikaa, sek\xE4 palvelinta \xE4\xE4nest\xE4m\xE4ll\xE4 ',
                        React.createElement(
                            'code',
                            null,
                            '/vote'
                        ),
                        '. Jokainen \xE4\xE4nestykerta on 50 pennin arvoinen. ',
                        React.createElement('br', null),
                        'Voit my\xF6s myyd\xE4 sek\xE4 ostaa tavaraa k\xE4ytt\xE4m\xE4ll\xE4 arkkukauppoja. Spawnilla on kauppa (',
                        React.createElement(
                            'code',
                            null,
                            '/warp kauppa'
                        ),
                        '), jonne voit myyd\xE4 oreista tehtyj\xE4 blockeja.'
                    )
                )
            );
        }
    }]);

    return EconomyQuestions;
}(React.Component);

var HomeQuestions = function (_React$Component5) {
    _inherits(HomeQuestions, _React$Component5);

    function HomeQuestions() {
        _classCallCheck(this, HomeQuestions);

        return _possibleConstructorReturn(this, (HomeQuestions.__proto__ || Object.getPrototypeOf(HomeQuestions)).apply(this, arguments));
    }

    _createClass(HomeQuestions, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    Heading,
                    { id: 'kodit' },
                    'Kodit'
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'home1', target: 'homecol1' },
                        'Hukkasin kotini. Kuinka saan sen takaisin?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'home1', target: 'homecol1' },
                        'Nyk\xE4ise yll\xE4pit\xE4j\xE4\xE4 hihasta ja kerro h\xE4nelle mit\xE4 teit viimeksi kotisi l\xE4hettyvilt\xE4 ja milt\xE4 se n\xE4ytti. N\xE4in saamme palautettua sinut oikeaan paikkaan.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'home2', target: 'homecol2' },
                        'En pysty teleporttaamaan, poistamaan tai asettamaan koteja. Internal error, wat do?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'home2', target: 'homecol2' },
                        'Sano l\xE4himm\xE4lle yll\xE4pit\xE4j\xE4lle asiasta. Todenn\xE4k\xF6isesti joku tai jotkin kodeistasi ovat korruptoituneet ja joudumme poistamaan ne manuaalisesti. Mik\xE4li yll\xE4pitoa ei ole paikalla, liity Karanteenin Discord palvelimelle ja kerro siell\xE4 ongelmastasi yll\xE4pidolle.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'home3', target: 'homecol3' },
                        'Saanko asettaa kodin Netheriin tai Endiin?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'home3', target: 'homecol3' },
                        'Saat, mutta Endiin emme suosittele. End resetoidaan n. puolessa v\xE4liss\xE4 karttaa, mik\xE4 voi aiheuttaa kodin korruptoitumista ja sinun kuoleman. T\xE4m\xE4 tarkoittaa siis sit\xE4, ett\xE4 saatat kuolla jos k\xE4yt\xE4t kotia resetoinnin j\xE4lkeen. Yll\xE4pito ei ole velvollinen palauttamaan tavaroitasi.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'home4', target: 'homecol4' },
                        'Saanko asettaa kodin toisen pelaajan taloon?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'home4', target: 'homecol4' },
                        'Mik\xE4li toiselta pelaajalta on lupa asettaa taloon koti, on t\xE4m\xE4 sallittua. Kodin asettaminen muussa tapauksessa luetaan h\xE4irinn\xE4ksi ja on varoituksen arvoinen. Toistuvissa tapauksissa rangaistuksia tiukennetaan.'
                    )
                )
            );
        }
    }]);

    return HomeQuestions;
}(React.Component);

var PunishmentQuestions = function (_React$Component6) {
    _inherits(PunishmentQuestions, _React$Component6);

    function PunishmentQuestions() {
        _classCallCheck(this, PunishmentQuestions);

        return _possibleConstructorReturn(this, (PunishmentQuestions.__proto__ || Object.getPrototypeOf(PunishmentQuestions)).apply(this, arguments));
    }

    _createClass(PunishmentQuestions, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    Heading,
                    { id: 'rangaistukset' },
                    'Rangaistukset'
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'pun1', target: 'puncol1' },
                        'Montako rangaistusta voin saada?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'pun1', target: 'puncol1' },
                        'Riippuu k\xE4ytt\xE4ytymisest\xE4si servulla. Toistaiseksi annamme korkeintaan kaksi porttikieltoa, joista j\xE4lkimm\xE4inen on aina ikuinen, jos ensimm\xE4inen on ollut yli viiden (5) p\xE4iv\xE4n mittainen.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'pun2', target: 'puncol2' },
                        'Mit\xE4 rankaisumenetelmi\xE4 teill\xE4 on olemassa?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'pun2', target: 'puncol2' },
                        'Hiljennykset, varoitukset, sek\xE4 porttikiellot. Kolme varoitusta on aina kahden viikon porttikielto.'
                    )
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'pun3', target: 'puncol3' },
                        'Sain rangaistuksen turhasta!'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'pun3', target: 'puncol3' },
                        'Liity Karanteenin Discordiin ja kerro asiasi #apua -kanavalla. Muista, ett\xE4 vaikka jokin ei olisi kielletty\xE4 s\xE4\xE4nn\xF6iss\xE4, siit\xE4 voidaan silti rangaista. Yll\xE4pit\xE4jien n\xE4kemykset voivat my\xF6s erota toisistaan, jonka vuoksi keskustele rangaistuksesta rangaistuksen antajan kanssa.'
                    )
                )
            );
        }
    }]);

    return PunishmentQuestions;
}(React.Component);

var ModQuestions = function (_React$Component7) {
    _inherits(ModQuestions, _React$Component7);

    function ModQuestions() {
        _classCallCheck(this, ModQuestions);

        return _possibleConstructorReturn(this, (ModQuestions.__proto__ || Object.getPrototypeOf(ModQuestions)).apply(this, arguments));
    }

    _createClass(ModQuestions, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    Heading,
                    { id: 'modit' },
                    'Modit'
                ),
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        Question,
                        { id: 'mod1', target: 'modcol1' },
                        'Mitk\xE4 modit ovat sallittuja Karanteenissa?'
                    ),
                    React.createElement(
                        Answer,
                        { id: 'mod1', target: 'modcol1' },
                        'P\xE4\xE4s\xE4\xE4nt\xF6isesti kaikki pelaajia hy\xF6dytt\xE4v\xE4t modit ovat kiellettyj\xE4, siin\xE4 miss\xE4 grafiikkamodit kuten OptiFine ovat sallittuja. Nyk\xE4ise yll\xE4pit\xE4j\xE4\xE4 hihasta mik\xE4li et ole varma.'
                    )
                )
            );
        }
    }]);

    return ModQuestions;
}(React.Component);

var Card = function Card(props) {
    return React.createElement(
        'div',
        { className: 'card bg-transparent' },
        props.children
    );
};

var Question = function Question(props) {
    return React.createElement(
        'div',
        { className: 'card-header', id: props.id },
        React.createElement(
            'h2',
            { className: 'mb-0' },
            React.createElement(
                'button',
                { className: 'btn btn-link', type: 'button', 'aria-controls': props.target, 'data-toggle': 'collapse', 'data-target': '#' + props.target, 'aria-expanded': 'true' },
                props.children
            )
        )
    );
};

var Answer = function Answer(props) {
    return React.createElement(
        'div',
        { className: 'collapse', id: props.target, 'aria-labelledby': props.id, 'data-parent': '#faqAccordion' },
        React.createElement(
            'div',
            { className: 'card-body' },
            props.children
        )
    );
};

var Heading = function Heading(props) {
    return React.createElement(
        'h4',
        { id: props.id, className: 'text-left mt-3' },
        props.children
    );
};

ReactDOM.render(React.createElement(FrequentlyAskedQuestions, null), document.getElementById('faqAccordion'));
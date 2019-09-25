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
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "accordion", id: "faqAccordion" },
                React.createElement(Divider, { id: "yleinen", name: "Yleinen" }),
                React.createElement(Accordion, { id: "yle1", question: "Koska palvelin saa p\xE4ivityksen?", target: "ylecol1", answer: "Wise chinese man once said: \u6211\u4E0D\u77E5\u9053" }),
                React.createElement(Accordion, { id: "yle2", question: "Tahtoisin yll\xE4pit\xE4j\xE4ksi. Kuinka voin saavuttaa sen?", target: "ylecol2", answer: ['Käy lukemassa ohjeet ', React.createElement(
                        "a",
                        { id: "link", href: "/yphaku" },
                        "t\xE4\xE4lt\xE4"
                    ), ' ja lähetä hakemus käyttäen annettua lomaketta.'] }),
                React.createElement(Accordion, { id: "yle3", question: "Apua! Ei ole oikeuksia komentoon, vaikka pit\xE4isi olla.", target: "ylecol3", answer: "Koita poistua palvelimelta ja liitty\xE4 uudelleen. Mik\xE4li ongelma ei korjaantunut, nyk\xE4ise yll\xE4pit\xE4j\xE4\xE4 hihasta." }),
                React.createElement(Accordion, { id: "yle4", question: "Kuinka p\xE4\xE4sen korkeammalle tasolle?", target: "ylecol4", answer: ['Pelaamalla. Rankeista löydät lisätietoa ', React.createElement(
                        "a",
                        { id: "link", href: "rankit" },
                        "t\xE4\xE4lt\xE4"
                    ), '.'] }),
                React.createElement(Accordion, { id: "yle5", question: "L\xF6ysin palvelimelta peli\xE4 rikkovan vian. Mit\xE4 teen?", target: "ylecol5", answer: ['Ota yhteyttä ylläpitäjään joko palvelimella', ' tai liity Karanteenin Discordiin ja valitse sieltä kanava "Bugit ja parannusehdotukset". Mikäli bugia voi hyväksikäyttää, pidä se omana tietonasi, äläkä kerro muille pelaajille.', React.createElement("br", null), React.createElement("br", null), 'Bugin hyväksikäyttö on ', React.createElement(
                        "b",
                        null,
                        "ankarasti kielletty\xE4"
                    ), '. Mikäli jäät siitä kiinni, saat siitä automaattisesti tuntuvan porttikiellon.', React.createElement("br", null), React.createElement("br", null), 'Hyväksikäytettävän / peliä rikkovan bugin ilmiantamisesta saa yleensä korvauksen.'] }),
                React.createElement(Accordion, { id: "yle6", question: "Voinko k\xE4ytt\xE4\xE4 kahta tili\xE4 palvelimella?", target: "ylecol6", answer: ['Voit, mutta tilit eivät saa hyötyä toisistaan. Tähän lukeutuu', ' mm. tavarapakkausten ja äänestysrahojen siirtäminen toiselle tilille. Pelitilit eivät saa olla yhtä aikaa palvelimella.'] }),
                React.createElement(Accordion, { id: "yle7", question: "Kuinka usein maailma nollataan?", target: "ylecol7", answer: ['Maailma nollataan yleensä noin puolen vuoden välein,', ' mutta ei tapahdu automaationa. Yleensä maailman nollaus myös tähdätään seuraavan Minecraftin suuren versiopäivityksen kohdille.', React.createElement("br", null), React.createElement("br", null), 'Nether ja End sitä vastoin nollataan kerran kuukaudessa, yleensä joka kuukauden alussa.'] }),
                React.createElement(Divider, { id: "suojaus", name: "Suojaus" }),
                React.createElement(Accordion, { id: "prot1", question: "Miten voin suojata alueeni?", target: "protcol1", answer: ['Ylläpitäjä suojaa alueen ja suojaukseen vaaditaan talon alku.', ' Mikäli aiot luoda kylän, voit päättää alueelle nimen. Warpin kylälle saa vasta, kun kylällä on 15 asukasta.', React.createElement("br", null), React.createElement("br", null), 'Netheriin ja Endiin ei pääsääntöisesti suojata alueita.'] }),
                React.createElement(Accordion, { id: "prot2", question: "Apua! Taloani on grieffattu!", target: "protcol2", answer: "Ei h\xE4t\xE4\xE4. P\xE4\xE4set Karanteenin Discordiin /discord komennolla, tai voit nyk\xE4ist\xE4 jo paikalla olevaa yll\xE4pit\xE4j\xE4\xE4 hihasta. Joka tapauksessa saat grieffatun talosi kuntoon, sek\xE4 tavarat takaisin. Grieffaaja sit\xE4 vastoin saa porttikiellon palvelimelle." }),
                React.createElement(Accordion, { id: "prot3", question: "Kuinka annan kaverilleni oikeudet alueeseen?", target: "protcol3", answer: ['Oikeudet alueeseen voit antaa komennolla ', React.createElement(
                        "code",
                        null,
                        "/trust suojauksen_nimi pelaajan_nimi"
                    ), ' seisten suojauksen sisällä. Suojauksen nimen saat selville komennolla /rg i, kun seisot sen päällä.'] }),
                React.createElement(Accordion, { id: "prot4", question: "Kuinka annan kaverilleni oikeudet chesteihin ja uuneihin?", target: "protcol4", answer: ['Voit antaa oikeudet kyseisiin blockeihin ', 'katsomalla blockia ja kirjoittamalla komennon ', React.createElement(
                        "code",
                        null,
                        "/+oikeudet pelaajan_nimi"
                    ), '. Tämän jälkeen kaverillasi on oikeudet avata kyseinen arkku.', ' Komento toimii myös muihin container blockeihin.'] }),
                React.createElement(Accordion, { id: "prot5", question: "L\xF6ysin suojaamattoman arkun. Voinko ottaa sielt\xE4 tavaraa?", target: "protcol5", answer: "Et. Vaikka l\xF6yt\xE4isit arkun tai kokonaan suojaamattoman arkun, et saa ottaa sielt\xE4 tavaroita tai rikkoa paikkaa. Grieffaaminen johtaa usein porttikieltoon." }),
                React.createElement(Divider, { id: "ekonomia", name: "Ekonomia" }),
                React.createElement(Accordion, { id: "eco1", question: "Kuinka voin luoda arkkukaupan?", target: "ecol1", answer: "Voit luoda arkkukaupan ly\xF6m\xE4ll\xE4 arkkua tavara k\xE4dess\xE4 ja Shift painettuna pohjaan. T\xE4m\xE4n j\xE4lkeen chat kysyy sinulta hinnan tavaralle. Kirjoita hinta ja n\xE4in arkkukauppasi on valmis." }),
                React.createElement(Accordion, { id: "eco2", question: "Mit\xE4 valuuttaa palvelin k\xE4ytt\xE4\xE4 ja kuinka saan sit\xE4?", target: "ecol2", answer: ['Palvelimella on rahavaluuttana pennit.', ' Pennejä saat kaivamalla raaka-aineita maan syvyyksistä ja muuttamalla ne blockeiksi. Voit myydä blockit sen jälkeen spawnin kaupassa (/warp kauppa).', ' Myytäviksi blockeiksi kelpaavat vain Coal, Quartz, Iron, Gold, Redstone, Lapis Lazuli, Emerald ja Diamond blockit.', React.createElement("br", null), React.createElement("br", null), 'Voit myös luoda arkkukaupan tai äänestää. Jokaisesta äänestyksestä saat 100 penniä, mutta varmista, että olet Survival maassa.'] }),
                React.createElement(Divider, { id: "kodit", name: "Kodit" }),
                React.createElement(Accordion, { id: "home1", question: "Hukkasin kotini. Kuinka saan sen takaisin?", target: "homecol1", answer: "Nyk\xE4ise yll\xE4pit\xE4j\xE4\xE4 hihasta ja kerro h\xE4nelle mit\xE4 teit viimeksi kotisi l\xE4hettyvilt\xE4 ja milt\xE4 se n\xE4ytti. N\xE4in saamme palautettua sinut oikeaan paikkaan" }),
                React.createElement(Accordion, { id: "home2", question: "En pysty teleporttaamaan, poistamaan tai asettamaan koteja. Internal error, wat do?", target: "homecol2", answer: "Sano l\xE4himm\xE4lle yll\xE4pit\xE4j\xE4lle asiasta. Todenn\xE4k\xF6isesti joku tai jotkin kodeistasi ovat korruptoituneet ja joudumme poistamaan ne manuaalisesti. Mik\xE4li yll\xE4pitoa ei ole paikalla, liity Karanteenin Discord palvelimelle ja kerro ongelmastasi Naxray:lle, Jomelle tai Nuublesille." }),
                React.createElement(Accordion, { id: "home3", question: "Saanko asettaa kodin Netheriin tai Endiin?", target: "homecol3", answer: "Saat, mutta emme suosittele. Nether ja End resetoidaan kuukauden v\xE4lein, mik\xE4 voi aiheuttaa kodin korruptoitumista ja sinun kuoleman. T\xE4m\xE4 tarkoittaa siis sit\xE4, ett\xE4 saatat kuolla jos k\xE4yt\xE4t kotia resetoinnin j\xE4lkeen. Yll\xE4pito ei ole velvollinen palauttamaan tavaroitasi." }),
                React.createElement(Divider, { id: "rangaistukset", name: "Rangaistukset" }),
                React.createElement(Accordion, { id: "pun1", question: "Montako rangaistusta voin saada?", target: "puncol1", answer: "Riippuu k\xE4ytt\xE4ytymisest\xE4si servulla. Toistaiseksi annamme korkeintaan kaksi porttikieltoa, joista j\xE4lkimm\xE4inen on aina ikuinen, jos ensimm\xE4inen on ollut yli viiden (5) p\xE4iv\xE4n mittainen." }),
                React.createElement(Accordion, { id: "pun2", question: "Mit\xE4 rankaisumenetelmi\xE4 teill\xE4 on olemassa?", target: "puncol2", answer: "Hiljennykset, varoitukset, sek\xE4 porttikiellot. Kolme varoitusta on aina viikon porttikielto." }),
                React.createElement(Accordion, { id: "pun3", question: "Sain rangaistuksen turhasta!", target: "puncol3", answer: "Liity Karanteenin Discordiin ja kerro asiasi #apua -kanavalla. Muista, ett\xE4 vaikka jokin ei olisi kielletty\xE4 s\xE4\xE4nn\xF6iss\xE4, siit\xE4 voidaan silti rangaista. Yll\xE4pit\xE4jien n\xE4kemykset voivat my\xF6s erota toisistaan, jonka vuoksi keskustele rangaistuksesta rangaistuksen antajan kanssa." }),
                React.createElement(Divider, { id: "modit", name: "Modit" }),
                React.createElement(Accordion, { id: "mod1", question: "Mitk\xE4 modit ovat sallittuja Karanteenissa?", target: "modcol1", answer: "P\xE4\xE4s\xE4\xE4nt\xF6isesti kaikki pelaajia hy\xF6dytt\xE4v\xE4t modit ovat kiellettyj\xE4, siin\xE4 miss\xE4 grafiikkamodit kuten OptiFine ovat sallittuja. Nyk\xE4ise yll\xE4pit\xE4j\xE4\xE4 hihasta mik\xE4li et ole varma." })
            );
        }
    }]);

    return FrequentlyAskedQuestions;
}(React.Component);

var Accordion = function (_React$Component2) {
    _inherits(Accordion, _React$Component2);

    function Accordion(props) {
        _classCallCheck(this, Accordion);

        var _this2 = _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call(this, props));

        _this2.state = {
            id: _this2.props.id,
            question: _this2.props.question,
            target: _this2.props.target,
            answer: _this2.props.answer
        };
        return _this2;
    }

    _createClass(Accordion, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "card bg-transparent" },
                React.createElement(
                    "div",
                    { "class": "card-header", id: this.props.id },
                    React.createElement(
                        "h2",
                        { "class": "mb-0" },
                        React.createElement(
                            "button",
                            { className: "btn btn-link", type: "button", "data-toggle": "collapse", "data-target": '#' + this.props.target, "aria-expanded": "true", "aria-controls": this.props.target },
                            this.props.question
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { id: this.props.target, className: "collapse", "aria-labelledby": this.props.id, "data-parent": "#faqAccordion" },
                    React.createElement(
                        "div",
                        { "class": "card-body" },
                        this.props.answer
                    )
                )
            );
        }
    }]);

    return Accordion;
}(React.Component);

var Divider = function (_React$Component3) {
    _inherits(Divider, _React$Component3);

    function Divider(props) {
        _classCallCheck(this, Divider);

        var _this3 = _possibleConstructorReturn(this, (Divider.__proto__ || Object.getPrototypeOf(Divider)).call(this, props));

        _this3.state = {
            name: _this3.props.name,
            id: _this3.props.id
        };
        return _this3;
    }

    _createClass(Divider, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h4",
                { id: this.props.id, className: "text-left mt-3" },
                this.props.name
            );
        }
    }]);

    return Divider;
}(React.Component);

ReactDOM.render(React.createElement(FrequentlyAskedQuestions, null), document.getElementById('faq'));
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonRules = function (_React$Component) {
    _inherits(CommonRules, _React$Component);

    function CommonRules() {
        _classCallCheck(this, CommonRules);

        return _possibleConstructorReturn(this, (CommonRules.__proto__ || Object.getPrototypeOf(CommonRules)).apply(this, arguments));
    }

    _createClass(CommonRules, [{
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "denied" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Hack-clientit ovat kiellettyj\xE4"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Huijausohjelmien (esim. Xray) k\xE4ytt\xE4minen on kielletty\xE4."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "denied" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Modit ovat kiellettyj\xE4"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Pelin etenemist\xE4 edist\xE4vien modien k\xE4ytt\xE4minen (esim. schematica) on kielletty\xE4."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "allowed" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Optifine"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Optifine, ja Optifinen kaltaiset suoritustehoa parantavat modit ovat sallittuja."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "denied" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Asiattoman skinin tai k\xE4ytt\xE4j\xE4nimen k\xE4ytt\xE4minen on kielletty\xE4"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Jos nimesi tai skinisi on rasistinen, alatyylinen, loukkaava, tai muuten asiaton, sinua pyydet\xE4\xE4n vaihtamaan se. Muuten k\xE4ytt\xE4j\xE4si bannitaan skinin tai nimen vaihdon ajaksi."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "denied" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Alt-accounttien hyv\xE4ksik\xE4ytt\xE4minen kielletty"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Et saa k\xE4ytt\xE4\xE4 alt-accountteja p\xE4\xE4k\xE4ytt\xE4j\xE4n edun hyv\xE4ksi (esimerkiksi rahan siirt\xE4mist\xE4, tai rankkien ominaisuuksien jakamista)."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "denied" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Afkaaminen kielletty"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Palvelimella afkaaminen on kielletty. Afkikoneiden rakentaminen t\xE4st\xE4 syyst\xE4 my\xF6s ankarasti kielletty. ",
                                React.createElement("br", null),
                                "Mobifarmeilla afkaaminen ker\xE4ten mobeja on my\xF6s kielletty\xE4. Kuitenkin automaattiset mobifarmit on sallittuja, kunhan entiteettej\xE4 ei ker\xE4\xE4nny liikaa aiheuttaakseen lagia."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "denied" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Palvelimen lagittaminen kielletty"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Palvelinta rasittavien ja lagittavien redstonerakennelmien teko on kielletty (esim. loputtomiin k\xE4yv\xE4t kellot, 0-tick farmit). Lis\xE4\xE4 rakennelmaan sulkemisvipu ja pid\xE4 laite suljettuna, jos se ei ole k\xE4yt\xF6ss\xE4."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "denied" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Ansaitun rankin hyv\xE4ksik\xE4ytt\xE4minen kielletty"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Sinua alempirankkiset pelaajat eiv\xE4t saa hy\xF6ty\xE4 rankkisi ominaisuuksista. Et saa esimerkiksi muuntaa spawnerin tyyppi\xE4 toisten puolesta, tai myyd\xE4 spawnereita, joihin pelaajalla ei ole viel\xE4 oikeutta."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "notice" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Olet velvoitettu ilmoittamaan rikkeest\xE4"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Jos havaitset s\xE4\xE4nt\xF6jen rikkomista, v\xE4lit\xE4 tieto v\xE4litt\xF6m\xE4sti yll\xE4pidolle. Pyri hankkimaan todisteita, kuten screenshotteja tai videoita."
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CommonRules;
}(React.Component);

var ChatRules = function (_React$Component2) {
    _inherits(ChatRules, _React$Component2);

    function ChatRules() {
        _classCallCheck(this, ChatRules);

        return _possibleConstructorReturn(this, (ChatRules.__proto__ || Object.getPrototypeOf(ChatRules)).apply(this, arguments));
    }

    _createClass(ChatRules, [{
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "important" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Pidet\xE4\xE4n keskustelut asiallisena"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Muista, ett\xE4 keskustelet oikeiden ihmisten kanssa. Pyrit\xE4\xE4n olemaan mahdollisimman yst\xE4v\xE4llisi\xE4 toisillemme."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "important" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Pidet\xE4\xE4n kieli kurissa"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Turha kiroilu ja toisten pelaajien h\xE4rn\xE4minen tai kiusaaminen ei ole asianmukaista. Ollaanhan ihmisiksi."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "important" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Pidet\xE4\xE4n chatti siistin\xE4"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Turha spammaaminen, floodaaminen, ja CAPSILLA KIRJOITTAMINEN on kielletty\xE4."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "denied" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Mainostaminen on kielletty\xE4"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "\xC4l\xE4 mainosta (varsinkaan toisia palvelimia). T\xE4m\xE4 ei kuitenkaan tarkoita sit\xE4 ettetk\xF6 saisi kertoa mink\xE4 merkkinen hiiri tai auto sinulla on, mutta siin\xE4 se raja sitten kulkeekin."
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ChatRules;
}(React.Component);

var AdditionalRules = function (_React$Component3) {
    _inherits(AdditionalRules, _React$Component3);

    function AdditionalRules() {
        _classCallCheck(this, AdditionalRules);

        return _possibleConstructorReturn(this, (AdditionalRules.__proto__ || Object.getPrototypeOf(AdditionalRules)).apply(this, arguments));
    }

    _createClass(AdditionalRules, [{
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "denied" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Grieffaaminen on kielletty"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Toisten pelaajien rakennelmien tuhoaminen ja omaisuuden varastaminen on kielletty."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "denied" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Pelaajien ved\xE4tt\xE4minen, sk\xE4mm\xE4\xE4minen on kielletty\xE4"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Et saa esimerkiksi huijata toiselta tavaraa."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "denied" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Maisemagrieffaaminen kielletty"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Maaston ja maiseman turmeleminen on kielletty\xE4. Puut on kasvastettava takaisin, hiekan hakkuu ei saa j\xE4tt\xE4\xE4 rumia j\xE4lki\xE4 ymp\xE4rist\xF6\xF6n, turhien ep\xE4esteettisten rakennelmien rakentaminen on kielletty (esim. 1x1 dirt tornit)."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "notice" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Villager kyl\xE4t ovat rauhoitettuja"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Villager kyli\xE4 ei saa grieffata. Kylist\xE4 ei saa vied\xE4 s\xE4nkyj\xE4 tai workstationeja. Kylien peltoja saa k\xE4ytt\xE4\xE4, kunhan ne muistaa t\xE4ytt\xE4\xE4 takaisin. Kylien hein\xE4paalut, sek\xE4 kellot saa ottaa itselleen. Kyl\xE4n voi ottaa kodikseen, jolloin kyli\xE4 koskevat s\xE4\xE4nn\xF6t eiv\xE4t en\xE4\xE4 p\xE4de."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "denied" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Pelaajien tappaminen ja pelaaja-ansojen rakentaminen kielletty"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Et saa aiheuttaa vahinkoa toisiin pelaajiin. Rakennelmat, jotka voivat tappaa pelaajan, ovat ankarasti kiellettyj\xE4."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "notice" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Karanteeni on poliittisesti neutraali palvelin"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "T\xE4m\xE4 tarkoittaa sit\xE4, ett\xE4 chatissa ja palvelimella pyrit\xE4\xE4n v\xE4ltt\xE4m\xE4\xE4n poliittisia aatteita, symboleita tai ideologioita. My\xF6s yleist\xE4 keskustelua politiikasta pyrit\xE4\xE4n v\xE4ltt\xE4m\xE4\xE4n, koska se yleens\xE4 aiheuttaa v\xE4ittelyit\xE4 ja eripuraa."
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AdditionalRules;
}(React.Component);

var PlayerTownRules = function (_React$Component4) {
    _inherits(PlayerTownRules, _React$Component4);

    function PlayerTownRules() {
        _classCallCheck(this, PlayerTownRules);

        return _possibleConstructorReturn(this, (PlayerTownRules.__proto__ || Object.getPrototypeOf(PlayerTownRules)).apply(this, arguments));
    }

    _createClass(PlayerTownRules, [{
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "notice" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Kyl\xE4n mainostaminen julkisesti"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Kylien mainostus on sallittua, mutta jos pelaajat antavat siit\xE4 palautetta, t\xE4ytyy siin\xE4 hommassa rauhoittua. Pyynn\xF6n ohittamisesta seuraa varoitus. Pyynt\xF6\xE4 ei kuitenkaan saa tehd\xE4 syytt\xE4, kaikilla on oltava mahdollisuus saada pelaajia kyl\xE4\xE4ns\xE4."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "denied" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Kyl\xE4n mainostaminen yksityisesti"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Kylien mainostus yksityisviestill\xE4 on kielletty\xE4. T\xE4ll\xE4 v\xE4lt\xE4mme sen, ett\xE4 joku kokee mainostuksen hy\xF6kk\xE4\xE4v\xE4n\xE4. Kyli\xE4 saa mainostaa julkisesti pit\xE4en sen rajoissa. (Kts. yll\xE4)"
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "denied" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Copy & Paste viestit ovat kiellettyj\xE4"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Copy Paste eli niin sanottu massapostaus on kielletty\xE4. Kukaan ei jaksa n\xE4hd\xE4 joka viides minuutti t\xE4ysin samaa viesti\xE4 kyl\xE4st\xE4si ja siit\xE4 mit\xE4 palveluita siell\xE4 on. Kokeile sen sijaan mainostaa kyl\xE4\xE4si yst\xE4v\xE4llisesti ja henkil\xF6kohtaisesti. Jos joku tarvitsee xp-farmia ja kyl\xE4ss\xE4si on sellainen, mainitse se ihmeess\xE4."
                            )
                        )
                    )
                ),
                React.createElement(
                    RuleContainer,
                    null,
                    React.createElement(
                        Rule,
                        null,
                        React.createElement(Icon, { icon: "important" }),
                        React.createElement(
                            Content,
                            null,
                            React.createElement(
                                Heading,
                                null,
                                "Mainosta kyl\xE4\xE4si spawnilla!"
                            ),
                            React.createElement(
                                Description,
                                null,
                                "Jomelle voi yksityisviestill\xE4 laittaa 256x128 resoluutioisen kuvan, jossa mainostat omaa kyl\xE4\xE4si. Se laitetaan spawnille. Kyl\xE4ll\xE4 ",
                                React.createElement(
                                    "u",
                                    null,
                                    "on oltava warp"
                                ),
                                ", jotta mainoksesi laitetaan n\xE4kyviin!"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PlayerTownRules;
}(React.Component);

var RuleContainer = function RuleContainer(props) {
    return React.createElement(
        "div",
        { className: "rule-container" },
        props.children
    );
};

var Rule = function Rule(props) {
    return React.createElement(
        "div",
        { className: "rule" },
        props.children
    );
};

var Heading = function Heading(props) {
    return React.createElement(
        "div",
        { className: "rule-head" },
        React.createElement(
            "h3",
            { className: "rule-heading" },
            props.children
        )
    );
};

var Content = function Content(props) {
    return React.createElement(
        "div",
        { className: "rule-content" },
        props.children
    );
};

var Description = function Description(props) {
    return React.createElement(
        "div",
        { className: "rule-specify" },
        React.createElement(
            "div",
            { className: "rule-spefier" },
            props.children
        )
    );
};

var Icon = function Icon(props) {
    if (props.icon == "denied") {
        return React.createElement(
            "div",
            { className: "rule-icon-parent" },
            React.createElement(
                "div",
                { className: "rule-icon denied" },
                React.createElement("i", { className: "fas fa-times" })
            )
        );
    } else if (props.icon == "notice") {
        return React.createElement(
            "div",
            { className: "rule-icon-parent" },
            React.createElement(
                "div",
                { className: "rule-icon notice" },
                React.createElement("i", { className: "fas fa-exclamation" })
            )
        );
    } else if (props.icon == "allowed") {
        return React.createElement(
            "div",
            { className: "rule-icon-parent" },
            React.createElement(
                "div",
                { className: "rule-icon accepted" },
                React.createElement("i", { className: "fas fa-check" })
            )
        );
    } else if (props.icon == "important") {
        return React.createElement(
            "div",
            { className: "rule-icon-parent" },
            React.createElement(
                "div",
                { className: "rule-icon keep-in-mind" },
                React.createElement("i", { className: "fas fa-exclamation" })
            )
        );
    } else {
        return React.createElement(
            "p",
            null,
            "Icon type was not specified."
        );
    }
};

ReactDOM.render(React.createElement(CommonRules, null), document.getElementById('common'));
ReactDOM.render(React.createElement(ChatRules, null), document.getElementById('behavior'));
ReactDOM.render(React.createElement(AdditionalRules, null), document.getElementById('addon'));
ReactDOM.render(React.createElement(PlayerTownRules, null), document.getElementById('playertown'));
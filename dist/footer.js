'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            var year = new Date().getFullYear();
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-lg-3 col-xs-12 footerLogo" },
                        React.createElement(
                            "a",
                            { className: "footer-link", href: "https://karanteeni.net", target: "_blank", rel: "noopener noreferrer" },
                            React.createElement("img", { src: "./assets/images/footerlogo.png", alt: "Footerlogo", width: "255", height: "68" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-lg-5 col-xs-12" },
                        React.createElement(
                            "h4",
                            { className: "mt-lg-0 mt-sm-3" },
                            "Yhteis\xF6"
                        ),
                        React.createElement(
                            "ul",
                            { className: "m-0 p-0 links" },
                            React.createElement(
                                "li",
                                null,
                                "- ",
                                React.createElement(
                                    "a",
                                    { href: "https://discord.gg/fZqqysM", target: "_blank" },
                                    "Discord"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                "- ",
                                React.createElement(
                                    "a",
                                    { href: "https://twitter.com/Karanteeni", target: "_blank" },
                                    "Twitter"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                "- ",
                                React.createElement(
                                    "a",
                                    { href: "https://www.youtube.com/c/Karanteeni", target: "_blank" },
                                    "YouTube"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-lg-4 col-xs-12" },
                        React.createElement(
                            "h4",
                            { className: "mt-lg-0 mt-sm-3" },
                            "Pikalinkit"
                        ),
                        React.createElement(
                            "ul",
                            { className: "m-0 p-0 links" },
                            React.createElement(
                                "li",
                                null,
                                "- ",
                                React.createElement(
                                    "a",
                                    { href: "/ukk", rel: "noopener noreferrer" },
                                    "Usein kysytyt kysymykset"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                "- ",
                                React.createElement(
                                    "a",
                                    { href: "/hoks", rel: "noopener noreferrer" },
                                    "Hyv\xE4 tiet\xE4\xE4"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                "- ",
                                React.createElement(
                                    "a",
                                    { href: "/yllapito", rel: "noopener noreferrer" },
                                    "Yll\xE4pito"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                "- ",
                                React.createElement(
                                    "a",
                                    { href: "https://bugs.karanteeni.net", target: "_blank", rel: "noopener noreferrer" },
                                    "Ongelmanhallinta"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                "- ",
                                React.createElement(
                                    "a",
                                    { href: "/unban", target: "_blank", rel: "noopener noreferrer" },
                                    "Unban-hakemus"
                                )
                            )
                        ),
                        React.createElement("div", { id: "switcher", className: "mt-2" })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row mt-5" },
                    React.createElement(
                        "div",
                        { className: "col copyright" },
                        React.createElement(
                            "p",
                            { className: "" },
                            React.createElement(
                                "small",
                                { className: "text-white-50" },
                                "\xA9 Karanteeni ",
                                year
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col copyright" },
                        React.createElement(
                            "p",
                            { className: "" },
                            React.createElement(
                                "small",
                                { className: "text-white-50" },
                                "Taustakuvista kiitos juhkulariteetti:lle! \u2665"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

ReactDOM.render(React.createElement(Footer, null), document.getElementById('footer'));
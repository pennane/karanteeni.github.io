'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

{/* Let's see if this can be fixable somehow */}

var Icon = function Icon(props) {
    return React.createElement("i", { className: props.icon });
};

var Tooltip = function (_React$Component) {
    _inherits(Tooltip, _React$Component);

    function Tooltip(props) {
        _classCallCheck(this, Tooltip);

        var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

        _this.state = {
            text: _this.props.text
        };
        return _this;
    }

    _createClass(Tooltip, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "span",
                { "data-toggle": "tooltip", "data-placement": "top", title: this.props.text },
                this.props.children
            );
        }
    }]);

    return Tooltip;
}(React.Component);

var NavLink = function (_React$Component2) {
    _inherits(NavLink, _React$Component2);

    function NavLink(props) {
        _classCallCheck(this, NavLink);

        var _this2 = _possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).call(this, props));

        _this2.state = {
            title: _this2.props.title,
            icon: _this2.props.icon,
            url: _this2.props.url
        };
        return _this2;
    }

    _createClass(NavLink, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                { className: "nav-item" },
                React.createElement(
                    "a",
                    { href: this.props.url, className: "nav-link" },
                    React.createElement(Icon, { icon: this.state.icon }),
                    "\xA0\xA0",
                    this.state.title
                )
            );
        }
    }]);

    return NavLink;
}(React.Component);

var DropDownCollapseMenu = function (_React$Component3) {
    _inherits(DropDownCollapseMenu, _React$Component3);

    function DropDownCollapseMenu(props) {
        _classCallCheck(this, DropDownCollapseMenu);

        var _this3 = _possibleConstructorReturn(this, (DropDownCollapseMenu.__proto__ || Object.getPrototypeOf(DropDownCollapseMenu)).call(this, props));

        _this3.state = {
            title: _this3.props.title,
            target: _this3.props.dataTarget,
            labelClassName: _this3.props.labelClassName
        };
        return _this3;
    }

    _createClass(DropDownCollapseMenu, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                { className: "nav-item dropdown" },
                React.createElement(
                    "a",
                    { className: "nav-link dropdown-toggle", href: "#", id: "navbarDropdown", role: "button", "data-target": this.state.dataTarget, "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                    React.createElement("i", { className: this.state.labelClassName }),
                    "\xA0\xA0",
                    this.state.title
                ),
                React.createElement(
                    "div",
                    { className: "dropdown-menu collapse", "aria-labelledby": "navbarDropdown" },
                    React.createElement(
                        "h6",
                        { className: "dropdown-header" },
                        this.state.title
                    ),
                    this.props.children
                )
            );
        }
    }]);

    return DropDownCollapseMenu;
}(React.Component);

var DropDownItem = function (_React$Component4) {
    _inherits(DropDownItem, _React$Component4);

    function DropDownItem(props) {
        _classCallCheck(this, DropDownItem);

        var _this4 = _possibleConstructorReturn(this, (DropDownItem.__proto__ || Object.getPrototypeOf(DropDownItem)).call(this, props));

        _this4.state = {
            title: _this4.props.title,
            icon: _this4.props.icon,
            url: _this4.props.url
        };
        return _this4;
    }

    _createClass(DropDownItem, [{
        key: "render",
        value: function render() {
            var disabled = this.props.disabled;
            if (disabled) {
                return React.createElement(
                    "a",
                    { className: "dropdown-item disabled", href: this.state.url },
                    React.createElement(Icon, { icon: this.state.icon }),
                    "\xA0\xA0",
                    this.state.title
                );
            } else {
                return React.createElement(
                    "a",
                    { className: "dropdown-item", href: this.state.url },
                    React.createElement(Icon, { icon: this.state.icon }),
                    "\xA0\xA0",
                    this.state.title
                );
            }
        }
    }]);

    return DropDownItem;
}(React.Component);

var Nav = function Nav(props) {
    return React.createElement(
        "nav",
        { className: "navbar navbar-expand-lg navbar-dark karanav" },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "button",
                { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarResponsive",
                    "aria-expanded": "false", "aria-label": "Toggle navigation" },
                React.createElement(
                    "div",
                    { className: "navbar-toggler-icon burger burger-rotate" },
                    React.createElement("div", { className: "burger-lines" })
                )
            ),
            React.createElement(
                "div",
                { className: "collapse navbar-collapse", id: "navbarResponsive" },
                React.createElement(
                    "ul",
                    { className: "nav navbar-nav nav-fill", style: { flexGrow: 1, textAlign: 'center' } },
                    props.children
                )
            )
        )
    );
};

var Navbar = function (_React$Component5) {
    _inherits(Navbar, _React$Component5);

    function Navbar() {
        _classCallCheck(this, Navbar);

        return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
    }

    _createClass(Navbar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                Nav,
                null,
                React.createElement(NavLink, { icon: "fas fa-home", url: "/", title: "Etusivu" }),
                React.createElement(
                    DropDownCollapseMenu,
                    { title: "Yleistietoa", dataTarget: "#rc", labelClassName: "fas fa-info" },
                    React.createElement(DropDownItem, { icon: "fas fa-thumbs-up", url: "hoks", title: "Hyv\xE4 tiet\xE4\xE4!" }),
                    React.createElement(DropDownItem, { icon: "fas fa-puzzle-piece", url: "ominaisuudet", title: "Ominaisuudet" }),
                    React.createElement(DropDownItem, { icon: "fas fa-hammer", url: "recipes", title: "Custom reseptit" }),
                    React.createElement(DropDownItem, { icon: "fas fa-question-circle", url: "ukk", title: "UKK" })
                ),
                React.createElement(NavLink, { icon: "fas fa-exclamation", url: "saannot", title: "S\xE4\xE4nn\xF6t" }),
                React.createElement(NavLink, { icon: "fas fa-medal", url: "rankit", title: "Rankit" }),
                React.createElement(
                    DropDownCollapseMenu,
                    { title: "Yll\xE4pito", labelClassName: "fas fa-users" },
                    React.createElement(DropDownItem, { icon: "fas fa-users", url: "yllapito", title: "Yll\xE4pito" }),
                    React.createElement(DropDownItem, { icon: "fas fa-file-alt", url: "yphaku", title: "Hae yll\xE4pitoon!" })
                ),
                React.createElement(NavLink, { icon: "fas fa-gift", url: "lahjoitus", title: "Lahjoitukset" }),
                React.createElement(
                    DropDownCollapseMenu,
                    { title: "Hakemukset", labelClassName: "fas fa-scroll" },
                    React.createElement(DropDownItem, { icon: "fas fa-file-alt", url: "yphaku", title: "Hae yll\xE4pitoon!" }),
                    React.createElement(DropDownItem, { icon: "fas fa-file-alt", url: "unban", title: "Unban-hakemus" })
                )
            );
        }
    }]);

    return Navbar;
}(React.Component);

ReactDOM.render(React.createElement(Navbar, null), document.getElementById('nav'));
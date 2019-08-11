'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

var ScrollToTopButton = function (_React$Component) {
    _inherits(ScrollToTopButton, _React$Component);

    function ScrollToTopButton(props) {
        _classCallCheck(this, ScrollToTopButton);

        var _this = _possibleConstructorReturn(this, (ScrollToTopButton.__proto__ || Object.getPrototypeOf(ScrollToTopButton)).call(this, props));

        _this.onclick = _this.onclick.bind(_this);
        return _this;
    }

    _createClass(ScrollToTopButton, [{
        key: "onclick",
        value: function onclick() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                { "class": "btn btn-outline-light kara-btn", onClick: this.onclick, id: "toTop", title: "Takaisin yl\xF6s" },
                React.createElement("i", { "class": "fas fa-arrow-up" })
            );
        }
    }]);

    return ScrollToTopButton;
}(React.Component);

var node = document.querySelector('#top');
ReactDOM.render(React.createElement(ScrollToTopButton, null), node);
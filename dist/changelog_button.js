'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChangeLogButton = function (_React$Component) {
    _inherits(ChangeLogButton, _React$Component);

    function ChangeLogButton() {
        _classCallCheck(this, ChangeLogButton);

        return _possibleConstructorReturn(this, (ChangeLogButton.__proto__ || Object.getPrototypeOf(ChangeLogButton)).apply(this, arguments));
    }

    _createClass(ChangeLogButton, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "a",
                { href: "muutokset", className: "btn btn-outline-light kara-btn", role: "button" },
                "Muutosloki ",
                React.createElement("i", { className: "fas fa-arrow-right" })
            );
        }
    }]);

    return ChangeLogButton;
}(React.Component);

var div = document.querySelector('#changelog_button');
ReactDOM.render(React.createElement(ChangeLogButton, null), div);
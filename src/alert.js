'use-strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var icons = [{
    name: 'exclamation-triangle'
}, {
    name: 'exclamation-circle'
}, {
    name: 'info-circle'
}];

var Alert = function (_React$Component) {
    _inherits(Alert, _React$Component);

    function Alert(props) {
        _classCallCheck(this, Alert);

        var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

        _this.state = {
            type: _this.props.type,
            text: _this.props.text,
            icon: _this.props.icon
        };
        return _this;
    }

    _createClass(Alert, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { 'class': 'row' },
                React.createElement(
                    'div',
                    { 'class': 'col-lg-12' },
                    React.createElement(
                        'div',
                        { 'class': "alert alert-" + this.props.type, role: 'alert' },
                        React.createElement(
                            'div',
                            { 'class': 'row vertical-align' },
                            React.createElement(
                                'div',
                                { 'class': 'col-xs-1 text-center m-auto' },
                                React.createElement('i', { 'class': "fas fa-" + this.props.icon + " fa-2x" })
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-xs-11' },
                                this.props.text
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Alert;
}(React.Component);

var AlertBody = function (_React$Component2) {
    _inherits(AlertBody, _React$Component2);

    function AlertBody() {
        _classCallCheck(this, AlertBody);

        return _possibleConstructorReturn(this, (AlertBody.__proto__ || Object.getPrototypeOf(AlertBody)).apply(this, arguments));
    }

    _createClass(AlertBody, [{
        key: 'render',
        value: function render() {
            return React.createElement(Alert, { type: 'warning', icon: icons[0].name, text: [React.createElement(
                    'b',
                    null,
                    'HUOM!'
                ), " Tämä sivusto on epävirallisesti ", React.createElement(
                    'a',
                    { href: 'https://karanteeni.net', 'class': 'alert-link' },
                    'Karanteenin'
                ), " kehityssivusto, eikä mitään sen osia välttämättä nähdä lopullisessa versiossa.", React.createElement('br', null), "Myöskään tällä sivulla olevaa informaatiota ei oteta huomioon lopullisessa versiossa millään perusteella, eikä sitä voida käyttää perusteena lopullisen version toiminnassa."] });
        }
    }]);

    return AlertBody;
}(React.Component);

var div = document.querySelector('#alert');
ReactDOM.render(React.createElement(AlertBody, null), div);
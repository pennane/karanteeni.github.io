'use-strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Donators = function (_React$Component) {
    _inherits(Donators, _React$Component);

    function Donators(props) {
        _classCallCheck(this, Donators);

        var _this = _possibleConstructorReturn(this, (Donators.__proto__ || Object.getPrototypeOf(Donators)).call(this, props));

        _this.state = {
            data: []
        };
        return _this;
    }

    _createClass(Donators, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var request = new Request('https://karanteeni.net/modules/Donators/donators.json');

            fetch(request).then(function (response) {
                return response.json().then(function (result) {
                    _this2.setState({
                        data: result.lahjoittajat
                    });
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var array = this.state.data;

            return React.createElement(
                React.Fragment,
                null,
                array.map(function (item, key) {
                    return React.createElement(
                        Row,
                        null,
                        React.createElement(HeaderCell, { key: key, date: item.pvm }),
                        React.createElement(DataCell, { key: key, name: item.nimi, amount: item.amount, heart: item.heart })
                    );
                })
            );
        }
    }]);

    return Donators;
}(React.Component);

var Row = function Row(props) {
    return React.createElement(
        'tr',
        null,
        props.children
    );
};

var HeaderCell = function HeaderCell(props) {
    return React.createElement(
        'th',
        null,
        props.date
    );
};

var DataCell = function DataCell(props) {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'td',
            null,
            props.name
        ),
        React.createElement(
            'td',
            null,
            props.amount
        ),
        React.createElement(
            'td',
            null,
            props.heart
        )
    );
};

ReactDOM.render(React.createElement(Donators, null), document.getElementById('lahjoittajat'));
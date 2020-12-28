'use-strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var request = new Request('https://api.mcsrvstat.us/2/95.217.120.173');

var ServerStatus = function (_React$Component) {
    _inherits(ServerStatus, _React$Component);

    function ServerStatus(props) {
        _classCallCheck(this, ServerStatus);

        var _this = _possibleConstructorReturn(this, (ServerStatus.__proto__ || Object.getPrototypeOf(ServerStatus)).call(this, props));

        _this.state = {
            isLoading: true,
            data: [],
            error: false
        };
        return _this;
    }

    _createClass(ServerStatus, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            fetch(request).then(function (result) {
                return result.json();
            }).then(function (result) {
                _this2.setState({
                    data: _this2.state.data.concat(result),
                    isLoading: false
                });
            }).catch(function (error) {
                console.error(error);
                _this2.setState({ error: true });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var debug = this.state.data;
            var isLoading = this.state.isLoading;
            var error = this.state.error;

            if (isLoading == false) {
                return React.createElement(
                    'div',
                    { className: 'card card-body content bg-transparent' },
                    React.createElement(
                        'h5',
                        { className: 'card-title' },
                        React.createElement('i', { className: 'fas fa-server card-title-icon' }),
                        'Palvelin'
                    ),
                    React.createElement(
                        'div',
                        { id: 'content' },
                        debug.map(function (index, key) {
                            if (index.online == false) {
                                return React.createElement(
                                    'p',
                                    null,
                                    'Palvelin on pois p\xE4\xE4lt\xE4.'
                                );
                            }
                            return [React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'span',
                                    { key: key, className: 'online' },
                                    'P\xE4\xE4ll\xE4'
                                )
                            ), React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'span',
                                    { key: key },
                                    'Versio: ',
                                    index.version
                                )
                            ), React.createElement(
                                'p',
                                { className: 'server-ip' },
                                React.createElement(
                                    'span',
                                    { key: key },
                                    'mc.karanteeni.net ',
                                    React.createElement('br', null),
                                    React.createElement(
                                        'span',
                                        { id: 'numip' },
                                        index.ip
                                    )
                                )
                            ), React.createElement(
                                'div',
                                { 'class': 'copyButtonParent' },
                                React.createElement(
                                    'button',
                                    { className: 'copyPaste btn btn-outline-light kara-btn btn-tooltip show', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Paina t\xE4st\xE4 kopioidaksesi IP-osoite.', 'data-clipboard-target': '#numip' },
                                    React.createElement('i', { className: 'fas fa-copy' })
                                )
                            ), React.createElement('br', null), React.createElement('br', null), React.createElement(
                                'p',
                                null,
                                'Pelaajia paikalla: ',
                                index.players.online
                            )];
                        })
                    )
                );
            } else if (error == true) {
                React.createElement(
                    'div',
                    { className: 'card card-body content bg-transparent' },
                    React.createElement(
                        'h5',
                        { className: 'card-title' },
                        React.createElement('i', { className: 'fas fa-server card-title-icon' }),
                        'Palvelin'
                    ),
                    React.createElement(
                        'div',
                        { id: 'content' },
                        React.createElement(
                            'p',
                            null,
                            'Palvelimen kysely on rikki.'
                        )
                    )
                );
            }
            return React.createElement(
                'div',
                { className: 'card card-body content bg-transparent text-white' },
                React.createElement(
                    'h5',
                    { className: 'card-title' },
                    React.createElement('i', { className: 'fas fa-server card-title-icon' }),
                    'Palvelin'
                ),
                React.createElement(
                    'div',
                    { id: 'content centerLoader' },
                    React.createElement(
                        'div',
                        { className: 'spinner-border', role: 'status' },
                        React.createElement(
                            'span',
                            { className: 'sr-only' },
                            'Loading...'
                        )
                    )
                )
            );
        }
    }]);

    return ServerStatus;
}(React.Component);

ReactDOM.render(React.createElement(ServerStatus, null), document.getElementById("server"));
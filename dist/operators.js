'use-strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Owners = function (_React$Component) {
    _inherits(Owners, _React$Component);

    function Owners(props) {
        _classCallCheck(this, Owners);

        var _this = _possibleConstructorReturn(this, (Owners.__proto__ || Object.getPrototypeOf(Owners)).call(this, props));

        _this.state = {
            data: [],
            debug: {}
        };
        return _this;
    }

    _createClass(Owners, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var request = new Request('https://karanteeni.net/modules/Operators/operators.json');

            fetch(request).then(function (response) {
                return response.json();
            }).then(function (result) {
                _this2.setState({
                    data: result.omistajat,
                    debug: result
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var debug = this.state.debug;
            var array = this.state.data;
            var rank = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.keys(debug)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    key = _step.value;

                    console.log(key);
                    rank.push(key);
                    console.log(rank);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return React.createElement(
                YpWrapper,
                null,
                array.map(function (item, key) {
                    return React.createElement(
                        YpCard,
                        { key: key, rank: rank[0], uuid: item.uuid, name: item.nimi, desc: item.kuvaus },
                        array[key].vahvuudet.map(function (str, index) {
                            return React.createElement(
                                Strength,
                                { key: index },
                                str
                            );
                        })
                    );
                })
            );
        }
    }]);

    return Owners;
}(React.Component);

var Admins = function (_React$Component2) {
    _inherits(Admins, _React$Component2);

    function Admins(props) {
        _classCallCheck(this, Admins);

        var _this3 = _possibleConstructorReturn(this, (Admins.__proto__ || Object.getPrototypeOf(Admins)).call(this, props));

        _this3.state = {
            data: [],
            debug: {}
        };
        return _this3;
    }

    _createClass(Admins, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            var request = new Request('https://karanteeni.net/modules/Operators/operators.json');

            fetch(request).then(function (response) {
                return response.json();
            }).then(function (result) {
                _this4.setState({
                    data: result.adminit,
                    debug: result
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var debug = this.state.debug;
            var array = this.state.data;
            var rank = [];

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = Object.keys(debug)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    key = _step2.value;

                    rank.push(key);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return React.createElement(
                YpWrapper,
                null,
                array.map(function (item, key) {
                    return React.createElement(
                        YpCard,
                        { key: key, rank: rank[1], uuid: item.uuid, name: item.nimi, desc: item.kuvaus },
                        array[key].vahvuudet.map(function (str, index) {
                            return React.createElement(
                                Strength,
                                { key: index },
                                str
                            );
                        })
                    );
                })
            );
        }
    }]);

    return Admins;
}(React.Component);

var Operators = function (_React$Component3) {
    _inherits(Operators, _React$Component3);

    function Operators(props) {
        _classCallCheck(this, Operators);

        var _this5 = _possibleConstructorReturn(this, (Operators.__proto__ || Object.getPrototypeOf(Operators)).call(this, props));

        _this5.state = {
            data: [],
            debug: {}
        };
        return _this5;
    }

    _createClass(Operators, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this6 = this;

            var request = new Request('https://karanteeni.net/modules/Operators/operators.json');

            fetch(request).then(function (response) {
                return response.json();
            }).then(function (result) {
                _this6.setState({
                    data: result.operaattorit,
                    debug: result
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var debug = this.state.debug;
            var array = this.state.data;
            var rank = [];

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Object.keys(debug)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    key = _step3.value;

                    rank.push(key);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return React.createElement(
                YpWrapper,
                null,
                array.map(function (item, key) {
                    return React.createElement(
                        YpCard,
                        { key: key, rank: rank[2], uuid: item.uuid, name: item.nimi, desc: item.kuvaus },
                        array[key].vahvuudet.map(function (str, index) {
                            return React.createElement(
                                Strength,
                                { key: index },
                                str
                            );
                        })
                    );
                })
            );
        }
    }]);

    return Operators;
}(React.Component);

var Moderators = function (_React$Component4) {
    _inherits(Moderators, _React$Component4);

    function Moderators(props) {
        _classCallCheck(this, Moderators);

        var _this7 = _possibleConstructorReturn(this, (Moderators.__proto__ || Object.getPrototypeOf(Moderators)).call(this, props));

        _this7.state = {
            data: [],
            debug: {}
        };
        return _this7;
    }

    _createClass(Moderators, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this8 = this;

            var request = new Request('https://karanteeni.net/modules/Operators/operators.json');

            fetch(request).then(function (response) {
                return response.json();
            }).then(function (result) {
                _this8.setState({
                    data: result.moderaattorit,
                    debug: result
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var debug = this.state.debug;
            var array = this.state.data;
            var rank = [];

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = Object.keys(debug)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    key = _step4.value;

                    rank.push(key);
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            return React.createElement(
                YpWrapper,
                null,
                array.map(function (item, key) {
                    return React.createElement(
                        YpCard,
                        { key: key, rank: rank[3], uuid: item.uuid, name: item.nimi, desc: item.kuvaus },
                        array[key].vahvuudet.map(function (str, index) {
                            return React.createElement(
                                Strength,
                                { key: index },
                                str
                            );
                        })
                    );
                })
            );
        }
    }]);

    return Moderators;
}(React.Component);

var Builders = function (_React$Component5) {
    _inherits(Builders, _React$Component5);

    function Builders(props) {
        _classCallCheck(this, Builders);

        var _this9 = _possibleConstructorReturn(this, (Builders.__proto__ || Object.getPrototypeOf(Builders)).call(this, props));

        _this9.state = {
            data: [],
            debug: {}
        };
        return _this9;
    }

    _createClass(Builders, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this10 = this;

            var request = new Request('https://karanteeni.net/modules/Operators/operators.json');

            fetch(request).then(function (response) {
                return response.json();
            }).then(function (result) {
                _this10.setState({
                    data: result.rakentajat,
                    debug: result
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var debug = this.state.debug;
            var array = this.state.data;
            var rank = [];

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = Object.keys(debug)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    key = _step5.value;

                    console.log(key);
                    rank.push(key);
                    console.log(rank);
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            return React.createElement(
                YpWrapper,
                null,
                array.map(function (item, key) {
                    return React.createElement(
                        YpCard,
                        { key: key, rank: rank[4], uuid: item.uuid, name: item.nimi, desc: item.kuvaus },
                        array[key].vahvuudet.map(function (str, index) {
                            return React.createElement(
                                Strength,
                                { key: index },
                                str
                            );
                        })
                    );
                })
            );
        }
    }]);

    return Builders;
}(React.Component);

var YpWrapper = function YpWrapper(props) {
    return React.createElement(
        'div',
        { className: 'yp-wrapper' },
        props.children
    );
};

var YpCard = function YpCard(props) {
    return React.createElement(
        'div',
        { className: 'admin-card-container ' + props.rank },
        React.createElement(
            'div',
            { className: 'admin-card ' + props.rank },
            React.createElement(
                'div',
                { className: 'background ' + props.rank },
                React.createElement(
                    'div',
                    { className: 'avatar ' + props.rank },
                    React.createElement('img', { src: 'https://visage.surgeplay.com/full/' + props.uuid })
                )
            ),
            React.createElement(
                'div',
                { className: 'admin-content ' + props.rank },
                React.createElement(
                    'div',
                    { className: 'admin-type ' + props.rank },
                    props.rank
                ),
                React.createElement(
                    'div',
                    { className: 'admin-name ' + props.rank },
                    props.name
                ),
                React.createElement(
                    'div',
                    { className: 'admin-strength ' + props.rank },
                    props.children
                )
            ),
            React.createElement(
                'div',
                { className: 'admin-footer' },
                React.createElement(
                    'p',
                    null,
                    props.desc
                )
            )
        )
    );
};

var Strength = function Strength(props) {
    return React.createElement(
        'p',
        null,
        React.createElement('i', { className: 'far fa-arrow-alt-circle-right admin-strength-bullet' }),
        props.children
    );
};

ReactDOM.render(React.createElement(Owners, null), document.getElementById("owners"));
ReactDOM.render(React.createElement(Admins, null), document.getElementById("admins"));
ReactDOM.render(React.createElement(Operators, null), document.getElementById("operators"));
ReactDOM.render(React.createElement(Moderators, null), document.getElementById("mods"));
ReactDOM.render(React.createElement(Builders, null), document.getElementById("builders"));
'use-strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThemeSwitcher = function ThemeSwitcher() {

    var themes = {
        'winter': {
            id: 'winter',
            name: 'Winter',
            href: 'vendor/css/style_winter.min.css',
            image: './assets/images/16833.jpg',
            desc: 'Talven ulkoasu'
        },
        'nether': {
            id: 'nether',
            name: 'Nether',
            href: 'vendor/css/style_minecraft.min.css',
            image: './assets/images/hell.jpg',
            desc: 'Alankomainen ulkoasu'
        },
        'flat-light': {
            id: 'flat-light',
            name: 'Flat Light',
            href: 'vendor/css/flat_light.min.css',
            image: './assets/images/flat-light.png',
            desc: 'Yksinkertainen vaalea teema'
        },
        'flat-dark': {
            id: 'flat-dark',
            name: 'Flat Dark',
            href: 'vendor/css/flat_dark.min.css',
            image: './assets/images/flat-dark.png',
            desc: 'Yksinkertainen tumma teema'
        },
        'modern-flat-light': {
            id: 'modern-flat-light',
            name: 'Susse Flat',
            href: 'vendor/css/modern_flat_light.css',
            image: './assets/images/sussetheme.jpg',
            desc: 'Sussen visio maailmasta'
        }
    };

    var ThemeItem = function (_React$Component) {
        _inherits(ThemeItem, _React$Component);

        function ThemeItem(props) {
            _classCallCheck(this, ThemeItem);

            var _this = _possibleConstructorReturn(this, (ThemeItem.__proto__ || Object.getPrototypeOf(ThemeItem)).call(this, props));

            _this.state = {
                id: _this.props.id,
                name: _this.props.name,
                href: _this.props.href,
                desc: _this.props.desc,
                image: _this.props.image
            };
            return _this;
        }

        _createClass(ThemeItem, [{
            key: 'handleClick',
            value: function handleClick() {
                switchTheme(this.state.id);
            }
        }, {
            key: 'render',
            value: function render() {
                var _this2 = this;

                return React.createElement(
                    'li',
                    { className: 'col-lg-6 mt-3 mt-3', onClick: function onClick() {
                            return _this2.handleClick();
                        } },
                    React.createElement(
                        'a',
                        { href: '#', 'class': 'theme-link' },
                        React.createElement('img', { src: this.props.image, className: 'theme-list-icon', alt: '', srcSet: '' }),
                        React.createElement(
                            'span',
                            null,
                            this.props.name
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'div',
                            { className: 'theme-desc' },
                            React.createElement(
                                'small',
                                null,
                                this.props.desc
                            )
                        )
                    )
                );
            }
        }]);

        return ThemeItem;
    }(React.Component);

    function setTheme(id) {
        var fallbackThemeId = 'nether';

        var theme = themes[id];

        if (!theme) theme = themes[fallbackThemeId];

        document.getElementById('theme').href = theme.href;
        localStorage.setItem('style', theme.id);
    }

    function switchTheme(styleId) {
        location.reload();
        setTheme(styleId);
    }

    var currentStyle = localStorage.getItem('style');

    if (currentStyle) {
        setTheme(currentStyle);
    } else {
        setTheme('nether');
    }

    var themeItems = [];

    Object.entries(themes).forEach(function (theme) {
        themeItems.push(React.createElement(ThemeItem, theme[1]));
    });

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'button',
            { type: 'button', className: 'btn btn-outline-light kara-btn', 'data-toggle': 'modal', 'data-target': '#themeModal' },
            'Vaihda teemaa'
        ),
        React.createElement(
            'div',
            { className: 'modal fade', id: 'themeModal', tabIndex: '-1', 'aria-labelledby': 'themeModalLabel', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'themeModalLabel' },
                            'Teeman vaihto'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
                            React.createElement(
                                'span',
                                { 'aria-hidden': 'true' },
                                '\xD7'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-body' },
                        React.createElement(
                            'ul',
                            { className: 'row theme-list' },
                            themeItems
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn kara-btn btn-outline-light', 'data-dismiss': 'modal' },
                            'Sulje'
                        )
                    )
                )
            )
        )
    );
};

ReactDOM.render(React.createElement(ThemeSwitcher, null), document.getElementById('switcher'));
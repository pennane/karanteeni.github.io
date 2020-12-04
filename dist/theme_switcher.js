'use-strict';

var ThemeSwitcher = function ThemeSwitcher() {

    var style = localStorage.getItem('style');

    if (style == null) {
        setTheme('nether');
    } else {
        setTheme(style);
    }

    function setTheme(theme) {
        if (theme == 'winter') {
            document.getElementById('theme').href = 'vendor/css/style_winter.min.css';
        } else if (theme == 'nether') {
            document.getElementById('theme').href = 'vendor/css/style_minecraft.min.css';
        } else if (theme == 'flat-light') {
            document.getElementById('theme').href = 'vendor/css/flat_light.min.css';
        } else if (theme == 'flat-dark') {
            document.getElementById('theme').href = 'vendor/css/flat_dark.min.css';
        }
        localStorage.setItem('style', theme);
    }

    function switchTheme(style) {
        location.reload();
        setTheme(style);
    }

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
                            React.createElement(
                                'li',
                                { className: 'col-lg-6 mt-3' },
                                React.createElement(
                                    'a',
                                    { href: '#', id: 'link', onClick: function onClick() {
                                            return switchTheme('nether');
                                        } },
                                    React.createElement('img', { src: './assets/images/hell.jpg', className: 'theme-list-icon', alt: '', srcSet: '' }),
                                    React.createElement(
                                        'span',
                                        null,
                                        'Nether'
                                    ),
                                    React.createElement('br', null),
                                    React.createElement(
                                        'span',
                                        { className: 'theme-desc' },
                                        React.createElement(
                                            'small',
                                            null,
                                            'Alankomainen ulkoasu'
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'col-lg-6 mt-3' },
                                React.createElement(
                                    'a',
                                    { href: '#', id: 'link', onClick: function onClick() {
                                            return switchTheme('winter');
                                        } },
                                    React.createElement('img', { src: './assets/images/16833.jpg', className: 'theme-list-icon', alt: '', srcSet: '' }),
                                    React.createElement(
                                        'span',
                                        null,
                                        'Winter'
                                    ),
                                    React.createElement('br', null),
                                    React.createElement(
                                        'span',
                                        { className: 'theme-desc' },
                                        React.createElement(
                                            'small',
                                            null,
                                            'Talven ulkoasu'
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'col-lg-6 mt-3 mt-3' },
                                React.createElement(
                                    'a',
                                    { href: '#', id: 'link', onClick: function onClick() {
                                            return switchTheme('flat-light');
                                        } },
                                    React.createElement('img', { src: './assets/images/flat-light.png', className: 'theme-list-icon', alt: '', srcSet: '' }),
                                    React.createElement(
                                        'span',
                                        null,
                                        'Flat Light'
                                    ),
                                    React.createElement('br', null),
                                    React.createElement(
                                        'span',
                                        { className: 'theme-desc' },
                                        React.createElement(
                                            'small',
                                            null,
                                            'Yksinkertainen vaalea teema'
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'col-lg-6 mt-3' },
                                React.createElement(
                                    'a',
                                    { href: '#', id: 'link', onClick: function onClick() {
                                            return switchTheme('flat-dark');
                                        } },
                                    React.createElement('img', { src: './assets/images/flat-dark.png', className: 'theme-list-icon', alt: '', srcSet: '' }),
                                    React.createElement(
                                        'span',
                                        null,
                                        'Flat Dark'
                                    ),
                                    React.createElement('br', null),
                                    React.createElement(
                                        'span',
                                        { className: 'theme-desc' },
                                        React.createElement(
                                            'small',
                                            null,
                                            'Yksinkertainen tumma teema'
                                        )
                                    )
                                )
                            )
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
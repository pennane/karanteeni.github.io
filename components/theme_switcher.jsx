'use-strict';

const ThemeSwitcher = () => {

    const themes = {
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
            image: './assets/images/sussetheme.png',
            desc: 'Sussen visio maailmasta'
        }
    }

    class ThemeItem extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                id: this.props.id,
                name: this.props.name,
                href: this.props.href,
                desc: this.props.desc,
                image: this.props.image
            }
        }

        handleClick() {
            switchTheme(this.state.id)
        }


        render() {
            return (
                <li className="col-lg-6 mt-3 mt-3" onClick={() => this.handleClick()}>
                    <a href="#" class="theme-link" >
                        <img src={this.props.image} className="theme-list-icon" alt="" srcSet="" />
                        <span>{this.props.name}</span><br />
                        <div className="theme-desc"><small>{this.props.desc}</small></div>
                    </a>
                </li>
            )
        }
    }

    function setTheme(id) {
        let fallbackThemeId = 'nether'

        let theme = themes[id]

        if (!theme) theme = themes[fallbackThemeId]

        document.getElementById('theme').href = theme.href;
        localStorage.setItem('style', theme.id)
    }

    function switchTheme(styleId) {
        location.reload();
        setTheme(styleId);
    }



    let currentStyle = localStorage.getItem('style');

    if (currentStyle) {
        setTheme(currentStyle);
    } else {
        setTheme('nether');
    }

    const themeItems = []

    Object.entries(themes).forEach(theme => {
        themeItems.push(<ThemeItem {...theme[1]} />)
    });

    return (
        <React.Fragment>
            <button type="button" className="btn btn-outline-light kara-btn" data-toggle="modal" data-target="#themeModal">
                Vaihda teemaa
            </button>

            <div className="modal fade" id="themeModal" tabIndex="-1" aria-labelledby="themeModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="themeModalLabel">Teeman vaihto</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ul className="row theme-list">
                                {themeItems}
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn kara-btn btn-outline-light" data-dismiss="modal">Sulje</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

ReactDOM.render(<ThemeSwitcher />, document.getElementById('switcher'));
'use-strict';

const ThemeSwitcher = () => {

    let style = localStorage.getItem('style');

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
            document.getElementById('theme').href = 'vendor/css/flat_dark.min.css'
        }
        localStorage.setItem('style', theme);
    }

    function switchTheme(style) {
        location.reload();
        setTheme(style);
    }

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
                            <li className="col-lg-6 mt-3">
                                <a href="#" id="link" onClick={() => switchTheme('nether')}>
                                    <img src="./assets/images/hell.jpg" className="theme-list-icon" alt="" srcSet=""/>
                                    <span>Nether</span><br/>
                                    <span className="theme-desc"><small>Alankomainen ulkoasu</small></span>
                                </a>
                            </li>
                            <li className="col-lg-6 mt-3">
                                <a href="#" id="link" onClick={() => switchTheme('winter')}>
                                    <img src="./assets/images/16833.jpg" className="theme-list-icon" alt="" srcSet=""/>
                                    <span>Winter</span><br/>
                                    <span className="theme-desc"><small>Talven ulkoasu</small></span>
                                </a>
                            </li>
                            <li className="col-lg-6 mt-3 mt-3">
                                <a href="#" id="link" onClick={() => switchTheme('flat-light')}>
                                    <img src="./assets/images/flat-light.png" className="theme-list-icon" alt="" srcSet=""/>
                                    <span>Flat Light</span><br/>
                                    <span className="theme-desc"><small>Yksinkertainen vaalea teema</small></span>
                                </a>
                            </li>
                            <li className="col-lg-6 mt-3">
                                <a href="#" id="link" onClick={() => switchTheme('flat-dark')}>
                                    <img src="./assets/images/flat-dark.png" className="theme-list-icon" alt="" srcSet=""/>
                                    <span>Flat Dark</span><br/>
                                    <span className="theme-desc"><small>Yksinkertainen tumma teema</small></span>
                                </a>
                            </li>
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
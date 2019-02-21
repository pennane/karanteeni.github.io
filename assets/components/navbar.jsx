'use strict';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark karanav fixed-top">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="nav navbar-nav nav-fill" style={{flexGrow: 1, textAlign: 'center'}}>
                        <li className="nav-item">
                        <a className="nav-link" href="index"><i className="fas fa-home"></i>&nbsp;&nbsp;Etusivu
                        </a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-target="#rc" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-info"></i>&nbsp;&nbsp;Yleistietoa
                        </a>
                            <div className="dropdown-menu collapse" aria-labelledby="navbarDropdown">
                            <h6 className="dropdown-header">Yleistietoa</h6>
                            <a className="dropdown-item" href="yleistietoa"><i className="fas fa-info"></i>&nbsp;&nbsp;Yleistietoa</a>
                            <a className="dropdown-item" href="recipes"><i className="fas fa-hammer"></i>&nbsp;&nbsp;Custom Recipet</a>
                            <div className="dropdown-divider"></div>
                            <a href="hoks" className="dropdown-item"><i className="fas fa-thumbs-up"></i>&nbsp;&nbsp;Hyvä tietää!</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-target="#dd" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-exclamation"></i>&nbsp;&nbsp;Säännöt
                        </a>
                            <div className="dropdown-menu collapse" aria-labelledby="navbarDropdown">
                            <h6 className="dropdown-header">Säännöt</h6>
                            <a className="dropdown-item" href="saannot"><i className="fas fa-cross"></i>&nbsp;&nbsp;Survivalin säännöt</a>
                            <a className="dropdown-item" href="chat-saannot"><i className="fas fa-comments"></i>&nbsp;&nbsp;Chat-säännöt</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="rankit" className="nav-link"><i className="fas fa-medal"></i>&nbsp;&nbsp;Rankit</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-users"></i>&nbsp;&nbsp;Ylläpito</a>
                            <div className="dropdown-menu collapse" aria-labelledby="navbarDropdown" id="df">
                            <h6 className="dropdown-header">Ylläpito</h6>
                            <a className="dropdown-item" href="yllapito"><i className="fas fa-users"></i>&nbsp;&nbsp;Ylläpito</a>
                            {/* <a className="dropdown-item" href="yphaku"><i class="fas fa-file-alt"></i>&nbsp;&nbsp;Hae ylläpitoon</a> */}
                            </div>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="maailmat"><i className="fas fa-globe-africa"></i>&nbsp;&nbsp;Maailmat</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="lahjoitus"><i className="fas fa-gift"></i>&nbsp;&nbsp;Lahjoitukset</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

ReactDOM.render(<Navbar />, document.getElementById('nav'));

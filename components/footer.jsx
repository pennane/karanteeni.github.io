'use strict';

class Footer extends React.Component {
    render() {
        let year = new Date().getFullYear();
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-xs-12">
                        <a className="footer-link"href="https://karanteeni.net" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/images/footerlogo.png" alt="Footerlogo" width="255" height="68"/>
                        </a>
                    </div>
                    <div className="col-lg-5 col-xs-12">
                        <h4 className="mt-lg-0 mt-sm-3">Yhteisö</h4>
                        <ul className="m-0 p-0 links">
                            <li>- <a href="https://discord.gg/fZqqysM">Discord</a></li>
                            <li>- <a href="https://twitter.com/Karanteeni">Twitter</a></li>
                            <li>- <a href="https://www.youtube.com/c/Karanteeni">YouTube</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-xs-12">
                        <h4 className="mt-lg-0 mt-sm-3">Muuta</h4>
                        <p>
                            Jotain roskaa
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col copyright">
                        <p className=""><small className="text-white-50">&copy; Karanteeni {year}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Footer />, document.getElementById('footer'))
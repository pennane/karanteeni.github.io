'use-strict';

let request = new Request('https://api.mcsrvstat.us/2/95.217.120.173');

class ServerStatus extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            data: [],
            error: false
        }
    }

    componentDidMount() {
        fetch(request)
        .then(result => result.json())
        .then (
            (result => {
                this.setState({
                    data: this.state.data.concat(result),
                    isLoading: false
                })
            })
        )
        .catch(error => {
            console.error(error)
            this.setState({error: true})
        })
    }

    render() {
        const debug = this.state.data
        const isLoading = this.state.isLoading
        const error = this.state.error

        if (isLoading == false) {
            return (
                <div className="card card-body content bg-transparent">
                    <h5 className="card-title"><i className="fas fa-server card-title-icon"></i>Palvelin</h5>
                    <div id="content">
                        {debug.map((index, key) => {
                            if (index.online == false) {
                                return (
                                    <p>Palvelin on pois päältä.</p>
                                )
                            }
                            return ([
                                <p><span key={key} className="online">Päällä</span></p>,
                                <p><span key={key}>Versio: {index.version}</span></p>,
                                <p className="server-ip"><span key={key}>mc.karanteeni.net <br/><span id="numip">{index.ip}</span></span></p>,
                                <div class="copyButtonParent"><button className='copyPaste btn btn-outline-light kara-btn btn-tooltip show' data-toggle='tooltip' data-placement='top' title='Paina tästä kopioidaksesi IP-osoite.' data-clipboard-target='#numip'><i className='fas fa-copy'></i></button></div>,
                                <br/>,
                                <br/>,
                                <p>Pelaajia paikalla: {index.players.online}</p>
                            ])
                        })}
                    </div>
                </div>
            )
        } else if (error == true) {
            <div className="card card-body content bg-transparent">
                <h5 className="card-title"><i className="fas fa-server card-title-icon"></i>Palvelin</h5>
                <div id="content">
                    <p>Palvelimen kysely on rikki.</p>
                </div>
            </div>
        }
        return (
            <div className="card card-body content bg-transparent text-white">
                <h5 className="card-title"><i className="fas fa-server card-title-icon"></i>Palvelin</h5>
                <div id="content centerLoader">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<ServerStatus/>, document.getElementById("server"))
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
            console.log(error)
            this.setState({error: true})
        })
    }

    render() {
        const debug = this.state.data
        const isLoading = this.state.isLoading
        const error = this.state.error

        if (isLoading == false) {
            return (
                <div class="card card-body content bg-transparent text-white">
                    <h5 class="card-title"><i class="fas fa-server card-title-icon"></i>Palvelin</h5>
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
                                <p className="server-ip"><span key={key}>mc.karanteeni.net <span id="numip">{index.ip}</span></span></p>,
                                <button className='copyPaste btn btn-outline-light btn-tooltip show' data-toggle='tooltip' data-placement='top' title='Paina tästä kopioidaksesi IP-osoite.' data-clipboard-target='#numip'><i class='fas fa-copy'></i></button>,
                                <br/>,
                                <br/>,
                                <p>Pelaajia paikalla: {index.players.online}</p>
                            ])
                        })}
                    </div>
                </div>
            )
        } else if (error == true) {
            <div class="card card-body content bg-transparent text-white">
                <h5 class="card-title"><i class="fas fa-server card-title-icon"></i>Palvelin</h5>
                <div id="content">
                    <p>Palvelimen kysely on rikki.</p>
                </div>
            </div>
        }
        return (
            <div class="card card-body content bg-transparent text-white">
                <h5 class="card-title"><i class="fas fa-server card-title-icon"></i>Palvelin</h5>
                <div id="content">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<ServerStatus/>, document.getElementById("server"))
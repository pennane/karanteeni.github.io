'use-strict';

class Owners extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            debug: {}
        }
    }

    componentDidMount() {
        const request = new Request('https://karanteeni.net/modules/Operators/operators.json');
    
        fetch(request)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        data: result.omistajat,
                        debug: result
                    })
                }
            )
    }

    render() {
        const debug = this.state.debug;
        const array = this.state.data;
        const rank = []

        for (key of Object.keys(debug)) {
            rank.push(key)
        }
        
        return (
            <YpWrapper>
                {array.map((item, key) => (
                    <YpCard key={key} rank={rank[0]} uuid={item.uuid} name={item.nimi} desc={item.kuvaus}>
                            {array[key].vahvuudet.map((str, index) => (
                                <Strength key={index}>{str}</Strength>
                            ))}
                    </YpCard>
                ))}
            </YpWrapper>
        )
    }
}

class Admins extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            debug: {}
        }
    }

    componentDidMount() {
        const request = new Request('https://karanteeni.net/modules/Operators/operators.json');
    
        fetch(request)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        data: result.adminit,
                        debug: result
                    })
                }
            )
    }

    render() {
        const debug = this.state.debug;
        const array = this.state.data;
        const rank = []

        for (key of Object.keys(debug)) {
            rank.push(key)
        }
        
        return (
            <YpWrapper>
                {array.map((item, key) => (
                    <YpCard key={key} rank={rank[1]} uuid={item.uuid} name={item.nimi} desc={item.kuvaus}>
                            {array[key].vahvuudet.map((str, index) => (
                                <Strength key={index}>{str}</Strength>
                            ))}
                    </YpCard>
                ))}
            </YpWrapper>
        )
    }
}

class Operators extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            debug: {}
        }
    }

    componentDidMount() {
        const request = new Request('https://karanteeni.net/modules/Operators/operators.json');
    
        fetch(request)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        data: result.operaattorit,
                        debug: result
                    })
                }
            )
    }

    render() {
        const debug = this.state.debug;
        const array = this.state.data;
        const rank = []

        for (key of Object.keys(debug)) {
            rank.push(key)
        }
        
        return (
            <YpWrapper>
                {array.map((item, key) => (
                    <YpCard key={key} rank={rank[2]} uuid={item.uuid} name={item.nimi} desc={item.kuvaus}>
                            {array[key].vahvuudet.map((str, index) => (
                                <Strength key={index}>{str}</Strength>
                            ))}
                    </YpCard>
                ))}
            </YpWrapper>
        )
    }
}

class Moderators extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            debug: {}
        }
    }

    componentDidMount() {
        const request = new Request('https://karanteeni.net/modules/Operators/operators.json');
    
        fetch(request)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        data: result.moderaattorit,
                        debug: result
                    })
                }
            )
    }

    render() {
        const debug = this.state.debug;
        const array = this.state.data;
        const rank = []

        for (key of Object.keys(debug)) {
            rank.push(key)
        }
        
        return (
            <YpWrapper>
                {array.map((item, key) => (
                    <YpCard key={key} rank={rank[3]} uuid={item.uuid} name={item.nimi} desc={item.kuvaus}>
                            {array[key].vahvuudet.map((str, index) => (
                                <Strength key={index}>{str}</Strength>
                            ))}
                    </YpCard>
                ))}
            </YpWrapper>
        )
    }
}

class Builders extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            debug: {}
        }
    }

    componentDidMount() {
        const request = new Request('https://karanteeni.net/modules/Operators/operators.json');
    
        fetch(request)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        data: result.rakentajat,
                        debug: result
                    })
                }
            )
    }

    render() {
        const debug = this.state.debug;
        const array = this.state.data;
        const rank = []

        for (key of Object.keys(debug)) {
            rank.push(key)
        }
        
        return (
            <YpWrapper>
                {array.map((item, key) => (
                    <YpCard key={key} rank={rank[4]} uuid={item.uuid} name={item.nimi} desc={item.kuvaus}>
                            {array[key].vahvuudet.map((str, index) => (
                                <Strength key={index}>{str}</Strength>
                            ))}
                    </YpCard>
                ))}
            </YpWrapper>
        )
    }
}

const YpWrapper = (props) => {
    return (
        <div className="yp-wrapper">
            {props.children}
        </div>
    )
}

const YpCard = (props) => {
        return (
            <div className={'admin-card-container ' + props.rank}>
                <div className={'admin-card ' + props.rank}>
                    <div className={'background ' + props.rank}>
                        <div className={'avatar ' + props.rank}>
                            <img src={'https://visage.surgeplay.com/full/' + props.uuid}/>
                        </div>
                    </div>
                    <div className={'admin-content ' + props.rank}>
                        <div className={'admin-type ' + props.rank}>
                            {props.rank}
                        </div>
                        <div className={'admin-name ' + props.rank}>
                            {props.name}
                        </div>
                        <div className={'admin-strength ' + props.rank}>
                            {props.children}
                        </div>
                    </div>
                    <div className="admin-footer">
                        <p>
                            {props.desc}
                        </p>
                    </div>
                </div>
            </div>
        )
}

const Strength = (props) => {
    return(
        <p>
            <i className="far fa-arrow-alt-circle-right admin-strength-bullet"></i>
            {props.children}
        </p>
    )
}

ReactDOM.render(<Owners/>, document.getElementById("owners"));
ReactDOM.render(<Admins/>, document.getElementById("admins"));
ReactDOM.render(<Operators/>, document.getElementById("operators"));
ReactDOM.render(<Moderators/>, document.getElementById("mods"));
ReactDOM.render(<Builders/>, document.getElementById("builders"));
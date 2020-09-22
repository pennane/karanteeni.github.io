'use-strict';

class Donators extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const request = new Request('https://karanteeni.net/modules/Donators/donators.json');

        fetch(request)
        .then(response => response.json()
        .then(
            (result) => {
                this.setState({
                    data: result.lahjoittajat
                });
            }
        ));
    }

    render() {
        const array = this.state.data;

        return (
            <React.Fragment>
                {array.map((item, key) =>
                    <Row>
                        <HeaderCell key={key} date={item.pvm}/>
                        <DataCell key={key} name={item.nimi} amount={item.amount} heart={item.heart}/>
                    </Row>
                )}
            </React.Fragment>
        );
    }
}

const Row = (props) => {
    return (
        <tr>
            {props.children}
        </tr>
    );
}

const HeaderCell = (props) => {
    return (
        <th>{props.date}</th>
    );
}

const DataCell = (props) => {
    return (
        <React.Fragment>
            <td>{props.name}</td>
            <td>{props.amount}</td>
            <td>{props.heart}</td>
        </React.Fragment>
    );
}

ReactDOM.render(<Donators/>, document.getElementById('lahjoittajat'));
'use-strict';

const icons = [
    {
        name: 'exclamation-triangle'
    },
    {
        name: 'exclamation-circle'
    },
    {
        name: 'info-circle'
    }
]

class Alert extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: this.props.type,
            text: this.props.text,
            icon: this.props.icon
        }
    }

    render() {
        return (
            <div class="row">
                <div class="col-lg-12">
                    <div class={"alert alert-" + this.props.type} role="alert">
                        <div class="row vertical-align">
                            <div class="col-xs-1 text-center m-auto">
                            <i class={"fas fa-" + this.props.icon + " fa-2x"}></i>
                            </div>
                            <div className="col-xs-11">
                                {this.props.text}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class AlertBody extends React.Component {

    render() {
        return (
            <Alert type="warning" icon={icons[0].name} text={[<b>HUOM!</b>, " Tämä sivusto on epävirallisesti ", <a href="https://karanteeni.net" class="alert-link">Karanteenin</a>, " kehityssivusto, eikä mitään sen osia välttämättä nähdä lopullisessa versiossa."
            , <br/>, "Myöskään tällä sivulla olevaa informaatiota ei oteta huomioon lopullisessa versiossa millään perusteella, eikä sitä voida käyttää perusteena lopullisen version toiminnassa."]} />
        )
    }
}

const div = document.querySelector('#alert');
ReactDOM.render(<AlertBody/>, div);
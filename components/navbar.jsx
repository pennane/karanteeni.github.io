'use strict';

const Icon = (props) => {
    return (
        <i className={props.icon}></i>
    )
}

class Tooltip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text
        };
    }

    render() {
        return (
            <span data-toggle="tooltip" data-placement="top" title={this.props.text}>{this.props.children}</span>
        )
    }
}

class NavLink extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            icon: this.props.icon,
            url: this.props.url
        };
    }

    render() {
        return (
            <li className="nav-item">
                <a href={this.props.url} className="nav-link">
                    <Icon icon={this.state.icon} />&nbsp;&nbsp;{this.state.title}
                </a>
            </li>
        )
    }
}

class DropDownCollapseMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            target: this.props.dataTarget,
            labelClassName: this.props.labelClassName
        };
    }

    render() {
        return(
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-target={this.state.dataTarget} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className={this.state.labelClassName}></i>&nbsp;&nbsp;{this.state.title}
                </a>
                    <div className="dropdown-menu collapse" aria-labelledby="navbarDropdown">
                        <h6 className="dropdown-header">{this.state.title}</h6>
                        {this.props.children}
                    </div>
            </li>
        );
    }
}

class DropDownItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            icon: this.props.icon,
            url: this.props.url
        };
    }

    render() {
        const disabled = this.props.disabled
        if (disabled) {
            return (
                <a className="dropdown-item disabled" href={this.state.url}><Icon icon={this.state.icon} />&nbsp;&nbsp;{this.state.title}</a>
            )
        } else {
            return (
                <a className="dropdown-item" href={this.state.url}><Icon icon={this.state.icon} />&nbsp;&nbsp;{this.state.title}</a>
            )
        }
    }
}

const Nav = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark karanav">
            {props.children}
        </nav>
    )
}

class Navbar extends React.Component {
    render() {
        return (
            <Nav>
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="navbar-toggler-icon burger burger-rotate">
                            <div className="burger-lines"></div>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="nav navbar-nav nav-fill" style={{flexGrow: 1, textAlign: 'center'}}>
                            <NavLink icon="fas fa-home" url="/" title="Etusivu" />
                            
                            <DropDownCollapseMenu title="Yleistietoa" dataTarget="#rc" labelClassName="fas fa-info">
                                <DropDownItem icon="fas fa-info" url="yleistietoa" title="Yleistietoa" />
                                <DropDownItem icon="fas fa-hammer" url="recipes" title="Custom reseptit" />
                                <DropDownItem icon="fas fa-thumbs-up" url="hoks" title="Hyvä tietää!" />
                                <DropDownItem icon="fas fa-question-circle" url="ukk" title="UKK" />
                            </DropDownCollapseMenu>

                    
                            <NavLink icon="fas fa-exclamation" url="saannot" title="Säännöt" />

                            <NavLink icon="fas fa-medal" url="rankit" title="Rankit" />
                            
                            <DropDownCollapseMenu title="Ylläpito" labelClassName="fas fa-users">
                                <DropDownItem icon="fas fa-users" url="yllapito" title="Ylläpito" />
                                <DropDownItem icon="fas fa-file-alt" url="yphaku" title="Hae ylläpitoon!" />
                            </DropDownCollapseMenu>

                            <NavLink icon="fas fa-globe-africa" url="maailmat" title="Maailmat" />
                            <NavLink icon="fas fa-gift" url="lahjoitus" title="Lahjoitukset" />
                        </ul>
                    </div>
                </div>
            </Nav>
        )
    }
}

ReactDOM.render(<Navbar />, document.getElementById('nav'));

'use strict';

class Footer extends React.Component {
    render() {
        return (
            <div className="container">
                &copy; Karanteeni 2019 <span className="text-float-right">Karanteeni UI</span>
            </div>
        )
    }
}

ReactDOM.render(<Footer />, document.getElementById('footer'))
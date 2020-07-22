'use strict';

class Footer extends React.Component {
    render() {
        let year = new Date().getFullYear();
        return (
            <div className="container">
                &copy; Karanteeni {year}
            </div>
        )
    }
}

ReactDOM.render(<Footer />, document.getElementById('footer'))
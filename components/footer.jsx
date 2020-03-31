'use strict';

class Footer extends React.Component {
    render() {
        return (
            <div className="container">
                &copy; Vaniljajäätelö 2020
            </div>
        )
    }
}

ReactDOM.render(<Footer />, document.getElementById('footer'))
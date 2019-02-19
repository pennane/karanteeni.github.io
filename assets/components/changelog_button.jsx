'use strict';

class ChangeLogButton extends React.Component {
    render() {
        return (
            <a href="muutokset" className="btn btn-outline-light kara-btn" role="button">
                Muutoksiin <i className="fas fa-arrow-right"></i>
            </a>
        )
    }
}

const div = document.querySelector('#changelog_button');
ReactDOM.render(<ChangeLogButton />, div);
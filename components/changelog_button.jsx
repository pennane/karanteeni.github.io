'use strict';


class ChangeLogButton extends React.Component {
    render() {
        return (
            <a href="muutokset" className="btn btn-outline-light kara-btn" role="button">
                Muutosloki <i className="fas fa-arrow-right"></i>
            </a>
        )
    }
}

const VoteLinks = () => {
    return (
        <div className="card card-body content bg-transparent text-white mt-5">
            <h5 className="card-title"><i className="fas fa-poll-h card-title-icon"></i>Äänestäminen</h5>
            <div className="voteLinks">
                <p>
                    <a href="https://minecraft-mp.com/server/194896/vote/" target="_blank" className="btn btn-outline-light kara-btn" role="button">Äänestyslinkki 1</a>
                </p>
                <p>
                    <a href="https://topg.org/Minecraft/in-515100" target="_blank" className="btn btn-outline-light kara-btn" role="button">Äänestyslinkki 2</a>
                </p>
            </div>
        </div>
    )
}

const div = document.querySelector('#changelog_button');
const vote = document.getElementById('votecontainer');
ReactDOM.render(<ChangeLogButton />, div);
ReactDOM.render(<VoteLinks />, vote)
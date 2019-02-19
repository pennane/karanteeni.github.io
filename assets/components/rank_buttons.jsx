'use-strict';

class RankButtons extends React.Component {
    render() {
        return (
            <p style={{marginTop: 1.2 + 'rem'}}>
                <button className="btn btn-eloton-outline" type="button" data-toggle="collapse" data-target="#reloton" aria-expanded="false" aria-controls="reloton">
                  Eloton
                </button>&nbsp;
                <button className="btn btn-raihnas-outline" type="button" data-toggle="collapse" data-target="#rraihnas" aria-expanded="false" aria-controls="rraihnas">
                  Raihnas
                </button>&nbsp;
                <button className="btn btn-sisukas-outline" type="button" data-toggle="collapse" data-target="#rsisukas" aria-expanded="false" aria-controls="rsisukas">
                  Sisukas
                </button>&nbsp;
                <button className="btn btn-parantuva-outline" type="button" data-toggle="collapse" data-target="#rparantuva" aria-expanded="false" aria-controls="rparantuva">
                  Parantuva
                </button>&nbsp;
                <button className="btn btn-immuuni-outline" type="button" data-toggle="collapse" data-target="#rimmuuni" aria-expanded="false" aria-controls="rimmuuni">
                  Immuuni
                </button>&nbsp;
                <button className="btn btn-parantaja-outline" type="button" data-toggle="collapse" data-target="#rparantaja" aria-expanded="false" aria-controls="rparantaja">
                  Parantaja
                </button>&nbsp;
                <button className="btn btn-nekromantikko-outline" type="button" data-toggle="collapse" data-target="#rnekromantikko" aria-expanded="false" aria-controls="rnekromantikko">
                  Nekromantikko
                </button>&nbsp;
                <button className="btn btn-kuolematon-outline" type="button" data-toggle="collapse" data-target="#rkuolematon" aria-expanded="false" aria-controls="rkuolematon">
                  Kuolematon
                </button>&nbsp;
            </p>
        );
    }
}

ReactDOM.render(<RankButtons />, document.getElementById('painikkeet'));
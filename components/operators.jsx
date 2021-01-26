'use-strict';

const rankToMissingText = (rank) => {
    switch (rank) {
        case "omistajat": return 'Sellout'
        case "adminit": return 'Olisikohan jostakin operaattorista tähän hommaan?'
        case "operaattorit": return 'Operaattoreita ei näkyvillä'
        case "moderaattorit": return 'Hmm.. moderaattoreistahan on pulaa! Haku ylläpitoon on aina auki!'
        case "rakentajat": return 'Ei rakentajia? Kuka nyt rakentaa Gauriksen spawnit?'
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
                        <img src={'https://visage.surgeplay.com/full/' + props.uuid} />
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
    return (
        <p>
            <i className="far fa-arrow-alt-circle-right admin-strength-bullet"></i>
            {props.children}
        </p>
    )
}


const Rank = ({ data, rank }) => {
    return (
        <div>
            <h3 className={`tag ${rank} yp-header`} >{rank}</h3>
            <YpWrapper>
                {data.length === 0 && <p>{rankToMissingText(rank)}</p>}
                {data.length >= 0 && data.map((item, key) => (

                    <YpCard key={key} rank={rank} uuid={item.uuid} name={item.nimi} desc={item.kuvaus}>
                        {item.vahvuudet.map((str, index) => (
                            <Strength key={index}>{str}</Strength>
                        ))}
                    </YpCard>
                ))}
            </YpWrapper>
        </div>

    )
}

const Admininstration = () => {
    let [adminData, setAdminData] = React.useState(null)
    let [adminRanksArray, setAdminRanksArray] = React.useState([])

    React.useEffect(() => {
        const request = new Request('/modules/Operators/operators.json');
        fetch(request)
            .then(response => response.json())
            .then(data => {
                setAdminData(data)
                setAdminRanksArray(Object.keys(data))
            })
    }, [])

    return (
        <div>
            {adminData && adminRanksArray && adminRanksArray.map(rank => <Rank key={rank} rank={rank} data={adminData[rank]} />)}
        </div>
    )
}

ReactDOM.render(<Admininstration />, document.getElementById("adminstration"));
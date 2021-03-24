import { useEffect, useState } from 'react'

const ServerStatus = () => {
    let [status, setStatus] = useState(null)
    useEffect(() => {
        fetch(`https://api.mcsrvstat.us/2/95.217.120.173`)
            .then((response) => response.json())
            .then((data) => setStatus(data))
    }, [])

    return (
        <div className="server-status">
            <h3>Palvelin</h3>
            {!status && (
                <div className="loading-spinner-container">
                    <div className="loading-spinner"></div>
                </div>
            )}
            {status && (
                <>
                    <span className={'server-state' + status.online ? ' online' : ' offline'}>
                        {status.online ? 'Päällä' : 'Pois päältä'}
                    </span>
                    <span className="server-version">Versio: {status.version}</span>
                    <span className="server-address">mc.karanteeni.net</span>
                    <span className="server-ip">{status.ip}</span>
                    <span className="server-player-count">Pelaajia paikalla: {status?.players?.online || 0}</span>
                </>
            )}
        </div>
    )
}

export default ServerStatus

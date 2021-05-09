import { useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'

const ServerStatus = () => {
    const { addToast } = useToasts()
    let [status, setStatus] = useState(null)

    let textIp = 'mc.karanteeni.net'
    let numberIp = '95.217.120.173'
    useEffect(() => {
        fetch(`https://api.mcsrvstat.us/2/${numberIp}`)
            .then((response) => response.json())
            .then((data) => setStatus(data))
    }, [])

    console.log(addToast)

    const copyIpToClipboard = () => {
        navigator.clipboard.writeText(textIp)
        addToast('IP tallennettu leikepöydälle', { appearance: 'success', autoDismiss: true })
    }

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
            <button className="ip-to-clipboard button" onClick={copyIpToClipboard}>
                Kopioi IP leikepöydälle
            </button>
        </div>
    )
}

export default ServerStatus

import style from '../styles/admincard.module.css'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminStrength = ({ children }) => {
    return (
        <p>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className={`${style['strength-bullet']}`} />
            {children}
        </p>
    )
}

const AdminCard = ({
    rank,
    uuid,
    name,
    description,
    strengths
}: {
    rank: string
    uuid: string
    name: string
    description?: string
    strengths?: string[]
}) => {
    return (
        <div className={`${style['card-container']} ${style[rank]}`}>
            <div className={`${style['card']} ${style[rank]}`}>
                <div className={`${style['background']} ${style[rank]}`}>
                    <div className={`${style['avatar']} ${style[rank]}`}>
                        <img src={`https://visage.surgeplay.com/full/${uuid}`} />
                    </div>
                </div>
                <div className={`${style['content']} ${style[rank]}`}>
                    <div className={`${style['type']} ${style[rank]}`}>{rank}</div>
                    <div className={`${style['name']} ${style[rank]}`}>{name}</div>
                    <div className={`${style['strength']} ${style[rank]}`}>
                        {strengths && strengths.map((strength, i) => <AdminStrength key={i}>{strength}</AdminStrength>)}
                    </div>
                </div>
                <div className={`${style['footer']}`}>{description && <p>{description}</p>}</div>
            </div>
        </div>
    )
}

export default AdminCard

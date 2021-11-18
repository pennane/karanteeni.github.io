import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'
import changes from '../data/changes.json'

let mappedChanges = {}

changes.forEach((change) => {
    let dateParts = change.date.split('.')
    let key = `${dateParts[2]}${dateParts[1].padStart(2, '0')}`
    if (key in mappedChanges) {
        mappedChanges[key] = mappedChanges[key].concat(change)
    } else {
        mappedChanges[key] = [change]
    }
})

const Month = ({ month, showId, updateShowing, label, children }) => {
    const showing = month === showId
    return (
        <div className="card bg-transparent border-gold">
            <div className="card-header" id={month + '_1'}>
                <h4 className={showing ? 'active month' : 'month'}>
                    <button
                        type="button"
                        aria-expanded="false"
                        aria-controls={month}
                        onClick={(e) => updateShowing(showing ? 'null' : month)}
                    >
                        {label}
                    </button>
                </h4>
            </div>
            <div id={month} className={'collapse ' + (showing ? 'show' : '')}>
                <div className="card-body">{children}</div>
            </div>
        </div>
    )
}

const Change = ({ children }) => {
    return (
        <div className="change">
            <div className="change-icon">
                <div className="rule-icon accepted">
                    <FontAwesomeIcon className="icon" icon={faCheck} />
                </div>
            </div>
            <div className="change-content">{children}</div>
        </div>
    )
}

const ChangeDate = ({ date, children }: { date: string; children: React.ReactNode }) => {
    return (
        <div className="change-date">
            <span className="date-header">{date}</span>
            {children}
        </div>
    )
}

const Changelog = () => {
    let mostRecent = String(Math.max(...Object.keys(mappedChanges).map((key) => Number(key))))
    const [showId, setShowId] = useState(mostRecent)

    const updateShowing = (val) => {
        setShowId(val)
    }
    return (
        <div>
            {mappedChanges &&
                Object.keys(mappedChanges)
                    .sort((a, b) => (Number(a) < Number(b) ? 1 : -1))
                    .map((key, i) => {
                        let month = mappedChanges[key]
                        let dateForKey = new Date(`${key.substring(4)}.1.${key.substring(0, 4)}`)
                        let label = Intl.DateTimeFormat('fi-FI', { month: 'long', year: 'numeric' }).format(dateForKey)
                        return (
                            <Month
                                key={`${key}${i}`}
                                showId={showId}
                                updateShowing={updateShowing}
                                month={key}
                                label={label}
                            >
                                {month &&
                                    month.map((date, i) => {
                                        return (
                                            <ChangeDate key={`${date.date}${i}`} date={date.date}>
                                                {date.changes &&
                                                    date.changes.map((change, i) => (
                                                        <Change key={date.date + change + i}>{change}</Change>
                                                    ))}
                                            </ChangeDate>
                                        )
                                    })}
                            </Month>
                        )
                    })}
        </div>
    )
}

const Muutokset = () => {
    return (
        <Layout title="Changelog" description="Karanteenin muutosloki aikajärjestyksessä.">
            <Heading heading="Changelog" lead="Tämä sivu kattaa Karanteenin muutoslokit aikajärjestyksessä." />
            <Changelog />
        </Layout>
    )
}
export default Muutokset

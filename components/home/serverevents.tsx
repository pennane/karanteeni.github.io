import serverEvents from '../../data/serverevents.json'

interface ServerEvent {
    title: string
    description: string
    dates: {
        startDate: string
        endDate?: string
    }
}

const parseDate = (dateString: string | null): number | null => {
    if (!dateString) return null
    let [day, month, year] = dateString.split('.')
    return Date.parse([month, day, year].join('.'))
}

const ServerEvent = ({ title, description, dates: { startDate, endDate } }: ServerEvent) => {
    let dateString = endDate ? startDate + ' - ' + endDate : startDate

    return (
        <div className="server-event">
            <h4>{title}</h4>
            <p>{description}</p>
            <time>{dateString}</time>
        </div>
    )
}

const ServerEvents = () => {
    let events: ServerEvent[] = serverEvents
    let now = Date.now()

    let ongoing = events.filter((event) => {
        let startDate = parseDate(event.dates.startDate)
        let endDate = event.dates.endDate ? parseDate(event.dates.endDate) : startDate + 86_400_000
        return startDate < now && endDate > now
    })
    let upcoming = events.filter((event) => parseDate(event.dates.startDate) > now)

    if (!ongoing && !upcoming) return null

    return (
        <div className="server-events">
            {ongoing.length > 0 && (
                <>
                    <h3>Meneillään olevat tapahtumat</h3>
                    {ongoing.map((event, i) => (
                        <ServerEvent key={i} title={event.title} description={event.description} dates={event.dates} />
                    ))}
                </>
            )}
            {upcoming.length > 0 && (
                <>
                    <h3>Tulevat tapahtumat</h3>
                    {upcoming.map((event, i) => (
                        <ServerEvent key={i} title={event.title} description={event.description} dates={event.dates} />
                    ))}
                </>
            )}
        </div>
    )
}

export default ServerEvents

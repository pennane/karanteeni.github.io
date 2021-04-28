import { SetStateAction, useEffect, useState } from 'react'
import { randomFromArray } from '../../lib/util'
import citations from '../../data/citations.json'

interface Citation {
    content: string
    name: string
}

const MinecraftCitation = () => {
    const initialCitation = randomFromArray(citations)
    const [citation, setCitation] = useState<Citation>(initialCitation)
    const [intervalId, setIntervalId] = useState<any>()

    useEffect(() => {
        setIntervalId(setInterval(() => updateCitation(), 9000))
        return () => clearInterval(intervalId)
    }, [])

    const updateCitation = () => {
        let newCitation

        do {
            newCitation = randomFromArray(citations)
        } while (newCitation === citation)

        setCitation(newCitation)
    }

    return (
        <figure className="minecraft-citation">
            <blockquote>{citation.content}</blockquote>
            <figcaption>
                <cite>- {citation.name}</cite>
            </figcaption>
        </figure>
    )
}

export default MinecraftCitation

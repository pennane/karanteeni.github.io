import { useState } from 'react'
import { randomFromArray } from '../../lib/util'
import citations from '../../data/citations.json'
import useInterval from '../../lib/useInterval'

interface Citation {
    content: string
    name: string
}

const MinecraftCitation = () => {
    const initialCitation = randomFromArray(citations)
    const [citation, setCitation] = useState<Citation>(initialCitation)
    const [transitioning, setTransitioning] = useState<boolean>()

    useInterval(() => {
        updateCitation()
    }, 9000)

    const updateCitation = () => {
        setTransitioning(() => true)

        let newCitation

        do {
            newCitation = randomFromArray(citations)
        } while (newCitation === citation)

        setTimeout(() => {
            setCitation(newCitation)
            setTransitioning(() => false)
        }, 2000)
    }

    return (
        <figure className={`minecraft-citation${transitioning ? ' transitioning' : ''}`}>
            <blockquote>{citation.content}</blockquote>
            <figcaption>
                <cite>- {citation.name}</cite>
            </figcaption>
        </figure>
    )
}

export default MinecraftCitation

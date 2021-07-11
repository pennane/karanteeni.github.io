import { useState, useEffect, MutableRefObject } from 'react'

const useMousePosition = (ref: MutableRefObject<any>) => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null })

    const updateMousePosition = (event) => {
        if (!ref.current) return
        let width = ref.current.offsetWidth / 2
        let height = ref.current.offsetHeight / 2
        let x = (event.layerX - width) / width
        let y = (event.layerY - height) / height
        setMousePosition({ x, y })
    }

    useEffect(() => {
        if (!ref.current) return
        let target = ref.current
        target.addEventListener('mousemove', updateMousePosition)

        return () => target.removeEventListener('mousemove', updateMousePosition)
    }, [ref])

    return mousePosition
}

export default useMousePosition

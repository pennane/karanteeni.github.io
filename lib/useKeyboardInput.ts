import { useEffect, useRef } from 'react'

const useKeyboardInput = (callback: () => void, keys: string[]) => {
    const savedCallback = useRef(callback)

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        const eventListener = (event: KeyboardEvent) => {
            if (keys.includes(event.key)) {
                savedCallback.current()
            }
        }

        document.addEventListener('keydown', eventListener)

        return () => {
            document.removeEventListener('keydown', eventListener)
        }
    }, [keys])
}

export default useKeyboardInput

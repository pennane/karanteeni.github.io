import { useState } from 'react'
import useIsomorphicLayoutEffect from './useIsomporphicLayoutEffect'

const useMediaQuery = () => {
    const [screenSize, setScreenSize] = useState([0, 0])

    useIsomorphicLayoutEffect(() => {
        function updateScreenSize() {
            setScreenSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateScreenSize)
        updateScreenSize()
        return () => window.removeEventListener('resize', updateScreenSize)
    }, [])

    return screenSize
}

export default useMediaQuery

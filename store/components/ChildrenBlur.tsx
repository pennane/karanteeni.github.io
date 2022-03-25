import { useCallback } from 'react'

export default function ChildrenBlur({ children, onBlur, ...props }) {
    const handleBlur = useCallback(
        (e) => {
            const currentTarget = e.currentTarget
            requestAnimationFrame(() => {
                if (!currentTarget.contains(document.activeElement)) {
                    onBlur()
                }
            })
        },
        [onBlur]
    )

    return (
        <div {...props} onBlur={handleBlur}>
            {children}
        </div>
    )
}

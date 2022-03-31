import style from '../../store/store.module.css'

const IncrementDecrement = ({
    onIncrement,
    onDecrement,
    customClass
}: {
    onIncrement: any
    onDecrement: any
    customClass?: string
}) => {
    return (
        <div className={customClass ? `${style['increment-decrement']} ${customClass}` : style['increment-decrement']}>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
        </div>
    )
}

export default IncrementDecrement

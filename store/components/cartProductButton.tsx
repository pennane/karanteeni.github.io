import { useContext } from 'react'
import { AppContext } from '../context'
import { addProductAction, incrementProductAmount, decrementProductAmount } from '../reducer'
import IncrementDecrement from './incrementDecrement'
import style from '../../store/store.module.css'

const CartProductButton = ({ id }: { id: string }) => {
    const { state, dispatch } = useContext(AppContext)
    const cartProduct = state.cart.find((c) => c.product.id === id)
    const someInCart = cartProduct && cartProduct.amount > 0
    return (
        <div>
            {!someInCart && <button onClick={() => dispatch(addProductAction(id))}>Lisää ostoskoriin</button>}
            {someInCart && (
                <div>
                    {cartProduct.amount} ostoskorissa{' '}
                    <IncrementDecrement
                        customClass={style['inline']}
                        onIncrement={() => dispatch(incrementProductAmount(id))}
                        onDecrement={() => dispatch(decrementProductAmount(id))}
                    />
                </div>
            )}
        </div>
    )
}

export default CartProductButton

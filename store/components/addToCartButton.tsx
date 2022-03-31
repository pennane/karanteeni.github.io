import { useContext } from 'react'
import { useToasts } from 'react-toast-notifications'
import { AppContext } from '../context'
import { addProductAction, incrementProductAmount, decrementProductAmount } from '../reducer'
import { Product } from '../types'
import IncrementDecrement from './incrementDecrement'

import style from '../../store/store.module.css'

const AddToCartButton = ({ product }: { product: Product }) => {
    const { state, dispatch } = useContext(AppContext)
    const { addToast } = useToasts()

    const cartProduct = state.cart.find((c) => c.product.id === product.id)
    const someInCart = cartProduct && cartProduct.amount > 0

    function onAddClick() {
        dispatch(addProductAction(product.id))
        addToast(product.name + ' lisätty ostoskoriin', {
            appearance: 'success',
            autoDismiss: true,
            id: 'inc' + product.id
        })
    }

    function onIncrementClick() {
        dispatch(incrementProductAmount(product.id))
        addToast(product.name + ' lisätty ostoskoriin', {
            appearance: 'success',
            autoDismiss: true,
            id: 'inc' + product.id
        })
    }

    function onDecrementClick() {
        dispatch(decrementProductAmount(product.id))
        addToast(product.name + ' poistettu ostoskorista', {
            appearance: 'success',
            autoDismiss: true,
            id: 'dec' + product.id
        })
    }

    return (
        <div>
            {!someInCart && (
                <button className={style['add-to-cart']} onClick={onAddClick}>
                    Lisää ostoskoriin
                </button>
            )}
            {someInCart && (
                <div>
                    <span className={style['light']}>{cartProduct.amount} ostoskorissa</span>
                    <IncrementDecrement onIncrement={onIncrementClick} onDecrement={onDecrementClick} />
                </div>
            )}
        </div>
    )
}

export default AddToCartButton

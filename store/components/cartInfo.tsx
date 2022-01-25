import { useContext } from 'react'
import { AppContext } from '../context'
import { centsToEur } from '../util'

import style from '../store.module.css'

const CartInfo = () => {
    const { state } = useContext(AppContext)
    const productsInCart = state.cart.reduce((total, current) => total + current.amount, 0)
    return (
        <div className={style['cart-info']}>
            {productsInCart > 0 && (
                <div>
                    <span className={style['price']}>
                        {centsToEur(
                            state.cart.reduce((total, current) => total + current.amount * current.product.price, 0)
                        )}
                    </span>
                </div>
            )}
        </div>
    )
}

export default CartInfo

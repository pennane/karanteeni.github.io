import { CartProduct as PaymentProduct } from '../types'
import { centsToEur } from '../util'
import CartProductButton from './cartProductButton'

import style from '../store.module.css'
import Link from 'next/link'

const PaymentProduct = ({ cartProduct }: { cartProduct: PaymentProduct }) => {
    return (
        <div className={style['cart-product']}>
            <h3>{cartProduct.product.name}</h3>
            <p>
                {centsToEur(cartProduct.product.price * cartProduct.amount)}{' '}
                <span className={style['light']}>
                    ({cartProduct.amount}*{centsToEur(cartProduct.product.price)})
                </span>
            </p>
        </div>
    )
}

export default PaymentProduct

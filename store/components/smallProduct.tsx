import { Product } from '../types'
import { centsToEur } from '../util'

import style from '../store.module.css'
import Link from 'next/link'
import ProductImage from './productImage'

const SmallProduct = ({ product }: { product: Product }) => {
    return (
        <div className={style['small-product']}>
            <Link href={'/kauppa/tuotteet/' + product.type + '/' + product.id}>
                <a>
                    <h3>{product.name}</h3>
                </a>
            </Link>
            <ProductImage product={product} height={100} width={200} />

            <p className={style['product-description']}>{product.description}</p>
            <p className={style['price']}>{centsToEur(product.price)}</p>
        </div>
    )
}

export default SmallProduct

import { Product } from '../types'
import { centsToEur } from '../util'
import AddToCartButton from './addToCartButton'

import style from '../store.module.css'
import ProductImage from './productImage'

const LargeProduct = ({ product }: { product: Product }) => {
    return (
        <div className={style['large-product']}>
            <h2>{product.name}</h2>
            <ProductImage product={product} height={200} width={400} />

            <div className={style['large-product-center']}>
                {product.sale && (
                    <>
                        <p className={style['price']}>{centsToEur(product.price)}</p>
                        <div className={style['sale']}>
                            {product.originalPrice && (
                                <p className={style['old-price']}>{centsToEur(product.originalPrice)}</p>
                            )}
                        </div>
                    </>
                )}
                {!product.sale && <p className={style['price']}>{centsToEur(product.price)}</p>}

                <AddToCartButton product={product} />
            </div>

            <section className={style['emphasize']}>
                <p className={style['product-description']}>{product.description}</p>
            </section>
        </div>
    )
}

export default LargeProduct

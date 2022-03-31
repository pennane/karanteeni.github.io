import { Product } from '../types'
// import Image from 'next/image'
import style from '../store.module.css'

const ProductImage = ({ product, height, width }: { product: Product; height: number; width: number }) => {
    if (!product.image) return <img src={'/store/placeholder.png'} height={height} width={width} />
    const src = '/store/' + product.type + '/' + product.image
    return (
        <div className={style['product-image']}>
            <img src={src} height={height} width={width} alt="" />
        </div>
    )
}

export default ProductImage

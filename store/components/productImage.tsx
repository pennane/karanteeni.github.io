import { Product } from '../types'
import Image from 'next/image'
import style from '../store.module.css'

const ProductImage = ({ product, height, width }: { product: Product; height: number; width: number }) => {
    if (!product.image) return <Image src={'/store/placeholder.png'} height={height} width={width} />
    const src = '/store/' + product.type + '/' + product.image
    return (
        <div className={style['product-image']}>
            <Image src={src} height={height} width={width} />
        </div>
    )
}

export default ProductImage

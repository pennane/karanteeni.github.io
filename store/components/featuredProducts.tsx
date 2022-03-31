import { products } from '../products'
import style from '../store.module.css'
import { Product } from '../types'
import SmallProduct from './smallProduct'

const FeaturedProducts = () => {
    const featuredIds: string[] = ['5h-peliaikaa', '100d-peliaikaa', 'karanteeni-rintamerkki']
    const FeaturedProducts = featuredIds.map((id) => products.get(id)).filter(Boolean) as Product[]

    return (
        <section className={style['emphasize']}>
            <h2>Suosittelemme</h2>
            <div className={style['aside-products-list']}>
                {FeaturedProducts && FeaturedProducts.map((p) => <SmallProduct product={p} key={p.id} />)}
            </div>
        </section>
    )
}

export default FeaturedProducts

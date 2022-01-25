import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { ParsedUrlQuery } from 'querystring'
import Layout from '../../components/layout/layout'
import SmallProduct from '../../store/components/smallProduct'
import StoreNavigation from '../../store/components/storeNavigation'
import { products } from '../../store/products'
import style from '../../store/store.module.css'
import { Product } from '../../store/types'

export default function Tuotetyypit({ products }: { products: { [type: string]: Product[] } }) {
    return (
        <Layout title={'Tuotetyypit'}>
            <StoreNavigation />
            <div className={style['type-page']}>
                {products &&
                    Object.entries(products).map(([type, products], i) => {
                        return (
                            <section key={i}>
                                <h2>{type}</h2>
                                <div className={style['aside-products-list']}>
                                    {products.slice(0, 3).map((p) => (
                                        <SmallProduct key={p.id} product={p} />
                                    ))}
                                </div>
                                <div className={style['open-type-link']}>
                                    <Link href={'/kauppa/tuotteet/' + type}>Kaikki tuotetyypin tuotteet</Link>
                                </div>
                            </section>
                        )
                    })}
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const out: { [type: string]: Product[] } = {}

    for (const [_id, product] of products) {
        if (product.type in out) {
            out[product.type].push(product)
        } else {
            out[product.type] = [product]
        }
    }

    return {
        props: {
            products: out
        }
    }
}

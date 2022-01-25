import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Layout from '../../../components/layout/layout'
import SmallProduct from '../../../store/components/smallProduct'
import StoreNavigation from '../../../store/components/storeNavigation'
import { products } from '../../../store/products'
import { Product } from '../../../store/types'

import style from '../../../store/store.module.css'

export default function Tuotetyyppi({ type, products }: { type: string; products: Product[] }) {
    return (
        <Layout title={type + ' tuotteet'}>
            <StoreNavigation />
            <div className={style['type-page']}>
                <h2>{type}</h2>
                <div className={style['aside-products-list']}>
                    {products && products.map((p) => <SmallProduct key={p.id} product={p} />)}
                </div>
            </div>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [...new Set([...products.values()].map((p) => p.type))].map((t) => {
        return { params: { type: t } }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const type = (params as ParsedUrlQuery).type as string
    const typeProducts = [...products.values()].filter((p) => p.type === type)

    return {
        props: {
            products: typeProducts,
            type
        }
    }
}

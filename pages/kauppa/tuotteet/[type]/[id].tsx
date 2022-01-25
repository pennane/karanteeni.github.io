import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import Layout from '../../../../components/layout/layout'

import { Product } from '../../../../store/types'
import { products } from '../../../../store/products'
import LargeProduct from '../../../../store/components/largeProduct'
import SmallProduct from '../../../../store/components/smallProduct'

import style from '../../../../store/store.module.css'
import StoreNavigation from '../../../../store/components/storeNavigation'

export default function Tuote({ product, similar }: { product: Product; similar: Product[] }) {
    return (
        <Layout title="Kauppa" description={product.name}>
            <StoreNavigation />
            <div className={style['product-page']}>
                <div className={style['product-page-main']}>
                    <LargeProduct product={product} />
                </div>

                <aside className={style['similar-products-aside']}>
                    <h2>Samankaltaisia tuotteita:</h2>
                    <div className={style['aside-products-list']}>
                        {similar && similar.map((p) => <SmallProduct key={p.id} product={p} />)}
                    </div>
                </aside>
            </div>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [...products.values()].map((p) => {
        return { params: { id: p.id, type: p.type } }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = (params as ParsedUrlQuery).id as string
    const type = (params as ParsedUrlQuery).type as string
    const product = products.get(id) as Product
    const similar = [...products.values()].filter((p) => p.type === type && p.id !== id).slice(0, 6)

    return {
        props: {
            product,
            similar
        }
    }
}

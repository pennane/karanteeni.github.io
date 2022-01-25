import React from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'
import SmallProduct from '../store/components/smallProduct'

import { products } from '../store/products'

import style from '../store/store.module.css'
import StoreNavigation from '../store/components/storeNavigation'
import { GetStaticProps } from 'next/types'
import { Product } from '../store/types'
import FeaturedProducts from '../store/components/featuredProducts'
import Link from 'next/link'

const Kauppa = ({ products }: { products: { [type: string]: Product[] } }) => {
    return (
        <Layout title="Kauppa" description="Osta minecraft tavaroita, peliaikaa tai Karanteeni mechiä!">
            <StoreNavigation />
            <Heading
                heading="Kauppa"
                lead="Tarjoamme pelinsisäisiä tuotteita palvelimelle, sekä tarkasti suunniteltua Karanteenimerchiä™"
            />
            <section className={style['emphasize']}>
                <ul>
                    <li>Osta peliaikaa, ja speedrunaa vaikka kuolemattomaksi!</li>
                    <li>Myynnissä kotiin tilattavia tuotteita, sekä pelinsisäisiä tuotteita palvelimelle</li>
                    <li>Ilmaiset postikulut yli 100€ tilauksiin. Muuten maksu on 7€.</li>
                    <li>Monta maksutapaa. Myös CSGO skineillä voi maksaa.</li>
                </ul>
            </section>

            <FeaturedProducts />

            {products &&
                Object.entries(products).map(([type, products], i) => {
                    return (
                        <section key={i} className={style['emphasize']}>
                            <h2>{type}</h2>
                            <div className={style['aside-products-list']}>
                                {products && products.slice(0, 3).map((p) => <SmallProduct product={p} key={p.id} />)}
                            </div>
                            <div className={style['open-type-link']}>
                                <Link href={'/kauppa/tuotteet/' + type}>Kaikki tuotetyypin tuotteet</Link>
                            </div>
                        </section>
                    )
                })}
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

export default Kauppa

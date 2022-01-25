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
        <Layout title="Kauppa" description="Osta peliaikaa palvelimelle tai kaunista merchiä omaan kotiin!">
            <StoreNavigation />
            <Heading
                heading="Kauppa"
                lead="Tarjoamme peliaikaa palvelimelle, sekä tarkasti suunniteltua Karanteeni merchiä™"
            />
            <section className={style['emphasize']}>
                <ul>
                    <li>Osta peliaikaa, ja speedrunaa kuolemattomaksi!</li>
                    <li>Myynnissä tuotteita palvelimelle sekä oikeaankin elämään</li>
                    <li>Yli 100€ tilauksiin ei peritä postimaksua. Muuten 5€</li>
                    <li>Monta maksutapaa. Myös CSGO skineillä voi maksaa</li>
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
                                <Link href={'/kauppa/tuotteet/' + type}>Kaikki tyypin tuotteet</Link>
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

import Link from 'next/link'
import React from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'

const Lataukset = () => {
    return (
        <Layout title="Lataukset" description="Karanteenin vanhat kartat ja muu mahdollinen ladattava sisältö">
            <Heading heading="Ladattava sisältö" lead="Karanteenin kartat ja mahdollinen muu ladattava" />
        </Layout>
    )
}

export default Lataukset

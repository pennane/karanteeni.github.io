import Link from 'next/link'
import dynamic from 'next/dynamic'
import React from 'react'

const MinecraftCitation = dynamic(() => import('./minecraftcitation'), { ssr: false })

const HomeHead = () => {
    return (
        <div className="home-hero">
            <div className="home-hero-main">
                <h1>Karanteeni</h1>
                <p className="lead"> Serveri, joka vangitsee sinut!</p>

                <Link href="/muutokset">
                    <div className="button changelog">Muutosloki</div>
                </Link>
            </div>
            <div>
                <MinecraftCitation />
            </div>
        </div>
    )
}

export default HomeHead

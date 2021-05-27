import Link from 'next/link'
import React from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'

const Hoks = () => {
    return (
        <Layout
            title="Hyvä tietää"
            description="Karanteeni on vuodesta 2016 asti toiminut suomalainen Minecraft palvelin. Karanteenin alkuperäiset perustajat ovat Emmazki, Jomeee ja
            Nuubles, joista Jomeee ja Nuubles ovat vielä aktiivisina pyörimässä. Palvelimella keskeisin pelimuoto on omilla ominaisuuksilla paranneltu Survival.
            Palvelimelle on palaamassa Creative ja erinäköiset minipelit."
        >
            <Heading heading="Hyvä tietää!" lead="Karanteeni tiivistettynä" />
            <p>
                Karanteeni on vuodesta 2016 asti toiminut suomalainen Minecraft palvelin. Karanteenin alkuperäiset
                perustajat ovat Emmazki, Jomeee ja Nuubles, joista Jomeee ja Nuubles ovat vielä aktiivisina pyörimässä.
                Palvelimella keskeisin pelimuoto on omilla ominaisuuksilla paranneltu Survival. Palvelimelle on
                palaamassa Creative ja erinäköiset minipelit.
            </p>
            <p>
                Palvelimen toimintaidea on se, että mitä pidempään pelaat serverillä, sitä parempia ominaisuuksia avaat
                käyttöösi. Peliajalla kerättävistä ominaisuuksista voi lukea lisää{' '}
                <Link href="/rankit">rankit sivulta</Link>. Muista Karanteenin ominaisuukista voi lukea{' '}
                <Link href="ominaisuudet">ominaisuudet sivulla</Link>.
            </p>
            <p>
                Palvelimella järjestetään vuosittain erilaisia juhlia (esim joulujuhlat, synttärit ja juhannusbileet).
                Survival resetoidaan suunnilleen aina 7 kuukauden välein jota ennen aina pelaajien annetaan räjäyttää
                vanha mappi uuden tieltä.
            </p>
            <p>
                Palvelin on täysin omakustanteinen, eli lahjoitusten ja ylläpitäjien varassa. Lahjoitukset käytetään
                palvelimen käynnissäpitämiseen sekä erinäköisten tapahtumien järjestämiseen. Kaikki vähintään 10 euroa
                lahjoittavat saavat itselleen kivoja ominaisuuksia palvelimelle sekä Discordiin. Lahjoittamisesta voi
                lukea lisää <Link href="/lahjoitus">lahjoitus sivulta</Link>.
            </p>

            <h3>Muita pointteja</h3>
            <ul>
                <li>
                    Karanteenissa valuuttana toimii pennit (❂). Pennejä voi ansaita äänestämällä Karanteenia{' '}
                    <code>/vote</code> ja käymällä kauppaa toisten pelaajien kanssa.
                </li>
                <li>
                    Karanteenissa ylläpito suojaa alueesi. Pyydäthän ylläpitoa suojausta, niin vältytään turhilta grief
                    tapauksilta.
                </li>
            </ul>
        </Layout>
    )
}

export default Hoks

import Head from 'next/head'
import React from 'react'
import Heading from '../components/layout/heading'
import Layout, { siteTitle } from '../components/layout/layout'
import Modal from '../components/modal'
import donators from '../data/donators.json'

interface Donator {
    date: string
    name: string
    amount: string
    heart: string
}

// Forces zeroes before single number date parts
const formatDate = (d: string): string => {
    let dateParts = d.split('.')
    return dateParts.map((part) => part.padStart(2, '0')).join('.')
}

export default function Lahjoitus() {
    return (
        <Layout
            title="Lahjoittaminen"
            description="Tue karanteenia lahjoittamalla! Palvelin maksetaan täysin omilla rahoilla, pienetkin lahjoitukset ovat erittäin tervetulleita."
        >
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Modal title="Lahjoitukset">
                <p>
                    Koska serveri maksetaan täysin omilla rahoilla, pienetkin lahjoitukset ovat erittäin tervetulleita.
                </p>
                <p>
                    Jos haluaisit lahjoittaa, voit lahjoittaa sen suoraan{' '}
                    <b>
                        <a href="https://www.paypal.me/karanteeni" target="_blank" rel="noreferrer">
                            Karanteenin PayPaliin
                        </a>
                    </b>{' '}
                    tai ota yhteyttä Discordissa Jome#7320, niin katsotaan kuinka voit lahjoituksen tehdä. Parhaat tavat
                    ovat Paysafecard ja PayPal. (<b>HUOM!</b> Lahjoittaessasi muista kertoa discord/minecraft nimesi)
                </p>
                <p>
                    Kaikki vähintään 10 € lahjoittavat saavat Discordiin sekä palvelimelle lahjoittaja roolin.
                    Palvelimella aukeaa kyky asettaa nimeen{' '}
                    <span className="rgb">
                        <span className="offset1">R</span>
                        <span className="offset2">G</span>
                        <span className="offset3">B</span>
                    </span>{' '}
                    värejä, kyltteihin värejä värikoodeilla, sekä tabiin näkyvyyttä (värikkäät hakasulkeet).
                    Ominaisuuksia tulee ajankanssa lisää, ja ne aukeavat automaattisesti kaikille vanhoille
                    lahjoittajille.
                </p>
            </Modal>
            <div className="lahjoitusdokumentti">
                <Heading
                    heading="Lahjoittajat"
                    lead="Tälle sivulle on kerätty lahjoittajat. Kiitos tuesta ja uskollisuudestanne! ♥"
                />
                <div className="lahjoitustablewrapper">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Pvm</th>
                                <th scope="col">Nimi</th>
                                <th scope="col">Summa</th>
                                <th scope="col">♥</th>
                            </tr>
                        </thead>
                        <tbody>
                            {donators &&
                                donators.map((donator: Donator, i) => (
                                    <tr key={i}>
                                        <th>{formatDate(donator.date)}</th>
                                        <td>{donator.name}</td>
                                        <td>{donator.amount}</td>
                                        <td>{donator.heart}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

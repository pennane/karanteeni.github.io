import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'
import ReactTooltip from 'react-tooltip'
import kuolemattomat from '../data/kuolemattomat.json'

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AdminCard from '../components/admincard'
import Link from 'next/link'

const Rank = ({ color, name, time, children }) => {
    return (
        <div className="rank card">
            <div className={'rank-card-body ' + color}>
                <h2 className={'card-title'}>
                    <span className={'rank-name-text'}>{name}</span> <span className="time">({time})</span>
                </h2>
                {children}
            </div>
        </div>
    )
}

const CommandTable = ({ children }) => {
    return (
        <table className="table table-striped table-dark">
            <tbody>{children}</tbody>
        </table>
    )
}

const CommandRow = (props) => {
    return <tr>{props.children}</tr>
}

const Command = ({ info, command, title }: { info?: boolean; command?: string; title?: string }) => {
    return (
        <td>
            {command}
            {info && (
                <>
                    {' '}
                    <span
                        className="rank-tooltip"
                        data-tip={title}
                        data-toggle="tooltip"
                        data-placement="right"
                        title={title}
                    >
                        <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                    </span>
                    <ReactTooltip />
                </>
            )}
        </td>
    )
}

const SetHome = ({ count }) => {
    return <Command info title={count + ' kpl'} command="/sethome" />
}

const Others = ({ text, tip }: { text: string; tip?: string }) => {
    return (
        <div>
            {text} &nbsp;
            {tip && (
                <>
                    <span data-tip={tip} data-toggle="tooltip" data-placement="right" title={tip}>
                        <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                    </span>
                    <ReactTooltip />
                </>
            )}
        </div>
    )
}

const ElotonRaihnas = (props) => {
    return (
        <div className="rank-grid">
            <Rank name="Eloton" time="0h" color="c-eloton ">
                <CommandTable>
                    <CommandRow>
                        <SetHome count="1" />
                        <Command />
                    </CommandRow>
                </CommandTable>
                <div className="rank-others">
                    <h3>Muuta:</h3>
                    <p>
                        Kaikilla pelaajilla olevat komennot ja toiminnot löytyvät{' '}
                        <Link href="ominaisuudet">ominaisuudet</Link> sivulta.
                    </p>
                </div>
            </Rank>
            <Rank name="Raihnas" time="5h" color="c-raihnas ">
                <CommandTable>
                    <CommandRow>
                        <SetHome count="2" />
                        <Command command="/workbench" />
                    </CommandRow>
                    <CommandRow>
                        <Command command="/hat" />
                        <Command command="/calculate" />
                    </CommandRow>
                </CommandTable>
            </Rank>
        </div>
    )
}

const SisukasParantuva = () => {
    return (
        <div className="rank-grid">
            <Rank name="Sisukas" time="1d" color="c-sisukas ">
                <CommandTable>
                    <CommandRow>
                        <SetHome count="6" />
                        <Command command="/near" />
                    </CommandRow>
                    <CommandRow>
                        <Command
                            info
                            title="Taikamatto, 5x5 kokoinen lasimatto allasi, jolla voit leijua ilmassa, sekä lentää."
                            command="/mc"
                        />
                        <Command info title="Suunnittele oma taikamattosi!" command="/mc design" />
                    </CommandRow>
                    <CommandRow>
                        <Command command="/enderchest" />
                        <Command />
                    </CommandRow>
                </CommandTable>
                <div className="rank-others">
                    <h3>Muuta:</h3>
                    <p>
                        Kyky käyttää ja craftata <Link href="/recipes#builderswand">Builders Wand</Link>.
                    </p>
                    <Others text="Kaksi uutta väriä taikamattoon (mc)" tip="Vaalean harmaa (oletus) ja läpinäkyvä" />
                </div>
            </Rank>
            <Rank name="Parantuva" time="5d" color="c-parantuva ">
                <CommandTable>
                    <CommandRow>
                        <SetHome count="8" />
                        <Command command="/feed" />
                    </CommandRow>
                    <CommandRow>
                        <Command
                            info
                            title="Nimen täytyy olla samankaltainen Minecraft nimesi kanssa tunnistautumisen vuoksi."
                            command="/nick"
                        />
                        <Command info title="Voit teleportata koordinaatteihin." command="/tp <x> <y> <z>" />
                    </CommandRow>
                </CommandTable>
                <div className="rank-others">
                    <h3>Muuta:</h3>
                    <Others
                        text="Neljä uutta väriä taikamattoon (mc)"
                        tip="Valkoinen, harmaa, vaalean harmaa ja sininen"
                    />
                    <Others
                        text="Kyky hakata spawnereita ilman Silk Touchia"
                        tip="Tarvitset silti hakun kerätäksesi sen!"
                    />
                </div>
            </Rank>
        </div>
    )
}

const ImmuuniParantaja = () => {
    return (
        <div className="rank-grid">
            <Rank name="Immuuni" time="10d" color="c-immuuni ">
                <CommandTable>
                    <CommandRow>
                        <SetHome count="12" />
                        <Command
                            info
                            title="Estää pelaajien teleporttipyynnöt ja teleporttaukset"
                            command="/tptoggle"
                        />
                    </CommandRow>
                    <CommandRow>
                        <Command command="/fly" />
                        <Command info title="Nimeää kädessäsi olevan esineen!" command="/nimeä" />
                    </CommandRow>
                    <CommandRow>
                        <Command
                            info
                            title="Vaihtaa spawnerin tyyppiä. Ota spawner käteen kun suoritat komentoa."
                            command="/spawner"
                        />
                        <Command command="/tp <pelaaja>" />
                    </CommandRow>
                </CommandTable>
                <div className="rank-others">
                    <h3>Muuta:</h3>
                    <Others text="Kaksi uutta väriä taikamattoon (mc)" tip="Keltainen ja ruskea" />
                </div>
            </Rank>
            <Rank name="Parantaja" time="30d" color="c-parantaja ">
                <CommandTable>
                    <CommandRow>
                        <SetHome count="16" />
                        <Command />
                    </CommandRow>
                </CommandTable>
                <div className="rank-others">
                    <h3>Muuta:</h3>
                    <Others
                        text="Uusia tapoja nimetä tavaroita /nimeä komennolla"
                        tip="Lihavointi, kursivointi, randomisointi ja alleviivaus"
                    />
                    <Others text="Kaksi uutta väriä taikamattoon (mc)" tip="Lime ja musta" />
                </div>
            </Rank>
        </div>
    )
}

const NekroKuolematon = () => {
    return (
        <div className="rank-grid">
            <Rank name="Nekromantikko" time="60d" color="c-nekromantikko ">
                <CommandTable>
                    <CommandRow>
                        <SetHome count="18" />
                        <Command info title="Kyky tarkastella blockeja" command="/co i" />
                    </CommandRow>
                </CommandTable>
                <div className="rank-others">
                    <h3>Muuta:</h3>
                    <Others text="Kyky asettaa täys RGB värillinen nick." tip="Syntaksilla &amp;#RRGGBBteksti" />
                    <Others
                        text="Kyky nimetä tavaroita /nimeä käyttäen täys RGB värejä"
                        tip="Syntaksilla &amp;#RRGGBBteksti"
                    />
                    <Others text="Nekromatikkoja ei voi hiljentää /ignore komennolla." />
                    <Others text="Kaksi uutta väriä taikamattoon (mc)" tip="Magenta ja punainen" />
                    <Others text="Lisäpalikoita taikamattoon (mc)" tip="jääblock" />
                </div>
            </Rank>
            <Rank name="Kuolematon" time="100d" color="c-kuolematon ">
                <CommandTable>
                    <CommandRow>
                        <SetHome count="18" />
                        <Command />
                    </CommandRow>
                </CommandTable>
                <div className="rank-others">
                    <h3>Muuta:</h3>
                    <Others
                        text="Kuusi uutta väriä taikamattoon (mc)"
                        tip="Pinkki, syaani, purppura, oranssi, vihreä ja vaalean sininen"
                    />
                    <Others text="Lisäpalikka taikamattoon" tip="Barrier block" />
                </div>
            </Rank>
        </div>
    )
}

const RankTables = () => {
    return (
        <div>
            <ElotonRaihnas />
            <SisukasParantuva />
            <ImmuuniParantaja />
            <NekroKuolematon />
        </div>
    )
}

const Rankit = () => {
    return (
        <Layout title="Rankit" description="Karanteenin pelaaja-arvot">
            <Heading heading="Rankit" lead="Tiedot Karanteenin rankeista" />

            <p>
                Karanteenissa on kahdeksan peliaikaan perustuvaa rankkia, jotka tuovat <b>lisäominaisuuksia</b> ajan
                kuluessa. Rankki nousee automaattisesti, kun vaadittu peliaika on saavutettu. Peliaika ei keräänny
                afkatessa. Peliajan näkee komennolla <code>/peliaika</code>, ja toisten pelaajien{' '}
                <code>/peliaika pelaajan_nimi</code>.
            </p>
            <p>Peliaikaan perustuvien rakkien lisäksi, Karanteenissa on myös muutama muu eritysrankki.</p>
            <ul>
                <li>
                    Lahjoittaja (kaikille, jotka lahjoittavat vähintään 10€ palvelimelle Ks.{' '}
                    <Link href="/lahjoitus">lahjoitus sivu</Link>)
                </li>
                <li>
                    Rikkoja (sellaisille pelaajille, jotka auttavat ylläpitoa löytämään palvelimelta sitä hajottavia
                    asioita)
                </li>
            </ul>
            <p>
                Karanteenissa kaikilla pelaajilla on rankkiominaisuuksien lisäksi käytössään muita komentoja ja
                toimintoja. Niistä voit lukea <Link href="/ominaisuudet">täällä</Link>.
            </p>
            <p>
                Alla nähtävissä kunkin rankin peliaikavaatimus sekä avautuvat oikeudet. Jos joku komento askarruttaa,
                niin kysy rohkeasti ylläpidolta!
            </p>
            <RankTables />
            {/* {kuolemattomat && (
                <div>
                    <p className="lead">
                        Viimeisenä kunniamainintana kaikki Karanteenin pelaajat, jotka ovat pelanneet itsensä Kuolematon
                        rankkiin asti!
                    </p>
                    <div className="rank">
                        <h3 className="tag kuolematon minecraft">Kuolemattomat</h3>
                        <div className="admin-card-wrapper">
                            {kuolemattomat.map((player, i) => (
                                <AdminCard {...player} rank={'kuolematon'} key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            )} */}
        </Layout>
    )
}

export default Rankit

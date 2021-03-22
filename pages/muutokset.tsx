import React, { useState } from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'

const Month = ({ month, showingMonth, updateShowing, label, children }) => {
    const showing = month === showingMonth
    return (
        <div className="card bg-transparent border-gold">
            <div className="card-header" id={month + '_1'}>
                <h4>
                    <button
                        type="button"
                        data-toggle="collapse"
                        data-target={'#' + month}
                        aria-expanded="false"
                        aria-controls={month}
                        onClick={(e) => updateShowing(showing ? 'null' : month)}
                    >
                        {label}
                    </button>
                </h4>
            </div>
            <div id={month} className={'collapse ' + (showing ? 'show' : '')} aria-labelledby={month + '_1'} data-parent="#muutokset">
                <div className="card-body">{children}</div>
            </div>
        </div>
    )
}

const Change = ({ children }) => {
    return <li>{children}</li>
}

const Changelist = ({ date, children }: { date: string; children: React.ReactNode }) => {
    return (
        <div>
            <p>{date}</p>
            <ul>{children}</ul>
        </div>
    )
}

const Changelog = () => {
    const [showingMonth, setShowingMonth] = useState('maaliskuu2021')
    const updateShowing = (val) => {
        setShowingMonth(val)
    }
    return (
        <div>
            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="maaliskuu2021" label="Maaliskuu 2021">
                <Changelist date="22.3.2021">
                    <Change>Päivitetty afk-kickkiä</Change>
                    <Change>Päivitetty palvelinta</Change>
                    <Change>Päivitetty nettisivut React sivuiksi</Change>
                </Changelist>
            </Month>
            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="helmikuu2021" label="Helmikuu 2021">
                <Changelist date="2.6.2021">
                    <Change>uwu</Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="tammikuu2021" label="Tammikuu 2021">
                <Changelist date="21.1.2021">
                    <Change>Lisätty mail komennot</Change>
                </Changelist>

                <Changelist date="13.1.2021">
                    <Change>
                        Lisätty{' '}
                        <a href="http://map.karanteeni.net" target="_blank">
                            dynmap
                        </a>{' '}
                    </Change>
                </Changelist>

                <Changelist date="8.1.2021">
                    <Change>
                        Uusi <a href="/ominaisuudet">ominaisuudet</a> sivu
                    </Change>
                </Changelist>

                <Changelist date="1.1.2021">
                    <Change>Unbanneja voi nyt hakea nettisivuilta! https://karanteeni.net/unban</Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="joulukuu2020" label="Joulukuu 2020">
                <Changelist date="31.12.2020">
                    <Change>Lisätty hidden groupit. Mahdollistavat lisärankit muuttamatta pelaajan päärankkia.</Change>
                    <Change>Lisätty lahjoittajille tabiin oranssit [] merkit.</Change>
                </Changelist>

                <Changelist date="27.12.2020">
                    <Change>Palvelin osaa tulkita kirjoitetut komennot, jotka on alkavat / sijasta 7 merkillä.</Change>
                </Changelist>

                <Changelist date="19.12.2020">
                    <Change>Lisätty resepti nametagille</Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="marraskuu2020" label="Marraskuu 2020">
                <Changelist date="27.11.2020">
                    <Change>Vähennetty mobien määrää per pelaaja 28 -&gt; 24.</Change>
                </Changelist>

                <Changelist date="25.11.2020">
                    <Change>Lisätty respawniin tuki respawn anchoreille, ei joudu enää spawnille kun respawnaa.</Change>
                </Changelist>

                <Changelist date="22.11.2020">
                    <Change>Lisätty kaksi (2) automaattista uudelleenkäynnistystä.</Change>
                </Changelist>

                <Changelist date="17.11.2020">
                    <Change>Lisätty vinkkeihin lyhyt ohje mitä tehdä, jos joku häiriköi</Change>
                </Changelist>

                <Changelist date="14.11.2020">
                    <Change>
                        Poistettu <code>/lakanakana</code>.
                    </Change>
                    <Change>
                        Lisätty <code>/iita</code>.
                    </Change>
                    <Change>
                        <code>/tptoggle</code> toimii oletettavasti. Ylempirankkiset eivät enää yliaja, vaan heitä kohdellaan
                        tasavertaisesti.
                    </Change>
                    <Change>Potentiaalinen palvelinvirhe korjattu.</Change>
                </Changelist>

                <Changelist date="9.11.2020">
                    <Change>Mobien spawnratea on pienennetty.</Change>
                </Changelist>

                <Changelist date="8.11.2020">
                    <Change>
                        Palautettu discordin minecraft-chattiin <code>/list</code>
                    </Change>
                </Changelist>

                <Changelist date="7.11.2020">
                    <Change>Armorstandin asentoja voi muuttaa oikeaklikkaamalla kyykyssä!</Change>
                </Changelist>

                <Changelist date="4.11.2020">
                    <Change>Palvelin päivitetty 1.16.4!</Change>
                    <Change>Palvelimella voi nyt craftaa onnenkeksejä.</Change>
                </Changelist>

                <Changelist date="1.11.2020">
                    <Change>Tab on palautettu Halloween ulkoasusta.</Change>
                    <Change>Lisätty etukäteen tilapäinen onnentoivotus uuteen mappiin.</Change>
                    <Change>Aikaisemmin hidastelleet votet pitäisi nyt toimia.</Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="lokakuu2020" label="Lokakuu 2020">
                <Changelist date="10.10.2020">
                    <Change>Halloween teemainen tabi.</Change>
                    <Change>Spawn on nyt halloween teemainen.</Change>
                    <Change>Aikaisemmin hidastelleet votet pitäisi nyt toimia.</Change>
                </Changelist>

                <Changelist date="9.10.2020">
                    <Change>Discord bot näyttää nyt roolit Minecraftin chatissa.</Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="syyskuu2020" label="Syyskuu 2020">
                <Changelist date="19.9.2020">
                    <Change>Päivitetty tabista palvelimen alkukirjain isoksi.</Change>
                </Changelist>

                <Changelist date="14.9.2020">
                    <Change>Sisukas-rankkisten (ja alempien) virheellinen viesti-ilmoitus oikeuksista on nyt korjattu.</Change>
                    <Change>Paranneltu turvallista teleporttia (onnistuu teleporttaamaan slabien päälle)</Change>
                </Changelist>

                <Changelist date="12.9.2020">
                    <Change>Added Russian language (thanks Inferdy &#x2764;).</Change>
                    <Change>Muutettu arvojen värit tukemaan RGB.</Change>
                </Changelist>

                <Changelist date="3.9.2020">
                    <Change>Päivitetty Jesari</Change>
                </Changelist>

                <Changelist date="1.9.2020">
                    <Change>Lisätty oikeus Nekromantikosta ylöspäin + lahjoittajille käyttää RGB-värejä pelinimessä.</Change>
                    <Change>Korjattu kääntäjässä bugi, joka rikkoi kääntäjän pelaajalla ollessa ei-tuettu kieli tietokannassa.</Change>
                    <Change>Lisätty tapa tehdä lätäköitä.</Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="elokuu2020" label="Elokuu 2020">
                <Changelist date="31.8.2020">
                    <Change>Chat-värit on tullut takaisin rgb tuella.</Change>
                    <Change>Parempi käyttäjien maininta chatissa.</Change>
                    <Change>Fixattu bugi, jossa pelaajalla oli ei-tuettu kieli ja hajotti kääntäjän.</Change>
                </Changelist>

                <Changelist date="30.8.2020">
                    <Change>Builders wand on nyt palvelimella</Change>
                </Changelist>

                <Changelist date="29.8.2020">
                    <Change>Lisätty ylösalaisin oleva kieli.</Change>
                    <Change>Päivitetty palvelin versioon 1.16.2!</Change>
                    <Change>Nether ja End resetattu.</Change>
                    <Change>Fixattu bugi, jossa kodin koordinaatti on negatiivinen ja jaollinen 16 =&gt; nakkaa virheen.</Change>
                    <Change>Rankkien välimuisti päivittyy -&gt; jos rankup ja relog, niin rankki pysyy samana.</Change>
                    <Change>Nettisivut päivitetty.</Change>
                    <Change>Uusi tabin gradient.</Change>
                    <Change>
                        <code>/music</code> on lisätty uudet Netherin musiikit.
                    </Change>
                    <Change>
                        <code>/music</code> kuuluvuutta on parannettu.
                    </Change>
                    <Change>Lisätty vanhat "koodit" takaisin palvelimelle.</Change>
                    <Change>Lisätty ääniviestejä palvelimelle.</Change>
                    <Change>Iron Golem pakottaa sinut pudottamaan housusi, kun lyö sinua.</Change>
                    <Change>Kuolinviestit jakautuu nyt maailmojen välillä.</Change>
                </Changelist>

                <Changelist date="15.8.2020">
                    <Change>Lisätty 1.16.2 tuki</Change>
                </Changelist>

                <Changelist date="13.8.2020">
                    <Change>Korjattu vinkki Netherin ja Endin resettaamisesta</Change>
                </Changelist>

                <Changelist date="7.8.2020">
                    <Change>Fixattu bugi yp-chatissa.</Change>
                    <Change>
                        Lisätty ilmoitus muistuttamaan pelaajia liittymisen yhteydessä <code>/warns</code> -komennosta.
                    </Change>
                </Changelist>

                <Changelist date="5.8.2020">
                    <Change>Palvelimen render distance nostettu 10 chunkkiin (+2 chunkkia edellisestä).</Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="heinäkuu2020" label="Heinäkuu 2020">
                <Changelist date="22.7.2020">
                    <Change>
                        Spawnille avattu parkour! <code>/warp parkour</code>
                    </Change>
                </Changelist>

                <Changelist date="5.7.2020">
                    <Change>
                        <code>/alue</code> näyttää nyt jäsenten ja omistajien määrän suojauksessa.
                    </Change>
                    <Change>
                        <code>/alue</code> näyttää molemmat XY pisteet suojauksen koosta.
                    </Change>
                    <Change>
                        Lisätty <code>/manu</code>
                    </Change>
                    <Change>
                        Poistettu <code>/tank</code>
                    </Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="kesäkuu2020" label="Kesäkuu 2020">
                <Changelist date="25.6.2020">
                    <Change>Lisätty 1.16.1 tuki servulle!</Change>
                    <Change>Toisen pelaajan pelaaja-arvon klikkaaminen chatissa näyttää nyt kyseisen pelaajan peliajan oman sijaan.</Change>
                </Changelist>

                <Changelist date="18.6.2020">
                    <Change>Karanteenissa toimii VR</Change>
                    <Change>
                        Palvelimella voi nyt antaa lemmikkejä ja vapauttaa niitä komennoilla <code>/lemmikki anna &lt;pelaaja&gt;</code> ja
                        <code>/lemmikki vapauta</code>.
                    </Change>
                    <Change>
                        Palvelimella voi nyt tägätä ihmisiä chatissa käyttäen <code>@pelaajanimi</code>.
                    </Change>
                    <Change>
                        Lisätty <code>/säännöt</code> komento.
                    </Change>
                </Changelist>

                <Changelist date="3.6.2020">
                    <Change>Entity Activation Range nostettu.</Change>
                    <Change>Villagerin tradet pitäisi nyt restockaa nopeammin.</Change>
                    <Change>Fixattu ongelma, jossa pelaajat satunnaisesti jäivät jumiin chunkille.</Change>
                </Changelist>

                <Changelist date="1.6.2020">
                    <Change>Mobien tracking range on default.</Change>
                    <Change>Nether-portaalista voi nyt kuljettaa mobeja.</Change>
                    <Change>Lumouspöytä ehdottaa nyt oikeat lumoukset.</Change>
                    <Change>Spam fishing problem solved.</Change>
                    <Change>Villagereiden töiden resettaus fixed.</Change>
                    <Change>Netherin katolle on taas mahdollista päästä.</Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="toukokuu2020" label="Toukokuu 2020">
                <Changelist date="31.5.2020">
                    <Change>Lisätty info voteen, että siitä saa rahaa.</Change>
                </Changelist>

                <Changelist date="15.5.2020">
                    <Change>Yö kelautuu nopeammin. Mitä useampi nukkuu, sitä nopeampi yö.</Change>
                </Changelist>

                <Changelist date="14.5.2020">
                    <Change>
                        Lisätty komento <code>/votestreak [nimi]</code>. Ilman nimeä näkee oman voteputken.
                    </Change>
                </Changelist>

                <Changelist date="11.5.2020">
                    <Change>
                        <code>/discord</code> komento korjattu
                    </Change>
                    <Change>Voten määrä pienennetty 75 -&gt; 50 ja lisäksi tehty voteputket</Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="maaliskuu2020" label="Maaliskuu 2020">
                <Changelist date="27.3.2020">
                    <Change>
                        Lisätty seuraavat komennot: <code>/jöms /retu /tank /ash</code>
                    </Change>
                </Changelist>

                <Changelist date="22.3.2020">
                    <Change>Spawnereita voi taas muuttaa creeper- ja squid-spawnereiksi</Change>
                    <Change>
                        <code>/vote</code> ei avaa enää valikkoa. Chattiin tulee molemmat linkit.
                    </Change>
                </Changelist>

                <Changelist date="18.3.2020">
                    <Change>
                        lisätty uusia shortcutkomentoja <code>/nax /nubbe /skidaddleskidoodle [/nou /reverse /unoreverse]</code>
                    </Change>
                </Changelist>

                <Changelist date="12.3.2020">
                    <Change>Granite, diorite, andesite, cobble, stone voi nyt sulattaa blast furnacessa graveliksi</Change>
                </Changelist>

                <Changelist date="9.3.2020">
                    <Change>
                        Uusi komento <code>/alue</code>. Näyttää alueen nimen.
                    </Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="helmikuu2020" label="Helmikuu 2020">
                <Changelist date="24.2.2020">
                    <Change>
                        <code>/radio</code> toimii taas
                    </Change>
                    <Change>
                        Uusi komento <code>/music</code>
                    </Change>
                    <Change>Sillanrakennus poistettu käytöstä monistusglitchin takia</Change>
                </Changelist>

                <Changelist date="16.2.2020">
                    <Change>Map reset</Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="tammikuu2020" label="Tammikuu 2020">
                <Changelist date="16.1.2020">
                    <Change>
                        <code>/tk</code> tuotu takaisin
                    </Change>
                </Changelist>

                <Changelist date="13.1.2020">
                    <Change>Vote korjattu</Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="joulukuu2019" label="Joulukuu 2019">
                <Changelist date="13.12.2019">
                    <Change>
                        Lisätty <code>/ignore</code> (<code>/ignore add &lt;nimi&gt;</code>, <code>/ignore list</code>,{' '}
                        <code>/ignore remove &lt;nimi&gt;</code>)
                    </Change>
                </Changelist>

                <Changelist date="11.12.2019">
                    <Change>Lisätty Bedrock versiosta tuttu sillanrakennusominaisuus</Change>
                    <Change>Lisätty uusi resepti: 6 lasipaneelia -&gt; glass block </Change>
                    <Change>Lisätty uusi resepti uuniin: stainded glass -&gt; glass block</Change>
                </Changelist>

                <Changelist date="10.12.2019">
                    <Change>Rankkikohtaiset kotien määrät korjattu</Change>
                    <Change>Spawnerien otto silktouchilla ja ilman silktouchia korjattu</Change>
                </Changelist>

                <Changelist date="7.12.2019">
                    <Change>Tabin servervärejä paranneltu</Change>
                    <Change>Taikamaton kanssa ei enää ota fall damagea</Change>
                    <Change>Entiteetit eivät ota damagea taikamaton sivuista</Change>
                    <Change>Permiplugin osaa käsitellä offline pelaajia, ja pystyy asettamaan oikeuksia ilman relogia</Change>
                    <Change>Korjattu coreplugarin komennonsuorittajasta komponenttibugi</Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="marraskuu2019" label="Marraskuu 2019">
                <Changelist date="30.11.2019">
                    <Change>Korjattu prismarine slabien muunaminen täys blockeiksi</Change>
                    <Change>Lisätty mahdollisuus muuntaa Blast Furnacella hiilipalikoista mustaa väriainetta</Change>
                </Changelist>

                <Changelist date="22.11.2019">
                    <Change>Discord chatin värit korjattu</Change>
                </Changelist>

                <Changelist date="16.11.2019">
                    <Change>Tuomas veturi päivitetty</Change>
                    <Change>Looppaus + random toimii nyt</Change>
                    <Change>Voikukat korjattu</Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="lokakuu2019" label="Lokakuu 2019">
                <Changelist date="31.10.2019">
                    <Change>
                        <code>/sit</code> tuotu takaisin
                    </Change>
                </Changelist>

                <Changelist date="26.10.2019">
                    <Change>
                        <code>/vote</code> toimii taas
                    </Change>
                    <Change>(Realistinen) eläintenkanto takaisin servulla</Change>
                </Changelist>

                <Changelist date="25.10.2019">
                    <Change>
                        <code>/nimeä</code> komento lisätty palvelimelle
                    </Change>
                    <Change>
                        Lisätty ylläpidolle <code>/setsign</code>
                    </Change>
                    <Change>
                        Korjattu viestibugi <code>/nick player nick</code> -komennossa (koskien ylläpitoa)
                    </Change>
                    <Change>
                        <code>/baltop</code> korjattu
                    </Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="syyskuu2019" label="Syyskuu 2019">
                <Changelist date="25.09.2019">
                    <Change>
                        Tpa:n <code>/back</code> fixattu oikeiden pelaajien sijaintiin
                    </Change>
                    <Change>mobGriefing asetettu takaisin päälle</Change>
                </Changelist>

                <Changelist date="24.09.2019">
                    <Change>
                        Tp:n ja <code>/spawn</code> komennon <code>/back</code> tallentaa nyt sijainnin
                    </Change>
                </Changelist>

                <Changelist date="21.09.2019">
                    <Change>
                        <code>/kms</code> ja <code>/kys</code> lisätty
                    </Change>
                    <Change>Spawnerit putoaa taas Silk Touch -enchantilla</Change>
                </Changelist>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="elokuu2019" label="Elokuu 2019">
                <Changelist date="19.08.2019">
                    <Change>Coreprotect osaa nyt tallentaa lentävät blockit</Change>
                    <Change>Tnt ja tnt_minecart ei enää lennätä niin paljon blockei -&gt; parempia raivaukseen</Change>
                    <Change>Lisätty custom recipet servulle</Change>
                </Changelist>

                <Changelist date="17.08.2019">
                    <Change>Paranneltu databasen käyttöö: StatManager, Karanteenials, KaranteeniPerms, Chatar</Change>
                    <Change>
                        Mahdollisesti vähennetty joinauksesta seuraavaa lagia: KaranteeniPerms, Karanteenials, KaranteeniCore, StatManager,
                        Chatar (vaihdettu db sync -&gt; async. jos ongelmia ilmenee niin ilmoittakaa)
                    </Change>
                    <Change>
                        Lisätty automaattinen restart (yp käyttäkää komentoa <code>/restarter:restart</code>)
                    </Change>
                    <Change>Poistettu virheellisiä blockeja taikamatosta</Change>
                    <Change>
                        Löydetty ISO bugi timereista joka johti siihen että kaikki timerit ajettiin joka tickillä. Nyt fixattu, hyvällä
                        tuurilla isoja vaikutuksia tehokkuuteen
                    </Change>
                    <Change>
                        Operaattorista ylöspäin oikat <code>/player kill &lt;nimi&gt;</code>
                    </Change>
                </Changelist>

                <Changelist date="16.08.2019">
                    <Change>
                        <code>/rtp</code> toimii, aiempaa nopeampi ja ei mene veden alle
                    </Change>
                </Changelist>

                <Changelist date="13.08.2019">
                    <Change>Fixattu "epäturvallinen sijainti" teleportatessa</Change>
                    <Change>Fixattu puuttunut ääni kotiin teleportatessa</Change>
                    <Change>
                        <code>/rtp</code> tehostettu
                    </Change>
                    <Change>Fixattu rtp veden alle vienti</Change>
                </Changelist>

                <Changelist date="11.08.2019">
                    <Change>Uusi versio ja uudet kujeet. 1.14 on saapunut.</Change>
                </Changelist>
            </Month>
        </div>
    )
}

const Muutokset = () => {
    return (
        <Layout title="Changelog" description="Karanteenin muutosloki aikajärjestyksessä.">
            <Heading heading="Changelog" lead="Tämä sivu kattaa Karanteenin muutoslokit aikajärjestyksessä." />
            <Changelog />
        </Layout>
    )
}
export default Muutokset

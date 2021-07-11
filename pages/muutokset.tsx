import Link from 'next/link'
import React, { useState } from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'

const Month = ({ month, showId, updateShowing, label, children }) => {
    const showing = month === showId
    return (
        <div className="card bg-transparent border-gold">
            <div className="card-header" id={month + '_1'}>
                <h4>
                    <button
                        type="button"
                        aria-expanded="false"
                        aria-controls={month}
                        onClick={(e) => updateShowing(showing ? 'null' : month)}
                    >
                        {label}
                    </button>
                </h4>
            </div>
            <div id={month} className={'collapse ' + (showing ? 'show' : '')}>
                <div className="card-body">{children}</div>
            </div>
        </div>
    )
}

const Change = ({ children }) => {
    return <li>{children}</li>
}

const ChangeDate = ({ date, children }: { date: string; children: React.ReactNode }) => {
    return (
        <div>
            <p>{date}</p>
            <ul>{children}</ul>
        </div>
    )
}

const Changelog = () => {
    const [showId, setShowId] = useState('kesäkuu2021')
    const updateShowing = (val) => {
        setShowId(val)
    }
    return (
        <div>
            <Month showId={showId} updateShowing={updateShowing} month="kesäkuu2021" label="Kesäkuu 2021">
                <ChangeDate date="7.8.2021">
                    <Change>Servulla 1.17.1 tuki!</Change>
                </ChangeDate>
                <ChangeDate date="6.8.2021">
                    <Change>
                        et enää vedä kaikkien eläinten painovoimaa ittees (eläinten hidas kävely kantobugi korjattu, nyt
                        ei jää enää hitaus päälle)
                    </Change>
                </ChangeDate>
            </Month>
            <Month showId={showId} updateShowing={updateShowing} month="toukokuu2021" label="Toukokuu 2021">
                <ChangeDate date="28.5.2021">
                    <Change>
                        /tk (tai nykyään /welcome tai /tervetuloa myös) voi nyt /tk edit &lt;teksti %player%&gt;
                    </Change>
                </ChangeDate>
                <ChangeDate date="3.5.2021">
                    <Change>nostettu kuolemattomien kotien määrää 18 -&#62; 20</Change>
                </ChangeDate>
            </Month>
            <Month showId={showId} updateShowing={updateShowing} month="huhtikuu2021" label="Huhtikuu 2021">
                <ChangeDate date="15.4.2021">
                    <Change>Rankkikohtaset rankup-viestit ja yllättäen unohti mainita niistä :3</Change>
                    <Change>
                        Lisää vanhoja ominaisuuksia servulle takaisin! Ylläpidolla lukee nyt [YP] ennen pelinimeä pään
                        yläpuolella
                    </Change>
                </ChangeDate>
                <ChangeDate date="5.4.2021">
                    <Change>Estetty maailmanrajojen ulkopuolelle teleporttaaminen</Change>
                    <Change>
                        Chatissa toimii nyt samalla myös se jos asetuksista on laitettu "show commands only"
                    </Change>
                    <Change>Lisätty *tableflip ja muita pieniä</Change>
                </ChangeDate>
            </Month>
            <Month showId={showId} updateShowing={updateShowing} month="maaliskuu2021" label="Maaliskuu 2021">
                <ChangeDate date="31.3.2021">
                    <Change>Lisätty partikkelit taikamattoihin, ne näkee editorista /mc design</Change>
                    <Change>Lisätty roskakori turhille tavaroille /trash /roskis /roskakori</Change>
                    <Change>
                        Lisätty karan skriptiajoilta seuraavat asiat: itemit joiden nimi on troll, chatissa asiat alt +
                        f4, anna op
                    </Change>
                    <Change>Lisätty/korjattu näkymättömät itemframet</Change>
                    <Change>Vaihdettu /msg formaattia nätimmäksi</Change>
                    <Change>Poistettu ylimääräinen rivivaihto rankin hoverista, muotoiltu nätimmäksi</Change>{' '}
                    <Change>Lisätty roskakori turhille tavaroille /trash /roskis /roskakori</Change>
                    <Change>
                        Lisätty karan skriptiajoilta seuraavat asiat: itemit joiden nimi on troll, chatissa asiat alt +
                        f4, anna op
                    </Change>
                </ChangeDate>
                <ChangeDate date="30.3.2021">
                    <Change>Poistuessa servulta ja takaisin liittyessä taikamatto pysyy päällä.</Change>
                    <Change>Lisätty/korjattu näkymättömät itemframet</Change>
                    <Change>Vaihdettu /msg formaattia nätimmäksi</Change>
                    <Change>Poistettu ylimääräinen rivivaihto rankin hoverista, muotoiltu nätimmäksi</Change>{' '}
                    <Change>Lisätty roskakori turhille tavaroille /trash /roskis /roskakori</Change>
                    <Change>
                        Lisätty karan skriptiajoilta seuraavat asiat: itemit joiden nimi on troll, chatissa asiat alt +
                        f4, anna op
                    </Change>
                </ChangeDate>
                <ChangeDate date="26.3.2021">
                    <Change>Päivitetty /clearcache</Change>
                    <Change>Lisätty erilainen liittymisviesti ensimmäistä kertaa liittyville</Change>
                    <Change>Päivitetty permiplugari, todennäköisesti ei mitään muutosta mutta menee testinä</Change>
                    <Change>
                        Lisätty tuki /nimeä &amp; /setname komennon RGB väreille nekromantikkoon ja siitä ylöspäin
                    </Change>
                </ChangeDate>
                <ChangeDate date="25.3.2021">
                    <Change>
                        Lisätty uusi rank Rikkoja, jonka voi saada jos löytää servulta sitä hajottavia asioita ja
                        positiivisella tavalla kertoo/auttaa ylläpitoa korjaamaan sen.
                    </Change>
                </ChangeDate>
                <ChangeDate date="22.3.2021">
                    <Change>Päivitetty afk-kickkiä</Change>
                    <Change>Päivitetty palvelinta</Change>
                    <Change>Päivitetty nettisivut React sivuiksi</Change>
                </ChangeDate>
            </Month>
            <Month showId={showId} updateShowing={updateShowing} month="helmikuu2021" label="Helmikuu 2021">
                <ChangeDate date="6.2.2021">
                    <Change>uwu</Change>
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="tammikuu2021" label="Tammikuu 2021">
                <ChangeDate date="21.1.2021">
                    <Change>Lisätty mail komennot</Change>
                </ChangeDate>

                <ChangeDate date="13.1.2021">
                    <Change>
                        Lisätty{' '}
                        <a href="http://map.karanteeni.net" target="_blank">
                            dynmap
                        </a>{' '}
                    </Change>
                </ChangeDate>

                <ChangeDate date="8.1.2021">
                    <Change>
                        Uusi <Link href="/ominaisuudet">ominaisuudet</Link> sivu
                    </Change>
                </ChangeDate>

                <ChangeDate date="1.1.2021">
                    <Change>Unbanneja voi nyt hakea nettisivuilta! https://karanteeni.net/unban</Change>
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="joulukuu2020" label="Joulukuu 2020">
                <ChangeDate date="31.12.2020">
                    <Change>Lisätty hidden groupit. Mahdollistavat lisärankit muuttamatta pelaajan päärankkia.</Change>
                    <Change>Lisätty lahjoittajille tabiin oranssit [] merkit.</Change>
                </ChangeDate>

                <ChangeDate date="27.12.2020">
                    <Change>Palvelin osaa tulkita kirjoitetut komennot, jotka on alkavat / sijasta 7 merkillä.</Change>
                </ChangeDate>

                <ChangeDate date="19.12.2020">
                    <Change>Lisätty resepti nametagille</Change>
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="marraskuu2020" label="Marraskuu 2020">
                <ChangeDate date="27.11.2020">
                    <Change>Vähennetty mobien määrää per pelaaja 28 -&gt; 24.</Change>
                </ChangeDate>

                <ChangeDate date="25.11.2020">
                    <Change>Lisätty respawniin tuki respawn anchoreille, ei joudu enää spawnille kun respawnaa.</Change>
                </ChangeDate>

                <ChangeDate date="22.11.2020">
                    <Change>Lisätty kaksi (2) automaattista uudelleenkäynnistystä.</Change>
                </ChangeDate>

                <ChangeDate date="17.11.2020">
                    <Change>Lisätty vinkkeihin lyhyt ohje mitä tehdä, jos joku häiriköi</Change>
                </ChangeDate>

                <ChangeDate date="14.11.2020">
                    <Change>
                        Poistettu <code>/lakanakana</code>.
                    </Change>
                    <Change>
                        Lisätty <code>/iita</code>.
                    </Change>
                    <Change>
                        <code>/tptoggle</code> toimii oletettavasti. Ylempirankkiset eivät enää yliaja, vaan heitä
                        kohdellaan tasavertaisesti.
                    </Change>
                    <Change>Potentiaalinen palvelinvirhe korjattu.</Change>
                </ChangeDate>

                <ChangeDate date="9.11.2020">
                    <Change>Mobien spawnratea on pienennetty.</Change>
                </ChangeDate>

                <ChangeDate date="8.11.2020">
                    <Change>
                        Palautettu discordin minecraft-chattiin <code>/list</code>
                    </Change>
                </ChangeDate>

                <ChangeDate date="7.11.2020">
                    <Change>Armorstandin asentoja voi muuttaa oikeaklikkaamalla kyykyssä!</Change>
                </ChangeDate>

                <ChangeDate date="4.11.2020">
                    <Change>Palvelin päivitetty 1.16.4!</Change>
                    <Change>Palvelimella voi nyt craftaa onnenkeksejä.</Change>
                </ChangeDate>

                <ChangeDate date="1.11.2020">
                    <Change>Tab on palautettu Halloween ulkoasusta.</Change>
                    <Change>Lisätty etukäteen tilapäinen onnentoivotus uuteen mappiin.</Change>
                    <Change>Aikaisemmin hidastelleet votet pitäisi nyt toimia.</Change>
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="lokakuu2020" label="Lokakuu 2020">
                <ChangeDate date="10.10.2020">
                    <Change>Halloween teemainen tabi.</Change>
                    <Change>Spawn on nyt halloween teemainen.</Change>
                    <Change>Aikaisemmin hidastelleet votet pitäisi nyt toimia.</Change>
                </ChangeDate>

                <ChangeDate date="9.10.2020">
                    <Change>Discord bot näyttää nyt roolit Minecraftin chatissa.</Change>
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="syyskuu2020" label="Syyskuu 2020">
                <ChangeDate date="19.9.2020">
                    <Change>Päivitetty tabista palvelimen alkukirjain isoksi.</Change>
                </ChangeDate>

                <ChangeDate date="14.9.2020">
                    <Change>
                        Sisukas-rankkisten (ja alempien) virheellinen viesti-ilmoitus oikeuksista on nyt korjattu.
                    </Change>
                    <Change>Paranneltu turvallista teleporttia (onnistuu teleporttaamaan slabien päälle)</Change>
                </ChangeDate>

                <ChangeDate date="12.9.2020">
                    <Change>Added Russian language (thanks Inferdy &#x2764;).</Change>
                    <Change>Muutettu arvojen värit tukemaan RGB.</Change>
                </ChangeDate>

                <ChangeDate date="3.9.2020">
                    <Change>Päivitetty Jesari</Change>
                </ChangeDate>

                <ChangeDate date="1.9.2020">
                    <Change>
                        Lisätty oikeus Nekromantikosta ylöspäin + lahjoittajille käyttää RGB-värejä pelinimessä.
                    </Change>
                    <Change>
                        Korjattu kääntäjässä bugi, joka rikkoi kääntäjän pelaajalla ollessa ei-tuettu kieli
                        tietokannassa.
                    </Change>
                    <Change>Lisätty tapa tehdä lätäköitä.</Change>
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="elokuu2020" label="Elokuu 2020">
                <ChangeDate date="31.8.2020">
                    <Change>Chat-värit on tullut takaisin rgb tuella.</Change>
                    <Change>Parempi käyttäjien maininta chatissa.</Change>
                    <Change>Fixattu bugi, jossa pelaajalla oli ei-tuettu kieli ja hajotti kääntäjän.</Change>
                </ChangeDate>

                <ChangeDate date="30.8.2020">
                    <Change>Builders wand on nyt palvelimella</Change>
                </ChangeDate>

                <ChangeDate date="29.8.2020">
                    <Change>Lisätty ylösalaisin oleva kieli.</Change>
                    <Change>Päivitetty palvelin versioon 1.16.2!</Change>
                    <Change>Nether ja End resetattu.</Change>
                    <Change>
                        Fixattu bugi, jossa kodin koordinaatti on negatiivinen ja jaollinen 16 =&gt; nakkaa virheen.
                    </Change>
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
                </ChangeDate>

                <ChangeDate date="15.8.2020">
                    <Change>Lisätty 1.16.2 tuki</Change>
                </ChangeDate>

                <ChangeDate date="13.8.2020">
                    <Change>Korjattu vinkki Netherin ja Endin resettaamisesta</Change>
                </ChangeDate>

                <ChangeDate date="7.8.2020">
                    <Change>Fixattu bugi yp-chatissa.</Change>
                    <Change>
                        Lisätty ilmoitus muistuttamaan pelaajia liittymisen yhteydessä <code>/warns</code> -komennosta.
                    </Change>
                </ChangeDate>

                <ChangeDate date="5.8.2020">
                    <Change>Palvelimen render distance nostettu 10 chunkkiin (+2 chunkkia edellisestä).</Change>
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="heinäkuu2020" label="Heinäkuu 2020">
                <ChangeDate date="22.7.2020">
                    <Change>
                        Spawnille avattu parkour! <code>/warp parkour</code>
                    </Change>
                </ChangeDate>

                <ChangeDate date="5.7.2020">
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
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="kesäkuu2020" label="Kesäkuu 2020">
                <ChangeDate date="25.6.2020">
                    <Change>Lisätty 1.16.1 tuki servulle!</Change>
                    <Change>
                        Toisen pelaajan pelaaja-arvon klikkaaminen chatissa näyttää nyt kyseisen pelaajan peliajan oman
                        sijaan.
                    </Change>
                </ChangeDate>

                <ChangeDate date="18.6.2020">
                    <Change>Karanteenissa toimii VR</Change>
                    <Change>
                        Palvelimella voi nyt antaa lemmikkejä ja vapauttaa niitä komennoilla{' '}
                        <code>/lemmikki anna &lt;pelaaja&gt;</code> ja
                        <code>/lemmikki vapauta</code>.
                    </Change>
                    <Change>
                        Palvelimella voi nyt tägätä ihmisiä chatissa käyttäen <code>@pelaajanimi</code>.
                    </Change>
                    <Change>
                        Lisätty <code>/säännöt</code> komento.
                    </Change>
                </ChangeDate>

                <ChangeDate date="3.6.2020">
                    <Change>Entity Activation Range nostettu.</Change>
                    <Change>Villagerin tradet pitäisi nyt restockaa nopeammin.</Change>
                    <Change>Fixattu ongelma, jossa pelaajat satunnaisesti jäivät jumiin chunkille.</Change>
                </ChangeDate>

                <ChangeDate date="1.6.2020">
                    <Change>Mobien tracking range on default.</Change>
                    <Change>Nether-portaalista voi nyt kuljettaa mobeja.</Change>
                    <Change>Lumouspöytä ehdottaa nyt oikeat lumoukset.</Change>
                    <Change>Spam fishing problem solved.</Change>
                    <Change>Villagereiden töiden resettaus fixed.</Change>
                    <Change>Netherin katolle on taas mahdollista päästä.</Change>
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="toukokuu2020" label="Toukokuu 2020">
                <ChangeDate date="31.5.2020">
                    <Change>Lisätty info voteen, että siitä saa rahaa.</Change>
                </ChangeDate>

                <ChangeDate date="15.5.2020">
                    <Change>Yö kelautuu nopeammin. Mitä useampi nukkuu, sitä nopeampi yö.</Change>
                </ChangeDate>

                <ChangeDate date="14.5.2020">
                    <Change>
                        Lisätty komento <code>/votestreak [nimi]</code>. Ilman nimeä näkee oman voteputken.
                    </Change>
                </ChangeDate>

                <ChangeDate date="11.5.2020">
                    <Change>
                        <code>/discord</code> komento korjattu
                    </Change>
                    <Change>Voten määrä pienennetty 75 -&gt; 50 ja lisäksi tehty voteputket</Change>
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="maaliskuu2020" label="Maaliskuu 2020">
                <ChangeDate date="27.3.2020">
                    <Change>
                        Lisätty seuraavat komennot: <code>/jöms /retu /tank /ash</code>
                    </Change>
                </ChangeDate>

                <ChangeDate date="22.3.2020">
                    <Change>Spawnereita voi taas muuttaa creeper- ja squid-spawnereiksi</Change>
                    <Change>
                        <code>/vote</code> ei avaa enää valikkoa. Chattiin tulee molemmat linkit.
                    </Change>
                </ChangeDate>

                <ChangeDate date="18.3.2020">
                    <Change>
                        lisätty uusia shortcutkomentoja{' '}
                        <code>/nax /nubbe /skidaddleskidoodle [/nou /reverse /unoreverse]</code>
                    </Change>
                </ChangeDate>

                <ChangeDate date="12.3.2020">
                    <Change>
                        Granite, diorite, andesite, cobble, stone voi nyt sulattaa blast furnacessa graveliksi
                    </Change>
                </ChangeDate>

                <ChangeDate date="9.3.2020">
                    <Change>
                        Uusi komento <code>/alue</code>. Näyttää alueen nimen.
                    </Change>
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="helmikuu2020" label="Helmikuu 2020">
                <ChangeDate date="24.2.2020">
                    <Change>
                        <code>/radio</code> toimii taas
                    </Change>
                    <Change>
                        Uusi komento <code>/music</code>
                    </Change>
                    <Change>Sillanrakennus poistettu käytöstä monistusglitchin takia</Change>
                </ChangeDate>

                <ChangeDate date="16.2.2020">
                    <Change>Map reset</Change>
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="tammikuu2020" label="Tammikuu 2020">
                <ChangeDate date="16.1.2020">
                    <Change>
                        <code>/tk</code> tuotu takaisin
                    </Change>
                </ChangeDate>

                <ChangeDate date="13.1.2020">
                    <Change>Vote korjattu</Change>
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="joulukuu2019" label="Joulukuu 2019">
                <ChangeDate date="13.12.2019">
                    <Change>
                        Lisätty <code>/ignore</code> (<code>/ignore add &lt;nimi&gt;</code>, <code>/ignore list</code>,{' '}
                        <code>/ignore remove &lt;nimi&gt;</code>)
                    </Change>
                </ChangeDate>

                <ChangeDate date="11.12.2019">
                    <Change>Lisätty Bedrock versiosta tuttu sillanrakennusominaisuus</Change>
                    <Change>Lisätty uusi resepti: 6 lasipaneelia -&gt; glass block </Change>
                    <Change>Lisätty uusi resepti uuniin: stainded glass -&gt; glass block</Change>
                </ChangeDate>

                <ChangeDate date="10.12.2019">
                    <Change>Rankkikohtaiset kotien määrät korjattu</Change>
                    <Change>Spawnerien otto silktouchilla ja ilman silktouchia korjattu</Change>
                </ChangeDate>

                <ChangeDate date="7.12.2019">
                    <Change>Tabin servervärejä paranneltu</Change>
                    <Change>Taikamaton kanssa ei enää ota fall damagea</Change>
                    <Change>Entiteetit eivät ota damagea taikamaton sivuista</Change>
                    <Change>
                        Permiplugin osaa käsitellä offline pelaajia, ja pystyy asettamaan oikeuksia ilman relogia
                    </Change>
                    <Change>Korjattu coreplugarin komennonsuorittajasta komponenttibugi</Change>
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="marraskuu2019" label="Marraskuu 2019">
                <ChangeDate date="30.11.2019">
                    <Change>Korjattu prismarine slabien muunaminen täys blockeiksi</Change>
                    <Change>Lisätty mahdollisuus muuntaa Blast Furnacella hiilipalikoista mustaa väriainetta</Change>
                </ChangeDate>

                <ChangeDate date="22.11.2019">
                    <Change>Discord chatin värit korjattu</Change>
                </ChangeDate>

                <ChangeDate date="16.11.2019">
                    <Change>Tuomas veturi päivitetty</Change>
                    <Change>Looppaus + random toimii nyt</Change>
                    <Change>Voikukat korjattu</Change>
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="lokakuu2019" label="Lokakuu 2019">
                <ChangeDate date="31.10.2019">
                    <Change>
                        <code>/sit</code> tuotu takaisin
                    </Change>
                </ChangeDate>

                <ChangeDate date="26.10.2019">
                    <Change>
                        <code>/vote</code> toimii taas
                    </Change>
                    <Change>(Realistinen) eläintenkanto takaisin servulla</Change>
                </ChangeDate>

                <ChangeDate date="25.10.2019">
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
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="syyskuu2019" label="Syyskuu 2019">
                <ChangeDate date="25.09.2019">
                    <Change>
                        Tpa:n <code>/back</code> fixattu oikeiden pelaajien sijaintiin
                    </Change>
                    <Change>mobGriefing asetettu takaisin päälle</Change>
                </ChangeDate>

                <ChangeDate date="24.09.2019">
                    <Change>
                        Tp:n ja <code>/spawn</code> komennon <code>/back</code> tallentaa nyt sijainnin
                    </Change>
                </ChangeDate>

                <ChangeDate date="21.09.2019">
                    <Change>
                        <code>/kms</code> ja <code>/kys</code> lisätty
                    </Change>
                    <Change>Spawnerit putoaa taas Silk Touch -enchantilla</Change>
                </ChangeDate>
            </Month>

            <Month showId={showId} updateShowing={updateShowing} month="elokuu2019" label="Elokuu 2019">
                <ChangeDate date="19.08.2019">
                    <Change>Coreprotect osaa nyt tallentaa lentävät blockit</Change>
                    <Change>Tnt ja tnt_minecart ei enää lennätä niin paljon blockei -&gt; parempia raivaukseen</Change>
                    <Change>Lisätty custom recipet servulle</Change>
                </ChangeDate>

                <ChangeDate date="17.08.2019">
                    <Change>Paranneltu databasen käyttöö: StatManager, Karanteenials, KaranteeniPerms, Chatar</Change>
                    <Change>
                        Mahdollisesti vähennetty joinauksesta seuraavaa lagia: KaranteeniPerms, Karanteenials,
                        KaranteeniCore, StatManager, Chatar (vaihdettu db sync -&gt; async. jos ongelmia ilmenee niin
                        ilmoittakaa)
                    </Change>
                    <Change>
                        Lisätty automaattinen restart (yp käyttäkää komentoa <code>/restarter:restart</code>)
                    </Change>
                    <Change>Poistettu virheellisiä blockeja taikamatosta</Change>
                    <Change>
                        Löydetty ISO bugi timereista joka johti siihen että kaikki timerit ajettiin joka tickillä. Nyt
                        fixattu, hyvällä tuurilla isoja vaikutuksia tehokkuuteen
                    </Change>
                    <Change>
                        Operaattorista ylöspäin oikat <code>/player kill &lt;nimi&gt;</code>
                    </Change>
                </ChangeDate>

                <ChangeDate date="16.08.2019">
                    <Change>
                        <code>/rtp</code> toimii, aiempaa nopeampi ja ei mene veden alle
                    </Change>
                </ChangeDate>

                <ChangeDate date="13.08.2019">
                    <Change>Fixattu "epäturvallinen sijainti" teleportatessa</Change>
                    <Change>Fixattu puuttunut ääni kotiin teleportatessa</Change>
                    <Change>
                        <code>/rtp</code> tehostettu
                    </Change>
                    <Change>Fixattu rtp veden alle vienti</Change>
                </ChangeDate>

                <ChangeDate date="11.08.2019">
                    <Change>Uusi versio ja uudet kujeet. 1.14 on saapunut.</Change>
                </ChangeDate>
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

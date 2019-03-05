'use-strict';

class RankButtons extends React.Component {
    render() {
        return (
          <div>
            <p style={{marginTop: 1.2 + 'rem'}}>
                <button className="btn btn-eloton-outline" type="button" data-toggle="collapse" data-target="#reloton" aria-expanded="false" aria-controls="reloton">
                  Eloton
                </button>&nbsp;
                <button className="btn btn-raihnas-outline" type="button" data-toggle="collapse" data-target="#rraihnas" aria-expanded="false" aria-controls="rraihnas">
                  Raihnas
                </button>&nbsp;
                <button className="btn btn-sisukas-outline" type="button" data-toggle="collapse" data-target="#rsisukas" aria-expanded="false" aria-controls="rsisukas">
                  Sisukas
                </button>&nbsp;
                <button className="btn btn-parantuva-outline" type="button" data-toggle="collapse" data-target="#rparantuva" aria-expanded="false" aria-controls="rparantuva">
                  Parantuva
                </button>&nbsp;
                <button className="btn btn-immuuni-outline" type="button" data-toggle="collapse" data-target="#rimmuuni" aria-expanded="false" aria-controls="rimmuuni">
                  Immuuni
                </button>&nbsp;
                <button className="btn btn-parantaja-outline" type="button" data-toggle="collapse" data-target="#rparantaja" aria-expanded="false" aria-controls="rparantaja">
                  Parantaja
                </button>&nbsp;
                <button className="btn btn-nekromantikko-outline" type="button" data-toggle="collapse" data-target="#rnekromantikko" aria-expanded="false" aria-controls="rnekromantikko">
                  Nekromantikko
                </button>&nbsp;
                <button className="btn btn-kuolematon-outline" type="button" data-toggle="collapse" data-target="#rkuolematon" aria-expanded="false" aria-controls="rkuolematon">
                  Kuolematon
                </button>&nbsp;
            </p>
              <Ranks rank={this.props.rank} />
          </div>
        );
    }
}

function Ranks(props) {
  return (
    <div>
      <Eloton rank={props.rank} />
      <Raihnas rank={props.rank} />
      <Sisukas rank={props.rank} />
      <Parantuva rank={props.rank} />
      <Immuuni rank={props.rank} />
      <Parantaja rank={props.rank} />
      <Nekromantikko rank={props.rank} />    
      <Kuolematon rank={props.name} />
    </div>
  );
}

function Eloton(props) {
  return (
    <div className="collapse text-left mbot" id="reloton">
      <div className="card card-body">
        Eloton on aloitusrankki, jonka saat heti palvelimelle liittyessäsi. Elottomalla on seuraavat oikeudet: <br/><br/>
        <ElotonCmd cmd={props.cmd} />
      </div>
    </div>
  );
}

function ElotonCmd(props) {
  return (
    <ul>
      <li>/avaa</li>
      <li>/avaakaikille</li>
      <li>/back</li>
      <li>/checkban</li>
      <li>/crea</li>
      <li>/kit Aloitus</li>
      <li>/sethome (1 kappale)</li>
      <li>/lay</li>
      <li>/list</li>
      <li>/lunastavote</li>
      <li>/msg</li>
      <li>/near</li>
      <li>/+oikeudet nimi (lisää oikeudet pelaajalle palikkaan, /-oikeudet taasen poistaa oikeudet)</li>
      <li>/peliaika (/pa, /ar)</li>
      <li>/pennipeli (myös /lotto)</li>
      <li>/realname</li>
      <li>/recipe</li>
      <li>/reply</li>
      <li>/report</li>
      <li>/rtp</li>
      <li>/seen</li>
      <li>/sit</li>
      <li>/spawn</li>
      <li>/tpa</li>
      <li>/tpahere</li>
      <li>/tpignore</li>
      <li>/valikko</li>
      <li>/vote</li>
      <li>/warp(s)</li>
      <li>/whois</li>
    </ul>
  );
}

function Raihnas(props) {
  return (
    <div className="collapse text-left mbot" id="rraihnas">
      <div className="card card-body">
        <p>Raihnas on toinen rankki, jonka saat pelattuasi palvelimella yhteensä viisi tuntia (5h). Raihnaalla, tietystikin on Elottoman oikeudet, sekä seuraavat oikeudet: </p><br/><br/>
        <RaihnasCmd cmd={props.cmd} />
      </div>
    </div>
  );
}

function RaihnasCmd(props) {
  return (
    <ul>
      <li>/kit Raihnas</li>
      <li>/hat</li>
      <li>/sethome</li>
      <li>/compass</li>
      <li>/workbench</li>
    </ul>
  );
}

function Sisukas(props) {
  return (
    <div className="collapse text-left mbot" id="rsisukas">
      <div className="card card-body">
        <p>Sisukas on kolmas rankki, jonka saat pelattuasi palvelimella yhteensä yhden päivän (1d). Kuten aikaisemmin, Sisukkaalla on Raihnaan oikeudet, sekä seuraavat oikeudet: </p><br/><br/>
        <SisukasCmd cmd={props.cmd} />
        <br/>
      </div>
    </div>
  );
}

function SisukasCmd(props) {
  return (
    <ul>
      <li>/kit Sisukas</li>
      <li>/sethome (6 kappaletta)</li>
      <li>/enderchest</li>
      <li><b><span data-toggle="tooltip" data-placement="right" title="Taikamatto, 5x5 kokoinen lasimatto allasi, jolla voit leijua ilmassa, sekä lentää.">/mc*</span></b></li>
      <li>/mc light</li>
      <li>/near</li>
      <li><b><span data-toggle="tooltip" data-placement="right" title="Voit äänestää äänestyksissä puolesta ja vastaan.">/vk n / vk y*</span></b></li>
      <li><b><span data-toggle="tooltip" data-placement="right" title="Vaalean harmaa (oletus) ja läpinäkyvä">Kaksi uutta väriä taikamattoon (mc)*</span></b></li>
    </ul>
  );
}

function Parantuva(props) {
  return (
    <div className="collapse text-left mbot" id="rparantuva">
      <div className="card card-body">
        <p>Parantuva on neljäs rankki, jonka saat pelattuasi palvelimella yhteensä viisi päivää (5d). Parantuvalla on seuraavat lisäoikeudet:</p> <br/><br/>
        <ParantuvaCmd cmd={props.cmd} />
        <br/>
      </div>
    </div>
  );
}

function ParantuvaCmd(props) {
  return (
    <ul>
      <li>/kit Parantuva</li>
      <li>/sethome (8 kappaletta)</li>
      <li>/jump</li>
      <li>/mc tools</li>
      <li><b><span data-toggle="tooltip" data-placement="right" title="Nimen täytyy olla samankaltainen Minecraft nimesi kanssa tunnistautumisen vuoksi.">/nick*</span></b></li>
      <li><b><span data-toggle="tooltip" data-placement="right" title="Voit teleporttaa X, Y ja Z koordinaatteihin.">/tp x y z*</span></b></li>
      <li><b><span data-toggle="tooltip" data-placement="right" title="Voit aloittaa äänestyksen pelaajan hiljentämistä (20min) tai pelaajan potkimista varten.">/rankaise votemute /rankaise votekick*</span></b></li>
      <li>Voit hakata Spawnereita ilman Silk Touch -hakkua <b>(huom. Tarvitset silti hakun!)</b>, sekä kirjoittaa kyltteihin väreillä.</li>              <li><b><span data-toggle="tooltip" data-placement="right" title="Valkoinen, harmaa ja sininen">Kolme uutta väriä taikamattoon (mc)*</span></b></li>
    </ul>
  );
}

function Immuuni(props) {
  return (
    <div className="collapse text-left mbot" id="rimmuuni">
      <div className="card card-body">
        <p>Immuuni on viides rankki, jonka saat pelattuasi palvelimella yhteensä kymmenen päivää (10d). Immuunilla on seuraavat lisäoikeudet:</p> <br/><br/>
        <ImmuuniCmd cmd={props.cmd} />
        <br/>
      </div>
    </div>
  );
}

function ImmuuniCmd(props) {
  return (
    <ul>
      <li>/kit Immuuni</li>
      <li>/sethome (12 kappaletta)</li>
      <li>/fly</li>
      <li><b><span data-toggle="tooltip" data-placement="right" title="Nimeää kädessäsi olevan tavaran. (Voi käyttää värejä)">/nimeä*</span></b></li>
      <li><b><span data-toggle="tooltip" data-placement="right" title="Vaihtaa olemassa olevan spawnerin. Pro tip: Aseta spawner maahan ja katso sitä kohti ennen komennon suorittamista.">/spawner*</span></b></li>
      <li>/tp</li>
      <li>/tptoggle</li>
      <li><b><span data-toggle="tooltip" data-placement="right" title="Keltainen ja ruskea">Kaksi uutta väriä taikamattoon (mc)*</span></b></li>
    </ul>
  );
}

function Parantaja(props) {
  return (
    <div className="collapse text-left mbot" id="rparantaja" >
      <div className="card card-body" >
        <p>Parantajan saat pelattuasi palvelimella yhteensä 30 päivää (30d). Parantajilla on seuraavat lisäoikeudet:</p> <br/><br/>
        <ParantajaCmd cmd={props.cmd} />
        <br/>
      </div>
    </div>
  );
}

function ParantajaCmd(props) {
  return (
    <ul>
      <li>/kit Parantaja</li>
      <li>/sethome (16 kappaletta)</li>
      <li><b><span data-toggle="tooltip" data-placement="right" title="* SALAISTA TIETOA *">AntiXray*</span></b></li>
      <li>/jail</li>
      <li>/kick</li>
      <li>/mute</li>
      <li><b><span data-toggle="tooltip" data-placement="right" title="Lime ja musta">Kaksi uutta väriä taikamattoon (mc)*</span></b></li>
    </ul>
  );
}

function Nekromantikko(props) {
  return (
    <div className="collapse text-left mbot" id="rnekromantikko">
      <div className="card card-body">
        <p>Nekromantikkoon vaaditaan 60 päivän (60d) peliaika. Nekromantikolla on seuraavat lisäoikeudet:</p> <br/><br/>
        <NekroCmd cmd={props.cmd} />
        <br/>
      </div>
    </div>
  );
}

function NekroCmd(props) {
  return (
    <ul>
      <li><span data-toggle="tooltip" data-placement="right" title="Laittaa blokkien tarkastelun päälle, jolla näkee kaikki sen blokin tiedot."><b>/co i*</b></span></li>
      <li>/kit Nekromantikko</li>
      <li>/sethome (18 kappaletta)</li>
      <li><b><span data-toggle="tooltip" data-placement="right" title="Magenta ja punainen">Kaksi uutta väriä taikamattoon (mc)*</span></b></li>
    </ul>
  );
}

function Kuolematon(props) {
  return (
    <div className="collapse text-left mbot" id="rkuolematon">
      <div className="card card-body">
        <p>Jotta sinulle voidaan myöntää viimeinen pelaaja-arvo ja täten tunnustaa Kuolemattomaksi, peliaikasi täytyy olla 100 päivää (100d). Kuolemattomilla on seuraavat lisäoikeudet: </p><br/><br/>
        <KuoliCmd cmd={props.cmd} />
      </div>
    </div>
  );
}

function KuoliCmd(props) {
  return (
    <ul>
      <li>/kit Kuolematon</li>
      <li><b><span data-toggle="tooltip" data-placement="bottom" title="Pinkki, syaani, purppura, oranssi, vihreä ja vaalean sininen">Kuusi uutta väriä taikamattoon (mc)*</span></b></li>
    </ul>
  );
}

ReactDOM.render(<RankButtons />, document.getElementById('painikkeet'));
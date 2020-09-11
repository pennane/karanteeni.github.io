function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

var lainaukset = [
  {
    teksti: "Mun keksi erittää maitoa tääl.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Ehkä serverin kaadan joskus vahingossa, mutta kahvia en ole koskaan kaatanut.",
    kuuluisuus: "PreGauris"
  },
  {
    teksti: "Join puol litraa kaakaota ja mul o silti nälkä",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Koitin nipistää seinää, mut en onnistunu.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Vois käydä kuolemassa.",
    kuuluisuus: "Louni"
  },
  {
    teksti: "Onko mahollista tehä yhen blockin kokosia blockeja?",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Keitetyssä vedessä on miljoona kertaa enemmän hiilihappoa ku limussa",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Vesi ei oo oikeeta.",
    kuuluisuus: "Jomeee"
  },
  {
    teksti: "Mun mahan sisällä on kolmas maailmansota meneillään.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Vesistä kuuluu putkien äänet.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Käy eka vessassa, mee sitten pöntölle.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "mirrsststsddstsrs",
    kuuluisuus: "Kana kirjoittamassa"
  },
  {
    teksti: "Millaista ois 100% vesihedelmämehu?",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Rupeen aina auringos olles haisemaa paahtoleivält.",
    kuuluisuus: "Kana"
  },
  {
    teksti: "Mut jome neljän päivän päästä kanalle meen.",
    kuuluisuus: "Runollinen Nuubles"
  },
  {
    teksti: "Mun isän talossa on kaks kerrosta päällekkäin, toinen on toisen päällä mut toinen ei.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Nax, 19 / 2 = 8.",
    kuuluisuus: "lakanakana"
  },
  {
    teksti: "ftyctycycytcy<wbr />tcycxytctyrcy<wbr />uvcytfcucu",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Gana on kaunis goblin.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Mikä päivä on itsenäisyyspäivä?",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Mun kengässä on kivenpohja. :(",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Kara ei oo meidän servu.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Sä voisit despawnaa",
    kuuluisuus: "lakanakana -> Nuubles."
  },
  {
    teksti: "Oijoi toi on omena kranaatti.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Miks suomessa ei olis rannalla palmupuita?",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Tykkään veden hengittämisestä.",
    kuuluisuus: "Jomeee"
  },
  {
    teksti: "Oon syöny kaks pitsaa ja yhen suklaalevyn... mulla on hirvee ähky... mä haluun päärynää.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Mulla on niin piip ajatukset ettette ymmärrä",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Ylärima = vaakatolppa.",
    kuuluisuus: "Nuublesin puhetaito"
  },
  {
    teksti: "Miks toi ääni on noin tiukka?",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Keski-ikäinen lapsi.",
    kuuluisuus: "Louni"
  },
  {
    teksti: "Mul o makkarasta pääsy parvekkeelle.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Olen raskaana.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Poks poks motherhecker.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Vois itekki hakee syömään.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Mut siis mikä tuuri et löydän 170€ ku oon kaapissa!!!",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "*Erittäin ylpeä äänensävy* eli 4/3 on isompi ku 1/3!",
    kuuluisuus: "lakanakana"
  },
  {
    teksti: "Jos sulkee oven nii ei tuu pimeetä :3",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Sulle sopii ne hiukset mitä oot käyttäny :33333",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "*Sana on bändi* MUUSIKKO YKSIÖSSÄ!!!",
    kuuluisuus: "lakanakana"
  },
  {
    teksti: "Ohjeet luetaan lukemalla ohjeiden sanat.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "NUUF NUUF NUUF",
    kuuluisuus: "Jomeee"
  },
  {
    teksti: "Senkin vauhtiraitarallimehu!",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Kilpikonnan poikanen = nuijapää",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Oon treenannu mun ripsii",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Mun tietokone painaa 0 grammaa.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Mä nyt kuvittelin olevani se alin banaani.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Venäjä ei ole suomen rajanaapurimaa.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Mä ja mun utareet tullaan!",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Toimiiko ne sun ostamat housut?",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Mun pitäs hankkii se oma pääsi.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Joulu ei oo päivä. Se on kuukausi.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Täs kaupungis on kaks prismaa, toinen niistä on lähempänä ku toinen.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Mä olin onnessani et mä löysin perunoista villagen.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Helsingistä saa hyvin glowstonea.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Meil on pikivalkoinen kissa.",
    kuuluisuus: "Jomeee"
  },
  {
    teksti: "OleN väSYnyrt",
    kuuluisuus: "Jomeee"
  },
  {
    teksti: "Musta tulee käytetty latvialainen.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Koira olet mahtava ihminen.",
    kuuluisuus: "Naxray"
  },
  {
    teksti: "Mikä on lintuaura?",
    kuuluisuus: "Nuubles, joka on asunut korvessa elämänsä"
  },
  {
    teksti: "Mä lähen uunii.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Makaroni maistuu ihan spagetilta.",
    kuuluisuus: "Nuubles"
  },
  {
    teksti: "Mä en supportaa kuolemantuomioo, mutta oon valmis tekemää kompromissin sen kaverin kaa, joka keksi piimän.",
    kuuluisuus: "Ougii_Lewe"
  },
];

var currentQuote = randomFromArray(lainaukset);

function setRandomQuote() {
  var temporaryQuote;

  if (lainaukset.length > 1) {
    do {
      temporaryQuote = randomFromArray(lainaukset);
    } while (temporaryQuote === currentQuote);
    currentQuote = temporaryQuote;
  }

  $('#lainaus').fadeOut('slow', function () {
    document.getElementById("lainaus").innerHTML = currentQuote.teksti;
    $(this).text(lainaukset[currentQuote]).fadeIn('slow');
  });

  $('#fade').fadeOut('slow', function () {
    document.getElementById("by").innerHTML = currentQuote.kuuluisuus;
    $(this).text(lainaukset[currentQuote]).fadeIn('slow');
  });
}

$(function () {
  // Call the random function when the DOM is ready:
  setRandomQuote();
});

var randomQuoteInterval = setInterval(function () { setRandomQuote(); }, 7500);

(function() {
  var lainaukset = [
    {
      teksti: "Mäki pystyisin tekemään ydinreaktorin imurin osista.",
      kuuluisuus: "Nuubles"
    },
    {
      teksti: "Ehkä serverin kaadan joskus vahingossa, mutta kahvia en ole koskaan kaatanut.",
      kuuluisuus: "PreGauris"
    },
    {
      teksti: "Se on hankalaa kuolla..... hankalaa kuunnitella suunnitelma.",
      kuuluisuus: "Nuubles"
    },
    {
      teksti: "Koitin nipistää seinää, mut en onnistunu.",
      kuuluisuus: "Nuubles"
    },
    {
      teksti: "Tiesittekö, että Trump ei nää painajaisia. Se näkee Kim Jong Unia.",
      kuuluisuus: "Jomeee"
    },
    {
      teksti: "Onko mahollista tehä yhen blockin kokosia blockeja?",
      kuuluisuus: "Nuubles"
    },
    {
      teksti: "eN voI hYviN",
      kuuluisuus: "Jomeee"
    },
    {
      teksti: "Vesi ei oo oikeeta.",
      kuuluisuus: "Jomeee"
    },
    {
      teksti: "Ruoka on syötävää.",
      kuuluisuus: "Nuubles"
    },
    {
      teksti: "Vesistä kuuluu putkien äänet.",
      kuuluisuus: "Nuubles"
    },
    {
      teksti: "mirrsststsddstsrs",
      kuuluisuus: "Kana kirjoittamassa"
    },
    {
      teksti: "Mun isän talossa on kaks kerrosta päällekkäin, toinen on toisen päällä mut toinen ei",
      kuuluisuus: "Nuubles"
    },
    {
      teksti: "Nax, 19 / 2 = 8",
      kuuluisuus: "lakanakana"
    },
    {
      teksti: "ftyctycycytcytcycxytctyrcyuvcytfcucu",
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
      teksti: "Kara ei oo meidän servu",
      kuuluisuus: "Nuubles"
    },
    {
      teksti: "Sä voisit despawnaa",
      kuuluisuus: "lakanakana => Nuubles"
    },
    {
      teksti: "Makaroni maistuu ihan spagetilta",
      kuuluisuus: "Nuubles"
    }
  ];
  var lainaus = lainaukset[Math.floor(Math.random() * lainaukset.length)];
  document.getElementById("lainaus").innerHTML = lainaus.teksti;
  document.getElementById("by").innerHTML = lainaus.kuuluisuus;
})();
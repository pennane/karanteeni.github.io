var xmlhttp = new XMLHttpRequest();
var url = "https://api.mcsrvstat.us/2/95.217.120.173";
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var stabox = this.responseText;
        var kara = JSON.parse(stabox);
        if (kara["debug"].ping === true) {
            document.getElementById("status").style.color = "lime";
            document.getElementById("status").innerHTML = "Päällä"
            document.getElementById("version").innerHTML = "<span class='bolder'>Versio:</span> " + kara["software"] + " " + kara["version"];
            document.getElementById("online").innerHTML = 'Pelaajia paikalla: ' + kara.players["online"];
            if (kara.players["online"] == "0") {
                document.getElementById("online").innerHTML = "Pelaajia ei ole paikalla.";
            }
            document.getElementById("ip").innerHTML = "<span class='server-ip' id='textip'>mc.karanteeni.net</span>" + '<br>' + '<p class="server-ip" id="numip">' + kara["ip"] + ":" + kara["port"] + '</p>' + "&nbsp;&nbsp;<button style='margin: auto; margin-top: 10px;' class='btn btn-outline-light btn-tooltip show' data-toggle='tooltip' data-placement='top' title='Paina tästä kopioidaksesi IP-osoite.' data-clipboard-target='#numip''><i class='fas fa-copy'></i></button>";
        }
    } else {
        document.getElementById("status").style.color = "red";
        document.getElementById("online").innerHTML = "Pelaajia ei ole paikalla.";
        document.getElementById("ip").innerHTML = "Osoitteen kysely epäonnistui. Palvelin ei ole päällä."
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

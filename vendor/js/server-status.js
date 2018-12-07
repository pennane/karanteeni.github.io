var xmlhttp = new XMLHttpRequest();
var url = "https://api.mcsrvstat.us/1/151.80.78.212:28373.json";
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var stabox = this.responseText;
        var kara = JSON.parse(stabox);
        if (kara["debug"].ping === true) {
            document.getElementById("status").style.backgroundColor = "darkgreen";
            document.getElementById("statusbor").style.border = "solid 4px darkgreen";
            document.getElementById("online").innerHTML = kara.players["online"];
            if (kara.players["online"] == "0") {
                document.getElementById("online").innerHTML = "Pelaajia ei ole paikalla.";
            }
            document.getElementById("ip").innerHTML = "<p>mc.karanteeni.net</p>" + "<p id='numip'>" + kara["ip"] + ":" + kara["port"] + "</p>" + "<button style='margin: auto; margin-top: 10px;' class='btn btn-outline-dark btn-tooltip show' data-toggle='tooltip' data-placement='top' title='Paina tästä kopioidaksesi IP-osoite.' onclick='copyIp(document.getElementById(\"numip\"));'><i class='fas fa-copy'></i></button>";
            document.getElementById("server").innerHTML = '<img src="./assets/images/server-icon.png"><p class="card-text" style="padding-top: 1rem;">Pelaajia paikalla:</p>';
        }
    } else {
            document.getElementById("status").style.backgroundColor = "darkred";
            document.getElementById("statusbor").style.border = "solid 4px darkred";
            document.getElementById("online").innerHTML = "Pelaajia ei ole paikalla.";
            document.getElementById("ip").innerHTML = "Osoitteen kysely epäonnistui. Palvelin ei ole päällä."
            document.getElementById("server").innerHTML = '<img src="./assets/images/server-icon.png">';
        }
    };
xmlhttp.open("GET", url, true);
xmlhttp.send();

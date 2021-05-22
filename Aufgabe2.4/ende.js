"use strict";
let ausgewaehlt = document.createElement("div");
ausgewaehlt.classList.add("endanzeige");
let auswahl1 = document.createElement("img");
let auswahl2 = document.createElement("img");
let auswahl3 = document.createElement("img");
document.body.appendChild(ausgewaehlt);
ausgewaehlt.appendChild(auswahl1);
ausgewaehlt.appendChild(auswahl2);
ausgewaehlt.appendChild(auswahl3);
auswahl1.setAttribute("src", localStorage.getItem("dach"));
auswahl2.setAttribute("src", localStorage.getItem("mauer"));
auswahl3.setAttribute("src", localStorage.getItem("garten"));
async function serverExchange(url) {
    let query = new URLSearchParams(localStorage);
    url = url + "?" + query.toString();
    let response = await fetch(url);
    let antwort = await response.text();
    let anzeige = document.getElementById("servernachricht");
    let nachricht = document.getElementById("nachricht");
    nachricht.innerText = antwort;
    anzeige.appendChild(nachricht);
    document.body.appendChild(anzeige);
    if (response.error) {
    }
}
//# sourceMappingURL=ende.js.map
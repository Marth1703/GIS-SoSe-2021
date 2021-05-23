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
    let antwort = await response.json();
    let anzeige = document.createElement("div");
    let nachricht = document.createElement("p");
    anzeige.style.background = "red";
    if (antwort.message == undefined) {
        nachricht.innerText = "Error: " + antwort.error;
        nachricht.style.background = "yellow";
    }
    else {
        nachricht.innerText = "Servernachricht: " + antwort.message;
        nachricht.style.background = "green";
    }
    anzeige.appendChild(nachricht);
    document.body.appendChild(anzeige);
}
serverExchange("https://gis-communication.herokuapp.com");
//# sourceMappingURL=ende.js.map
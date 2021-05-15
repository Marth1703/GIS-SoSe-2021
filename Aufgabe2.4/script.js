"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    function jsonRead() {
        let teilsHaus = JSON.parse(Aufgabe2_4.hausJSON);
        return teilsHaus;
    }
    Aufgabe2_4.jsonRead = jsonRead;
    let ausgewaehlt = document.createElement("div");
    ausgewaehlt.classList.add("showcase");
    let auswahl1 = document.createElement("img");
    let auswahl2 = document.createElement("img");
    let auswahl3 = document.createElement("img");
    document.body.appendChild(ausgewaehlt);
    ausgewaehlt.appendChild(auswahl1);
    ausgewaehlt.appendChild(auswahl2);
    ausgewaehlt.appendChild(auswahl3);
    function hausDiv(teil, _zahl) {
        let div = document.createElement("div");
        let bild = document.createElement("img");
        let text = document.createElement("p");
        let button = document.createElement("button");
        bild.src = teil.bild;
        text.innerText = teil.art;
        button.addEventListener("click", innerAuswahl);
        button.innerText = "Choose";
        div.classList.add("teilhaus");
        div.appendChild(bild);
        div.appendChild(text);
        div.appendChild(button);
        function innerAuswahl(_event) {
            localStorage.setItem("item", teil.bild);
            if (document.querySelector("body").getAttribute("id") == "dachseite") {
                auswahl1.setAttribute("src", localStorage.getItem("item"));
                localStorage.setItem("dach", auswahl1.src);
            }
            else if (document.querySelector("body").getAttribute("id") == "mauerseite") {
                auswahl1.setAttribute("src", localStorage.getItem("dach"));
                auswahl2.setAttribute("src", localStorage.getItem("item"));
                localStorage.setItem("mauer", auswahl2.src);
            }
            else if (document.querySelector("body").getAttribute("id") == "gartenseite") {
                auswahl1.setAttribute("src", localStorage.getItem("dach"));
                auswahl2.setAttribute("src", localStorage.getItem("mauer"));
                auswahl3.setAttribute("src", localStorage.getItem("item"));
                localStorage.setItem("garten", auswahl3.src);
            }
        }
        return div;
    }
    Aufgabe2_4.hausDiv = hausDiv;
    function seiteErstellen(abschnitt) {
        let moeglichkeiten = document.getElementById("wahl");
        for (let z = 0; z < abschnitt.length; z++) {
            let teildiv = hausDiv(abschnitt[z], z);
            moeglichkeiten.appendChild(teildiv);
        }
    }
    if (document.querySelector("body").getAttribute("id") == "dachseite") {
        seiteErstellen(jsonRead().dach);
    }
    else if (document.querySelector("body").getAttribute("id") == "mauerseite") {
        seiteErstellen(jsonRead().mauer);
    }
    else if (document.querySelector("body").getAttribute("id") == "gartenseite") {
        seiteErstellen(jsonRead().garten);
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map
namespace Aufgabe2_4 {

    export function jsonRead(): Haus {
        let teilsHaus: Haus = JSON.parse(hausJSON);
        return teilsHaus;
    }

    let ausgewaehlt: HTMLDivElement = <HTMLDivElement>document.createElement("div");
    ausgewaehlt.classList.add("showcase");
    let auswahl1: HTMLImageElement = document.createElement("img");
    let auswahl2: HTMLImageElement = document.createElement("img");
    let auswahl3: HTMLImageElement = document.createElement("img");
    document.body.appendChild(ausgewaehlt);
    ausgewaehlt.appendChild(auswahl1);
    ausgewaehlt.appendChild(auswahl2);
    ausgewaehlt.appendChild(auswahl3);

    export function hausDiv(teil: Hausteil, _zahl: number): HTMLDivElement {

        let div: HTMLDivElement = document.createElement("div");
        let bild: HTMLImageElement = document.createElement("img");
        let text: HTMLElement = document.createElement("p");
        let button: HTMLButtonElement = document.createElement("button");

        bild.src = teil.bild;
        text.innerText = teil.art;
        button.addEventListener("click", innerAuswahl);
        button.innerText = "Choose";

        div.classList.add("teilhaus");
        div.appendChild(bild);
        div.appendChild(text);
        div.appendChild(button);

        function innerAuswahl(_event: Event): void {
            localStorage.setItem("item", teil.bild);

            if (document.querySelector("body").getAttribute("id") == "dachseite") {
                auswahl1.setAttribute("src", localStorage.getItem("item")); 
                localStorage.setItem("dach", auswahl1.src);
            }
            else if (document.querySelector("body").getAttribute("id") == "mauerseite") {
                
                auswahl2.setAttribute("src", localStorage.getItem("item")); 
                localStorage.setItem("mauer", auswahl2.src);
            }
            else if (document.querySelector("body").getAttribute("id") == "gartenseite") {

                auswahl3.setAttribute("src", localStorage.getItem("item")); 
                localStorage.setItem("garten", auswahl3.src);
            }

        }

        return div;
    }

    function seiteErstellen(abschnitt: Hausteil[]): void {
        let moeglichkeiten: HTMLDivElement = <HTMLDivElement>document.getElementById("wahl");
        for (let z: number = 0; z < abschnitt.length; z++) {
            let teildiv: HTMLDivElement = hausDiv(abschnitt[z], z);
            moeglichkeiten.appendChild(teildiv);
        }
    }

    if (document.querySelector("body").getAttribute("id") == "dachseite") {
        seiteErstellen(jsonRead().dach);
    }
    else if (document.querySelector("body").getAttribute("id") == "mauerseite") {
        seiteErstellen(jsonRead().mauer);
        auswahl1.setAttribute("src", localStorage.getItem("dach")); 
    }
    else if (document.querySelector("body").getAttribute("id") == "gartenseite") {
        seiteErstellen(jsonRead().garten);
        auswahl1.setAttribute("src", localStorage.getItem("dach")); 
        auswahl2.setAttribute("src", localStorage.getItem("mauer")); 
    }





}
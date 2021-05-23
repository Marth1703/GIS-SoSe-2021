namespace Aufgabe2_4 {


    /* export let auswahlHaus: Haus = {
        dach: [{ art: "Flachdach", bild: "./Bilder/dach1.png" }, { art: "Satteldach", bild: "./Bilder/dach2.png" }, { art: "Zeltdach", bild: "./Bilder/dach3.png" }],
        mauer: [{ art: "Betonmauer", bild: "./Bilder/mauer1.png" }, { art: "Steinmauer", bild: "./Bilder/mauer2.png" }, { art: "Holzmauer", bild: "./Bilder/mauer3.png" }],
        garten: [{ art: "Keinen", bild: "./Bilder/garten1.png" }, { art: "Schrebergarten", bild: "./Bilder/garten2.png" }, { art: "Wiese", bild: "./Bilder/garten3.png" }]
     }; */


    export interface Hausteil {
        art: string;
        bild: string;
    }

    export interface Haus {
        dach: Hausteil[];
        mauer: Hausteil[];
        garten: Hausteil[];

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

    export async function jsonRead(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let antwort: Haus = await response.json();
        if (document.querySelector("body").getAttribute("id") == "dachseite") {
            seiteErstellen(antwort.dach);
        }
        else if (document.querySelector("body").getAttribute("id") == "mauerseite") {
            seiteErstellen(antwort.mauer);
            auswahl1.setAttribute("src", localStorage.getItem("dach"));
        }
        else if (document.querySelector("body").getAttribute("id") == "gartenseite") {
            seiteErstellen(antwort.garten);
            auswahl1.setAttribute("src", localStorage.getItem("dach"));
            auswahl2.setAttribute("src", localStorage.getItem("mauer"));
        }
    }

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

    jsonRead("https://marth1703.github.io/GIS-SoSe-2021/Aufgabe2.4/data.json");

}
let ausgewaehlt: HTMLDivElement = <HTMLDivElement>document.createElement("div");
ausgewaehlt.classList.add("endanzeige");
let auswahl1: HTMLImageElement = document.createElement("img");
let auswahl2: HTMLImageElement = document.createElement("img");
let auswahl3: HTMLImageElement = document.createElement("img");
document.body.appendChild(ausgewaehlt);
ausgewaehlt.appendChild(auswahl1);
ausgewaehlt.appendChild(auswahl2);
ausgewaehlt.appendChild(auswahl3);
auswahl1.setAttribute("src", localStorage.getItem("dach"));
auswahl2.setAttribute("src", localStorage.getItem("mauer"));
auswahl3.setAttribute("src", localStorage.getItem("garten"));

async function serverExchange(url: RequestInfo): Promise<void> {
    let query: URLSearchParams = new URLSearchParams(localStorage);
    url = url + "?" + query.toString();
    let response: Response = await fetch(url);
    let antwort: string = await response.text();
    let anzeige: HTMLDivElement = <HTMLDivElement> document.getElementById("servernachricht");
    let nachricht: HTMLSpanElement = <HTMLSpanElement> document.getElementById("nachricht");
    nachricht.innerText = antwort;
    anzeige.appendChild(nachricht);
    document.body.appendChild(anzeige);

    if (response.error) {

    }


}
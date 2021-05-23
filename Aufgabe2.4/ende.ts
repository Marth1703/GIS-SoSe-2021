
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

interface Servernachricht {
    message: string;
    error: string;
}


async function serverExchange(url: RequestInfo): Promise<void> {
    let query: URLSearchParams = new URLSearchParams(<any>localStorage);
    url = url + "?" + query.toString();
    let response: Response = await fetch(url);
    let antwort: Servernachricht = await response.json();
    let anzeige: HTMLDivElement = <HTMLDivElement>document.createElement("div");
    let nachricht: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
    anzeige.style.background = "red";
    if (antwort.message == undefined) {
        nachricht.innerText = "Error: " + antwort.error;   
        nachricht.style.background = "yellow";    
    }
    else  {
        nachricht.innerText = "Servernachricht: " + antwort.message;
        nachricht.style.background = "green";    
    }

    anzeige.appendChild(nachricht);
    document.body.appendChild(anzeige);

}
serverExchange("https://gis-communication.herokuapp.com");




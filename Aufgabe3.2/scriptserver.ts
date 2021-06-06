
export namespace Aufgabe3_2 {

    let htmlButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("html");
    let jsonButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("json");
    htmlButton.addEventListener("click", handleHTML);
    jsonButton.addEventListener("click", handleJSON);
    let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");
    document.body.appendChild(div);  

    async function clickHtml(_url: RequestInfo): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "/html?" + query.toString();
        let response: Response = await fetch(_url);
        let serverAntwort: string = await response.text();
        console.log(serverAntwort);
        console.log("antwort erhalten");
        div.innerHTML = serverAntwort;
    }

    async function clickJson(_url: RequestInfo): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "/json?" + query.toString();
        let response: Response = await fetch(_url);
        let serverAntwort: string = JSON.parse(await response.json());
        console.log(serverAntwort);
        console.log("antwort erhalten");
        div.innerHTML = serverAntwort;
    }

    function handleHTML(): void {
        clickHtml("https://marthgissose2021.herokuapp.com/");
        console.log("anfrage gestartet");
    }
    function handleJSON(): void {
        clickJson("https://marthgissose2021.herokuapp.com/");
        console.log("anfrage gestartet");
    }
}
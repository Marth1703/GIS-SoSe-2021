namespace Aufgabe3_1 {
    
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("anmelden");
    button.addEventListener("click", buttonclick);
    let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");
    document.body.appendChild(div);
    

    async function communicate(_url: RequestInfo): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let serverAntwort: string = await response.text();
        console.log(serverAntwort);
        console.log("antwort erhalten");
        div.innerHTML = serverAntwort;
    }

    function buttonclick(): void {
        communicate("https://marthgissose2021.herokuapp.com/");
        console.log("anfrage gestartet");
    }

}
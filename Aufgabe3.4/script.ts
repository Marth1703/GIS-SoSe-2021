namespace Aufgabe3_4 {
    let addButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("schicken");
    let showButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("erhalten");
    addButton.addEventListener("click", submitData);
    showButton.addEventListener("click", showData);
    let div: HTMLDivElement = <HTMLDivElement>document.getElementById("anzeige");
    let url: string;
    let path: string;

    async function submitData(): Promise<void> {
        url = "https://marthgissose2021.herokuapp.com";
        path = "/send";
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + path + "?" + query.toString();
        let response: Response = await fetch(url);
        let serverAntwort: string = await response.text();
        console.log(serverAntwort);
        console.log("eingabe gesendet");
    }
    async function showData(): Promise<void> {
        url = "https://marthgissose2021.herokuapp.com";
        path = "/get";
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + path + "?" + query.toString();
        let response: Response = await fetch(url);
        let serverAntwort: string = await response.text();
        console.log(serverAntwort);
        console.log("antwort erhalten");
        div.innerHTML = serverAntwort;

    }



}
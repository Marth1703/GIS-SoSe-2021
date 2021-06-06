namespace Aufgabe3_2 {
    document.getElementById("html").addEventListener("click", clickHtml);
    document.getElementById("json").addEventListener("click", clickJson);
    let url: string;
    let div: HTMLDivElement = <HTMLDivElement>document.getElementById("anzeige");

    async function clickHtml(): Promise<void> {
        url = "https://marthgissose2021.herokuapp.com/";
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/html?" + query.toString();
        let response: Response = await fetch(url);
        let serverAntwort: string = await response.text();
        console.log(serverAntwort);
        console.log("antwort erhalten");
        div.innerHTML = serverAntwort;
    }

    async function clickJson(): Promise<void> {
        url = "https://marthgissose2021.herokuapp.com/";
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/json?" + query.toString();
        let response: Response = await fetch(url);
        let serverAntwort: string = await response.text();
        console.log(serverAntwort);
        console.log("antwort erhalten");
    }

}
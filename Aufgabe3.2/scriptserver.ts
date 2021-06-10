namespace Aufgabe3_2 {
    let form: HTMLFormElement = <HTMLFormElement>document.getElementById("formular");
    let submitHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("html");
    let submitJson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("json");
    submitHtml.addEventListener("click", clickHtml);
    submitJson.addEventListener("click", clickJson);
    let url: string;
    let div: HTMLDivElement = <HTMLDivElement>document.getElementById("anzeige");
    let formData: FormData = new FormData(form);

    async function clickHtml(): Promise<void> {
        url = "https://marthgissose2021.herokuapp.com/";
        
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/html" + "?" + query.toString();
        let response: Response = await fetch(url);
        let serverAntwort: string = await response.text();
        console.log(serverAntwort);
        console.log("antwort erhalten");
        div.innerHTML = serverAntwort;
    }

    async function clickJson(): Promise<void> {
        url = "https://marthgissose2021.herokuapp.com/";
        
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/json" + "?" + query.toString();
        let response: Response = await fetch(url);
        let serverAntwort: string = await JSON.stringify(response.json());
        console.log(serverAntwort);
        console.log("antwort erhalten");
        
    }

}
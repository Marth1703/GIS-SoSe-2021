
export namespace Aufgabe3_2 {
    document.getElementById("html").addEventListener("click", test);
    document.getElementById("html").addEventListener("click", clickHtml);
    document.getElementById("json").addEventListener("click", clickJson);
    //htmlButton.addEventListener("click", handleHTML);
    //jsonButton.addEventListener("click", handleJSON);
    let url: string = "https://marthgissose2021.herokuapp.com/";
    let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");
    document.body.appendChild(div);  

    async function clickHtml(): Promise<void> {
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
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/json?" + query.toString();
        let response: Response = await fetch(url);
        let serverAntwort: string = await response.text();
        console.log(serverAntwort);
        console.log("antwort erhalten");
        div.innerHTML = serverAntwort;
    }
    function test(): void {
        console.log("hallo");
        
    }

}
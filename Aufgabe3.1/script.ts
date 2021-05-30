namespace Aufgabe3_1 {

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        console.log(response.text());
        console.log("test321");
    }

    function buttonclick(): void {
        communicate("https://marthgissose2021.herokuapp.com/");
        console.log("test123");
    }

    let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");
    let button: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    let p: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
    p.innerText = "Wahl";
    button.addEventListener("click", buttonclick);
    button.appendChild(p);
    div.appendChild(button);
    document.body.appendChild(div);
}
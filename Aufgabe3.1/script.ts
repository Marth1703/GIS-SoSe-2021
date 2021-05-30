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

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", buttonclick);
}
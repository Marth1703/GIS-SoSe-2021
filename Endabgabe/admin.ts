namespace Endabgabe {

    loadCards();
    interface Card {
        url: string;
        number: string;
    }

    let listDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("adminlist");
    let addButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("add");
    addButton.addEventListener("click", addCard);

    let url: string;
    async function loadCards(): Promise<void> {
        url = "https://marthgissose2021.herokuapp.com";
        url = url + "/loadcards";
        let response: Response = await fetch(url);
        let loadAnswer: Card[] = await response.json();
        console.log("success");

        for (let z: number = 0; z < loadAnswer.length; z++) {
            let img: HTMLImageElement = document.createElement("img");
            img.setAttribute("src", loadAnswer[z].url);
            listDiv.appendChild(img);
        }
    }

    async function addCard(): Promise<void> {
        url = "https://marthgissose2021.herokuapp.com";
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/addcard" + "?" + query.toString();
        let response: Response = await fetch(url);
        let addAnswer: Card = await response.json();
        console.log(addAnswer);
        console.log("success");
    }

}
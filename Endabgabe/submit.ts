namespace Endabgabe {
    let timeDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("timedisplay");
    let submitButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
    submitButton.addEventListener("click", sendScore);
    
    let url: string;
    let pb: string = sessionStorage.getItem("time");
    timeDiv.innerHTML = pb;

    interface Score {
        name: string;
        time: string;
    }

    async function sendScore(): Promise<void> {
        url = "https://marthgissose2021.herokuapp.com";
        let formData: FormData = new FormData(document.forms[0]);
        formData.append("time", pb);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/scoretodb" + "?" + query.toString();
        let response: Response = await fetch(url);
        let scoreAnswer: Score = await response.json();
        console.log(scoreAnswer);
        console.log("success");
    }
}
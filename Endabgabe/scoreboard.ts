namespace Endabgabe {

    let timeList: HTMLElement = <HTMLElement>document.getElementById("times");
    let importantDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("memeDiv");
    let loadButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("recieve");
    loadButton.addEventListener("click", revieceScores);
    loadButton.addEventListener("click", loadImportancy);

    interface Score {
        name: string;
        time: string;
    }

    let url: string = "";
    async function revieceScores(): Promise<void> {
        url = "https://marthgissose2021.herokuapp.com";
        url = url + "/loadtimes";
        let response: Response = await fetch(url);
        let scoreAnswer: Score[] = await response.json();
        for (let i: number = 0; i < scoreAnswer.length; i++) {
            let timeLi: HTMLElement = <HTMLElement>document.createElement("li");
            timeLi.innerHTML = JSON.stringify(scoreAnswer[i]);
            timeList.appendChild(timeLi);
            console.log("time added");
        }
    }
    revieceScores();

    function loadImportancy(): void {
        let display: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        display.setAttribute("src", "images/memeXd.png");
        importantDiv.appendChild(display);
    }
}
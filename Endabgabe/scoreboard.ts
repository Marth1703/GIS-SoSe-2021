namespace Endabgabe {

    let timeList: HTMLElement = <HTMLElement>document.getElementById("times");

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
}

namespace Endabgabe {

    let field: HTMLDivElement = <HTMLDivElement>document.getElementById("board");
    let starter: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startgame");
    let clock: HTMLDivElement = <HTMLDivElement>document.getElementById("stopwatch");
    let sec: number = 0;
    let minute: number = 0;
    let secs: string = "";
    let mins: string = "";
    let win: number = 0;
    let currentTime: string = "";
    //let stack: Card[];
    let card1: string = "";
    let card2: string = "";

    export let s: string[] = ["images/Ike.png", "images/Falco.png", "images/Ice_Climbers.png", "images/Bowser.png", "images/Captain_Falcon.png", "images/Ness.png", "images/Donkey_Kong.png", "images/Meta_Knight.png",
        "images/Ike.png", "images/Falco.png", "images/Ice_Climbers.png", "images/Bowser.png", "images/Captain_Falcon.png", "images/Ness.png", "images/Donkey_Kong.png", "images/Meta_Knight.png"];
    let shuffledstack: string[] = shuffleArray(s);
    starter.addEventListener("click", function (): void { createField(shuffledstack); });

    function shuffleArray(str: string[]): string[] {
        let x: string = "";
        let lang: number = str.length - 1;
        for (let z: number = lang - 1; z > 0; z--) {
            let rand: number = Math.floor(Math.random() * (lang + 1));
            x = str[z];
            str[z] = str[rand];
            str[rand] = x;
            console.log(rand);
        }

        return str;
    }

    function createField(_s: string[]): void {
        let row1: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        let row2: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        let row3: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        let row4: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        row1.classList.add("rows");
        row2.classList.add("rows");
        row3.classList.add("rows");
        row4.classList.add("rows");
        field.appendChild(row1);
        field.appendChild(row2);
        field.appendChild(row3);
        field.appendChild(row4);
        for (let h: number = 0; h < 16; h++) {
            let cardDiv: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            let cardIMG: HTMLImageElement = <HTMLImageElement>document.createElement("img");
            cardIMG.setAttribute("src", "images/Cardback.png");
            cardIMG.setAttribute("width", "100px");
            cardDiv.appendChild(cardIMG);
            cardDiv.setAttribute("style", "display:inline-block");
            cardIMG.setAttribute("id", "" + h);
            cardIMG.addEventListener("click", function (): void { pick("" + h); });
            if (h < 4) {
                row1.appendChild(cardDiv);
            }
            else if (h < 8) {
                row2.appendChild(cardDiv);
            }
            else if (h < 12) {
                row3.appendChild(cardDiv);
            }
            else if (h < 16) {
                row4.appendChild(cardDiv);
            }
        }
        function pick(check: string): void {

            if (card1 == "" && card2 == "") {
                let choice: HTMLImageElement = <HTMLImageElement>document.getElementById(check);
                choice.setAttribute("src", shuffledstack[parseInt(check)]);
                card1 = check;
            }
            else if (card1 != "" && card2 == "") {
                let choice2: HTMLImageElement = <HTMLImageElement>document.getElementById(check);
                choice2.setAttribute("src", shuffledstack[parseInt(check)]);
                card2 = check;
            }
            if (card1 != "" && card2 != "") {
                let choice1: HTMLImageElement = <HTMLImageElement>document.getElementById(card1);
                let choice2: HTMLImageElement = <HTMLImageElement>document.getElementById(card2);
                checkCards(choice1, choice2);
                card1 = "";
                card2 = "";
            }

        }
        function checkCards(c1: HTMLImageElement, c2: HTMLImageElement): void {
            if (c1.getAttribute("src") == c2.getAttribute("src") && c2.getAttribute("src") != "images/background.png" && c2.getAttribute("src") != "images/background.png" && c1.getAttribute("id") != c2.getAttribute("id")) {
                setTimeout(function (): void {
                    let rep1: HTMLImageElement = <HTMLImageElement>document.createElement("img");
                    let rep2: HTMLImageElement = <HTMLImageElement>document.createElement("img");
                    rep1.setAttribute("src", "images/black.png");
                    rep2.setAttribute("src", "images/black.png");
                    c1.parentElement.replaceChild(rep1, c1);
                    c2.parentElement.replaceChild(rep2, c2);
                    win++;
                    console.log(win);
                    if (win > 7) {
                        sessionStorage.setItem("time", currentTime);
                        console.log("letsgo");
                        let sub: HTMLDivElement = <HTMLDivElement>document.getElementById("submission");
                        let contin: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
                        contin.setAttribute("href", "submit.html");
                        contin.setAttribute("style", "color:white");
                        contin.innerHTML = "submit Score";
                        sub.appendChild(contin);
                        document.body.appendChild(sub);
                    }
                },         300);

            }
            else {
                setTimeout(function (): void {
                    c1.setAttribute("src", "images/Cardback.png");
                    c2.setAttribute("src", "images/Cardback.png");
                },         500);

            }

        }
        setInterval(addTime, 1000);

        function addTime(): void {
            sec++;
            secs = "" + sec;
            mins = "" + minute;
            if (sec >= 60) {
                sec = 0;
                minute++;
            }
            if (sec < 10) {
                secs = "0" + sec;
            }
            if (minute < 10) {
                mins = "0" + minute;
            }
            currentTime = mins + ":" + secs;
            clock.innerHTML = mins + ":" + secs;
        }

    }
    console.log("start");

    //createField(shuffledstack);
}

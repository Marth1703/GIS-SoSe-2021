"use strict";
var Endabgabe;
(function (Endabgabe) {
    let field = document.getElementById("board");
    let starter = document.getElementById("startgame");
    let clock = document.getElementById("stopwatch");
    let sec = 0;
    let minute = 0;
    let secs = "";
    let mins = "";
    let win = 0;
    let currentTime = "";
    let card1 = "";
    let card2 = "";
    Endabgabe.s = ["images/Ike.png", "images/Falco.png", "images/Ice_Climbers.png", "images/Bowser.png", "images/Captain_Falcon.png", "images/Ness.png", "images/Donkey_Kong.png", "images/Meta_Knight.png",
        "images/Ike.png", "images/Falco.png", "images/Ice_Climbers.png", "images/Bowser.png", "images/Captain_Falcon.png", "images/Ness.png", "images/Donkey_Kong.png", "images/Meta_Knight.png"];
    let shuffledstack = shuffleArray(Endabgabe.s);
    starter.addEventListener("click", function () { createField(shuffledstack); });
    //Funktion zum Vermischen eines Arrays. Quelle= "https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array"
    function shuffleArray(str) {
        let x = "";
        let lang = str.length - 1;
        for (let z = lang - 1; z > 0; z--) {
            let rand = Math.floor(Math.random() * (lang + 1));
            x = str[z];
            str[z] = str[rand];
            str[rand] = x;
            console.log(rand);
        }
        return str;
    }
    function createField(_s) {
        let row1 = document.createElement("div");
        let row2 = document.createElement("div");
        let row3 = document.createElement("div");
        let row4 = document.createElement("div");
        row1.classList.add("rows");
        row2.classList.add("rows");
        row3.classList.add("rows");
        row4.classList.add("rows");
        field.appendChild(row1);
        field.appendChild(row2);
        field.appendChild(row3);
        field.appendChild(row4);
        for (let h = 0; h < 16; h++) {
            let cardDiv = document.createElement("div");
            let cardIMG = document.createElement("img");
            cardIMG.setAttribute("src", "images/Cardback.png");
            cardIMG.setAttribute("width", "100px");
            cardDiv.appendChild(cardIMG);
            cardDiv.setAttribute("style", "display:inline-block");
            cardIMG.setAttribute("id", "" + h);
            cardIMG.addEventListener("click", function () { pick("" + h); });
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
        function pick(check) {
            if (card1 == "" && card2 == "") {
                let choice = document.getElementById(check);
                choice.setAttribute("src", shuffledstack[parseInt(check)]);
                card1 = check;
            }
            else if (card1 != "" && card2 == "") {
                let choice2 = document.getElementById(check);
                choice2.setAttribute("src", shuffledstack[parseInt(check)]);
                card2 = check;
            }
            if (card1 != "" && card2 != "") {
                let choice1 = document.getElementById(card1);
                let choice2 = document.getElementById(card2);
                checkCards(choice1, choice2);
                card1 = "";
                card2 = "";
            }
        }
        function checkCards(c1, c2) {
            if (c1.getAttribute("src") == c2.getAttribute("src") && c2.getAttribute("src") != "images/background.png" && c2.getAttribute("src") != "images/background.png" && c1.getAttribute("id") != c2.getAttribute("id")) {
                setTimeout(function () {
                    let rep1 = document.createElement("img");
                    let rep2 = document.createElement("img");
                    rep1.setAttribute("src", "images/black.png");
                    rep2.setAttribute("src", "images/black.png");
                    c1.parentElement.replaceChild(rep1, c1);
                    c2.parentElement.replaceChild(rep2, c2);
                    win++;
                    console.log(win);
                    if (win > 7) {
                        sessionStorage.setItem("time", currentTime);
                        console.log("letsgo");
                        let sub = document.getElementById("submission");
                        let contin = document.createElement("a");
                        contin.setAttribute("href", "submit.html");
                        contin.setAttribute("style", "color:white");
                        contin.innerHTML = "submit Score";
                        sub.appendChild(contin);
                        document.body.appendChild(sub);
                    }
                }, 300);
            }
            else {
                setTimeout(function () {
                    c1.setAttribute("src", "images/Cardback.png");
                    c2.setAttribute("src", "images/Cardback.png");
                }, 500);
            }
        }
        setInterval(addTime, 1000);
        function addTime() {
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
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=game.js.map
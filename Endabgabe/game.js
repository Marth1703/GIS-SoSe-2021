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
    //let stack: Card[];
    let card1 = "";
    let card2 = "";
    let s = ["images/Ike.png", "images/Falco.png", "images/Ice_Climbers.png", "images/Bowser.png", "images/Captain_Falcon.png", "images/Ness.png", "images/Donkey_Kong.png", "images/Meta_Knight.png",
        "images/Ike.png", "images/Falco.png", "images/Ice_Climbers.png", "images/Bowser.png", "images/Captain_Falcon.png", "images/Ness.png", "images/Donkey_Kong.png", "images/Meta_Knight.png"];
    let shuffledstack = shuffleArray(s);
    starter.addEventListener("click", function () { createField(shuffledstack); });
    /* function setCards(): string[] {
     for (let i1: number = 0; i1 < 1; i1++) {
        _s[i1] = "https://static.wikia.nocookie.net/mario/images/7/71/SSB4_Artwork_Ike.png/revision/latest/scale-to-width-down/1000?cb=20190607174619&path-prefix=de";
    }
    for (let i2: number = 2; i2 < 3; i2++) {
        _s[i2] = "https://static.wikia.nocookie.net/mario/images/9/98/SSBU_Artwork_Ice_Climbers.png/revision/latest/scale-to-width-down/350?cb=20180903164338&path-prefix=de";
    }
    for (let i3: number = 4; i3 < 5; i3++) {
        _s[i3] = "https://static.wikia.nocookie.net/mario/images/5/5c/SSB4_Artwork_Falco.png/revision/latest/scale-to-width-down/120?cb=20140928173233&path-prefix=de";
    }
    for (let i4: number = 6; i4 < 7; i4++) {
        _s[i4] = "https://static.wikia.nocookie.net/mario/images/6/64/KSA_Meta-Knight.png/revision/latest/scale-to-width-down/350?cb=20190618200846&path-prefix=de";
    }
    for (let i5: number = 8; i5 < 9; i5++) {
        _s[i5] = "https://static.wikia.nocookie.net/mario/images/8/88/SSBU_Artwork_Captain_Falcon.png/revision/latest/scale-to-width-down/350?cb=20190713214405&path-prefix=de";
    }
    for (let i6: number = 10; i6 < 11; i6++) {
        _s[i6] = "https://static.wikia.nocookie.net/mario/images/2/26/SMP_Artwork_Donkey_Kong.png/revision/latest/scale-to-width-down/350?cb=20190607152749&path-prefix=de";
    }
    for (let i7: number = 12; i7 < 13; i7++) {
        _s[i7] = "https://static.wikia.nocookie.net/mario/images/6/68/NSMBUD_Artwork_Bowser.png/revision/latest/scale-to-width-down/350?cb=20190618203244&path-prefix=de";
   }
    for (let i8: number = 14; i8 < 15; i8++) {
        _s[i8] = "https://static.wikia.nocookie.net/mario/images/8/8f/SSBU_Artwork_Ness.png/revision/latest/scale-to-width-down/350?cb=20190627175941&path-prefix=de";
    }

    return _s;

} */
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
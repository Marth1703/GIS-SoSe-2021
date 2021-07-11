"use strict";
var Endabgabe;
(function (Endabgabe) {
    let timeList = document.getElementById("times");
    let url = "";
    async function revieceScores() {
        url = "https://marthgissose2021.herokuapp.com";
        url = url + "/loadtimes";
        let response = await fetch(url);
        let scoreAnswer = await response.json();
        for (let i = 0; i < scoreAnswer.length; i++) {
            let timeLi = document.createElement("li");
            timeLi.innerHTML = JSON.stringify(scoreAnswer[i]);
            timeList.appendChild(timeLi);
            console.log("time added");
        }
    }
    revieceScores();
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=scoreboard.js.map
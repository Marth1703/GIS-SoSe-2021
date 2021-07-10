"use strict";
var Endabgabe;
(function (Endabgabe) {
    let timeDiv = document.getElementById("timedisplay");
    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", sendScore);
    let url;
    let pb = sessionStorage.getItem("duration");
    timeDiv.innerHTML = pb;
    async function sendScore() {
        url = "https://marthgissose2021.herokuapp.com";
        let formData = new FormData(document.forms[0]);
        formData.append("time", pb);
        let query = new URLSearchParams(formData);
        url = url + "/scoretodb" + "?" + query.toString();
        let response = await fetch(url);
        let scoreAnswer = await response.json();
        console.log(scoreAnswer);
        console.log("success");
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=submit.js.map
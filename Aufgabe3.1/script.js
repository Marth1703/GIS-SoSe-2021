"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    let button = document.getElementById("anmelden");
    button.addEventListener("click", buttonclick);
    let div = document.createElement("div");
    document.body.appendChild(div);
    async function communicate(_url) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let serverAntwort = await response.text();
        console.log(serverAntwort);
        console.log("antwort erhalten");
        div.innerHTML = serverAntwort;
    }
    function buttonclick() {
        communicate("https://marthgissose2021.herokuapp.com/");
        console.log("anfrage gestartet");
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map
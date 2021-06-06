"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_2 = void 0;
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let htmlButton = document.getElementById("html");
    let jsonButton = document.getElementById("json");
    htmlButton.addEventListener("click", handleHTML);
    jsonButton.addEventListener("click", handleJSON);
    let div = document.createElement("div");
    document.body.appendChild(div);
    async function clickHtml(_url) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        _url = _url + "/html?" + query.toString();
        let response = await fetch(_url);
        let serverAntwort = await response.text();
        console.log(serverAntwort);
        console.log("antwort erhalten");
        div.innerHTML = serverAntwort;
    }
    async function clickJson(_url) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        _url = _url + "/json?" + query.toString();
        let response = await fetch(_url);
        let serverAntwort = JSON.parse(await response.json());
        console.log(serverAntwort);
        console.log("antwort erhalten");
        div.innerHTML = serverAntwort;
    }
    function handleHTML() {
        clickHtml("https://marthgissose2021.herokuapp.com/");
        console.log("anfrage gestartet");
    }
    function handleJSON() {
        clickJson("https://marthgissose2021.herokuapp.com/");
        console.log("anfrage gestartet");
    }
})(Aufgabe3_2 = exports.Aufgabe3_2 || (exports.Aufgabe3_2 = {}));
//# sourceMappingURL=scriptserver.js.map
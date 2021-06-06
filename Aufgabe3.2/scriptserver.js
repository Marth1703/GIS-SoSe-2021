"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_2 = void 0;
var Aufgabe3_2;
(function (Aufgabe3_2) {
    document.getElementById("html").addEventListener("click", test);
    document.getElementById("html").addEventListener("click", clickHtml);
    document.getElementById("json").addEventListener("click", clickJson);
    //htmlButton.addEventListener("click", handleHTML);
    //jsonButton.addEventListener("click", handleJSON);
    let url = "https://marthgissose2021.herokuapp.com/";
    let div = document.createElement("div");
    document.body.appendChild(div);
    async function clickHtml() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = url + "/html?" + query.toString();
        let response = await fetch(url);
        let serverAntwort = await response.text();
        console.log(serverAntwort);
        console.log("antwort erhalten");
        div.innerHTML = serverAntwort;
    }
    async function clickJson() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = url + "/json?" + query.toString();
        let response = await fetch(url);
        let serverAntwort = await response.text();
        console.log(serverAntwort);
        console.log("antwort erhalten");
        div.innerHTML = serverAntwort;
    }
    function test() {
        console.log("hallo");
    }
})(Aufgabe3_2 = exports.Aufgabe3_2 || (exports.Aufgabe3_2 = {}));
//# sourceMappingURL=scriptserver.js.map
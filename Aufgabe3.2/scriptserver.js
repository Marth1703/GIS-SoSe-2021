"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    document.getElementById("html").addEventListener("click", clickHtml);
    document.getElementById("json").addEventListener("click", clickJson);
    let url;
    let div = document.getElementById("anzeige");
    async function clickHtml() {
        url = "https://marthgissose2021.herokuapp.com/";
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
        url = "https://marthgissose2021.herokuapp.com/";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = url + "/json?" + query.toString();
        let response = await fetch(url);
        let serverAntwort = await response.text();
        console.log(serverAntwort);
        console.log("antwort erhalten");
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=scriptserver.js.map
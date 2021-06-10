"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let form = document.getElementById("formular");
    let submitHtml = document.getElementById("html");
    let submitJson = document.getElementById("json");
    submitHtml.addEventListener("click", clickHtml);
    submitJson.addEventListener("click", clickJson);
    let url;
    let div = document.getElementById("anzeige");
    let formData = new FormData(form);
    async function clickHtml() {
        url = "https://marthgissose2021.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "/html" + "?" + query.toString();
        let response = await fetch(url);
        let serverAntwort = await response.text();
        console.log(serverAntwort);
        console.log("antwort erhalten");
        div.innerHTML = serverAntwort;
    }
    async function clickJson() {
        url = "https://marthgissose2021.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "/json" + "?" + query.toString();
        let response = await fetch(url);
        let serverAntwort = await JSON.stringify(response.json());
        console.log(serverAntwort);
        console.log("antwort erhalten");
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=scriptserver.js.map
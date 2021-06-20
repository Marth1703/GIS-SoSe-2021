"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let addButton = document.getElementById("schicken");
    let showButton = document.getElementById("erhalten");
    addButton.addEventListener("click", submitData);
    showButton.addEventListener("click", showData);
    let div = document.getElementById("anzeige");
    let url;
    let path;
    async function submitData() {
        url = "https://marthgissose2021.herokuapp.com";
        path = "/send";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = url + path + "?" + query.toString();
        let response = await fetch(url);
        let serverAntwort = await response.text();
        console.log(serverAntwort);
        console.log("eingabe gesendet");
    }
    async function showData() {
        url = "https://marthgissose2021.herokuapp.com";
        path = "/get";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = url + path + "?" + query.toString();
        let response = await fetch(url);
        let serverAntwort = await response.text();
        console.log(serverAntwort);
        console.log("antwort erhalten");
        div.innerHTML = serverAntwort;
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map
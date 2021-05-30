"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    async function communicate(_url) {
        let response = await fetch(_url);
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        console.log(response.text());
        console.log("test321");
    }
    function buttonclick() {
        communicate("https://marthgissose2021.herokuapp.com/");
        console.log("test123");
    }
    let button = document.getElementById("button");
    button.addEventListener("click", buttonclick);
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map
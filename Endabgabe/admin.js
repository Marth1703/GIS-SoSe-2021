"use strict";
var Endabgabe;
(function (Endabgabe) {
    let listDiv = document.getElementById("adminlist");
    let url = "https://marthgissose2021.herokuapp.com";
    async function loadCards() {
        url = "https://marthgissose2021.herokuapp.com";
        url = url + "/loadcards";
        let response = await fetch(url);
        let loadAnswer = await response.json();
        console.log("success");
        for (let z = 0; z < loadAnswer.length; z++) {
            let img = document.createElement("img");
            img.setAttribute("src", loadAnswer[z].url);
            listDiv.appendChild(img);
        }
    }
    async function addCard() {
        url = "https://marthgissose2021.herokuapp.com";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = url + "/addcard" + "?" + query.toString();
        let response = await fetch(url);
        let addAnswer = await response.json();
        console.log(addAnswer);
        console.log("success");
    }
    let addButton = document.getElementById("add");
    addButton.addEventListener("click", addCard);
    loadCards();
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=admin.js.map
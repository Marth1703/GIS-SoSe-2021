"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button1text = document.createElement("p");
    button1text.appendChild(document.createTextNode("New Rect"));
    let button2text = document.createElement("p");
    button2text.appendChild(document.createTextNode("Reset"));
    document.body.appendChild(button1);
    document.body.appendChild(button2);
    button1.appendChild(button1text);
    button2.appendChild(button2text);
    let height = Math.random() * 500;
    let width = Math.random() * 700;
    let rec1 = document.createElement("div");
    let rec2 = document.createElement("div");
    document.body.appendChild(rec1);
    rec1.style.background = "red";
    rec1.style.width = width + "px";
    rec1.style.height = height + "px";
    document.body.appendChild(rec2);
    rec2.style.background = "blue";
    rec2.style.width = Math.random() * 700 + "px";
    rec2.style.height = Math.random() * 500 + "px";
    button1.style.width = "80px";
    button1.style.height = "60px";
    button1.style.marginRight = "20px";
    button1.style.marginBottom = "20px";
    button2.style.width = "80px";
    button2.style.height = "60px";
    button2.style.marginBottom = "20px";
    function createRect() {
        let butrect = document.createElement("div");
        butrect.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.body.appendChild(butrect);
        butrect.style.width = Math.random() * 700 + "px";
        butrect.style.height = Math.random() * 500 + "px";
    }
    function refresh() {
        location.reload();
    }
    button1.addEventListener("click", createRect);
    button2.addEventListener("click", refresh);
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map
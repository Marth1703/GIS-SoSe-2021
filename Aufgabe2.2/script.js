"use strict";
var Aufgabe2_2;
(function (Aufgabe2_2) {
    function min(...inputs) {
        let speicher = inputs[0];
        for (let z = 0; z < inputs.length; z++) {
            if (inputs[z] < speicher) {
                speicher = inputs[z];
            }
        }
        return speicher;
    }
    console.log(min(3, 4, 5, 6, -3, 4));
    function isEven(a) {
        if (a < 0) {
            a *= -1;
        }
        if (a == 0) {
            return true;
        }
        else if (a == 1) {
            return false;
        }
        else {
            return isEven(a - 2);
        }
    }
    console.log(isEven(-74)); //50 -> true, 75 -> false, -1 -> Error, weil kein Fall für -1 definiert ist
    //man kann das Vorzeichen einfach umdrehen um die selbe Antwort zu erhalten.
    class Student {
        constructor(_name, _age, _course, _matriculation) {
            this.name = _name;
            this.age = _age;
            this.course = _course;
            this.matriculation = _matriculation;
        }
        showInfo() {
            console.log(this.name);
            console.log(this.course);
            console.log(this.matriculation);
        }
    }
    let stud1 = new Student("Max", 20, "MIB", 123345);
    let stud2 = new Student("Erik", 21, "MKB", 126645);
    let stud3 = new Student("Gustav", 22, "OMB", 124445);
    let studentarray = [];
    studentarray.push(stud1);
    studentarray.push(stud2);
    studentarray.push(stud3);
    studentarray.push(new Student("Franz", 23, "WIB", 214336));
    stud3.showInfo();
    function backwards(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            console.log(arr[i]);
        }
    }
    let testarr = [1, 2, 3, 4, 5];
    backwards(testarr);
    function join(arr1, arr2) {
        for (let i = 0; i <= arr2.length - 1; i++) {
            arr1.push(arr2[i]);
        }
        console.log(arr1);
    }
    let testarr1 = [1, 2, 3, 4];
    let testarr2 = [5, 6, 7, 8, 9];
    join(testarr1, testarr2);
    function split(arr, a, b) {
        if (a > b || arr.length - 1 < b) {
            console.log("falsche Übergabe!");
        }
        else {
            let newarr = [];
            for (let i = a; i <= b; i++) {
                newarr.push(arr[i]);
            }
            console.log(newarr);
        }
    }
    let testarr3 = [45, 654, -2, 44, 33, 22, 1];
    split(testarr3, 3, 5);
    let canvas = document.getElementById("myFirstCanvas");
    let context = canvas.getContext("2d");
    //sky
    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, 500);
    context.lineTo(500, 500);
    context.lineTo(500, 0);
    context.closePath();
    context.stroke();
    context.fill();
    //grass
    context.strokeStyle = "green";
    context.fillStyle = "green";
    context.beginPath();
    context.moveTo(0, 450);
    context.lineTo(0, 500);
    context.lineTo(500, 500);
    context.lineTo(500, 450);
    context.closePath();
    context.stroke();
    context.fill();
    //house
    context.strokeStyle = "white";
    context.fillStyle = "white";
    context.beginPath();
    context.moveTo(150, 450);
    context.lineTo(300, 450);
    context.lineTo(300, 350);
    context.lineTo(150, 350);
    context.closePath();
    context.stroke();
    context.fill();
    //roof
    context.strokeStyle = "orange";
    context.fillStyle = "orange";
    context.beginPath();
    context.moveTo(100, 350);
    context.lineTo(350, 350);
    context.lineTo(225, 250);
    context.closePath();
    context.stroke();
    context.fill();
    //treestump
    context.strokeStyle = "brown";
    context.fillStyle = "brown";
    context.beginPath();
    context.moveTo(400, 450);
    context.lineTo(420, 450);
    context.lineTo(420, 320);
    context.lineTo(400, 320);
    context.closePath();
    context.stroke();
    context.fill();
    //tree
    context.strokeStyle = "green";
    context.fillStyle = "green";
    context.beginPath();
    context.arc(410, 330, 50, 0, 360, false);
    context.closePath();
    context.stroke();
    context.fill();
    //clouds
    context.strokeStyle = "white";
    context.fillStyle = "white";
    context.beginPath();
    context.arc(400, 140, 50, 0, 360, false);
    context.arc(400, 110, 50, 0, 360, false);
    context.arc(360, 130, 50, 0, 360, false);
    context.arc(440, 110, 50, 0, 360, false);
    context.closePath();
    context.stroke();
    context.fill();
    let canvas2 = document.getElementById("myFirstCanvas2");
    let context2 = canvas2.getContext("2d");
    class Rect {
        constructor(_x1, _y1, _x2, _y2, _color) {
            this.x1 = _x1;
            this.y1 = _y1;
            this.x2 = _x2;
            this.y2 = _y2;
            this.color = _color;
        }
        drawRect() {
            context2.strokeStyle = this.color;
            context2.fillStyle = this.color;
            context2.beginPath();
            context2.moveTo(this.x1, this.y1);
            context2.lineTo(this.x2, this.y1);
            context2.lineTo(this.x2, this.y2);
            context2.lineTo(this.x1, this.y2);
            context2.closePath();
            context2.stroke();
            context2.fill();
        }
    }
    class RandRect {
        constructor(_color) {
            this.x1 = Math.floor(Math.random() * (499));
            this.y1 = Math.floor(Math.random() * (499));
            this.x2 = Math.floor(Math.random() * (500));
            this.y2 = Math.floor(Math.random() * (500));
            this.color = _color;
        }
        drawRect() {
            context2.strokeStyle = this.color;
            context2.fillStyle = this.color;
            context2.beginPath();
            context2.moveTo(this.x1, this.y1);
            context2.lineTo(this.x2, this.y1);
            context2.lineTo(this.x2, this.y2);
            context2.lineTo(this.x1, this.y2);
            context2.closePath();
            context2.stroke();
            context2.fill();
        }
    }
    let rect1 = new Rect(420, 20, 400, 400, "black");
    rect1.drawRect();
    let rand1 = new RandRect("yellow");
    rand1.drawRect();
    let rectarr = [new RandRect("red"), new RandRect("green"), new RandRect("blue")];
    rectarr[0].drawRect();
    rectarr[1].drawRect();
    rectarr[2].drawRect();
    //Bonus ist hoffentlich optional...
})(Aufgabe2_2 || (Aufgabe2_2 = {}));
//# sourceMappingURL=script.js.map
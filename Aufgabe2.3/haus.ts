namespace Aufgabe2_3 {

    export class Dach {
        public art: string;
        public farbe: string;

    }

    export class Mauer {
        public art: string;
        public farbe: string;
    }

    export class Fassade {
        public art: string;

    }

    export class Haus {
        public dach: Dach;
        public mauer: Mauer;
        public fassade: Fassade;

    }

    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("dach1");
    let contextdach1: CanvasRenderingContext2D = canvas.getContext("2d");
    let canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("dach2");
    let contextdach2: CanvasRenderingContext2D = canvas2.getContext("2d");
    let canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("dach3");
    let contextdach3: CanvasRenderingContext2D = canvas3.getContext("2d");

    //Skizzen, Darstellung wird noch angepasst
    contextdach1.strokeStyle = "orange";
    contextdach1.fillStyle = "orange";
    contextdach1.beginPath();
    contextdach1.moveTo(50, 350);
    contextdach1.lineTo(400, 350);
    contextdach1.lineTo(225, 250);
    contextdach1.closePath();
    contextdach1.stroke();
    contextdach1.fill();

    contextdach2.strokeStyle = "orange";
    contextdach2.fillStyle = "orange";
    contextdach2.beginPath();
    contextdach2.moveTo(50, 350);
    contextdach2.lineTo(400, 350);
    contextdach2.lineTo(225, 250);
    contextdach2.closePath();
    contextdach2.stroke();
    contextdach2.fill();

    contextdach3.strokeStyle = "orange";
    contextdach3.fillStyle = "orange";
    contextdach3.beginPath();
    contextdach3.moveTo(50, 350);
    contextdach3.lineTo(400, 350);
    contextdach3.lineTo(225, 250);
    contextdach3.closePath();
    contextdach3.stroke();
    contextdach3.fill();

    function chooseRoof1(): void {
        console.log(auswahlDach[0].art);
        console.log(auswahlDach[0].farbe);
    }

    function chooseRoof2(): void {
        console.log(auswahlDach[1].art);
        console.log(auswahlDach[1].farbe);
    }

    function chooseRoof3(): void {
        console.log(auswahlDach[2].art);
        console.log(auswahlDach[2].farbe);
    }

    document.querySelector("#firstdach").addEventListener("click", chooseRoof1);
    document.querySelector("#seconddach").addEventListener("click", chooseRoof2);
    document.querySelector("#thirddach").addEventListener("click", chooseRoof3);
/*
    let hauptdiv1: HTMLElement = document.createElement("button");
    let div1: HTMLElement = document.createElement("button");
    let div2: HTMLElement = document.createElement("button");
    let div3: HTMLElement = document.createElement("button");
    let button1: HTMLElement = document.createElement("button");
    let button2: HTMLElement = document.createElement("button");
    let button3: HTMLElement = document.createElement("button");
    document.body.appendChild(hauptdiv1);
    hauptdiv1.appendChild(div1);
    hauptdiv1.appendChild(div2);
    hauptdiv1.appendChild(div3);
    div1.appendChild(button1);
    div2.appendChild(button2);
    div3.appendChild(button3);
    button1.appendChild(document.createTextNode("choose"));
    button2.appendChild(document.createTextNode("choose"));
    button3.appendChild(document.createTextNode("choose"));
    hauptdiv1.classList.add("dachbuttons");
    */
    


}
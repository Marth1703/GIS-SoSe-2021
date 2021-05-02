namespace Aufgabe2_2 {

    function min(...inputs: number[]): number {
        let speicher: number = inputs[0];
        for (let z: number = 0; z < inputs.length; z++) {
            if (inputs[z] < speicher) {
                speicher = inputs[z];
            }
        }
        return speicher;
    }
    console.log(min(3, 4, 5, 6, -3, 4));

    function isEven(a: number): boolean {
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
        public name: string;
        public age: number;
        public course: string;
        public matriculation: number;

        constructor(_name: string, _age: number, _course: string, _matriculation: number) {
            this.name = _name;
            this.age = _age;
            this.course = _course;
            this.matriculation = _matriculation;
        }
        public showInfo(): void {
            console.log(this.name);
            console.log(this.course);
            console.log(this.matriculation);
        }
    }

    let stud1: Student = new Student("Max", 20, "MIB", 123345);
    let stud2: Student = new Student("Erik", 21, "MKB", 126645);
    let stud3: Student = new Student("Gustav", 22, "OMB", 124445);
    let studentarray: Student[] = [];
    studentarray.push(stud1);
    studentarray.push(stud2);
    studentarray.push(stud3);
    studentarray.push(new Student("Franz", 23, "WIB", 214336));
    stud3.showInfo();

    function backwards(arr: number[]): void {

        for (let i: number = arr.length - 1; i >= 0; i--) {
            console.log(arr[i]);
        }

    }
    let testarr: number[] = [1, 2, 3, 4, 5];
    backwards(testarr);

    function join(arr1: number[], arr2: number[]): void {
        for (let i: number = 0; i <= arr2.length - 1; i++) {
            arr1.push(arr2[i]);
        }
        console.log(arr1);
    }
    let testarr1: number[] = [1, 2, 3, 4];
    let testarr2: number[] = [5, 6, 7, 8, 9];
    join(testarr1, testarr2);

    function split(arr: number[], a: number, b: number): void {
        if (a > b || arr.length - 1 < b) {
            console.log("falsche Übergabe!");
        }
        else {
            let newarr: number[] = [];
            for (let i: number = a; i <= b; i++) {
                newarr.push(arr[i]);
            }
            console.log(newarr);
        }
    }
    let testarr3: number[] = [45, 654, -2, 44, 33, 22, 1];
    split(testarr3, 3, 5);

    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");
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

    let canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas2");
    let context2: CanvasRenderingContext2D = canvas2.getContext("2d");
    class Rect {
        public x1: number;
        public y1: number;
        public x2: number;
        public y2: number;
        public color: string;

        constructor(_x1: number, _y1: number, _x2: number, _y2: number, _color: string) {
            this.x1 = _x1;
            this.y1 = _y1;
            this.x2 = _x2;
            this.y2 = _y2;
            this.color = _color;
        }
        public drawRect(): void {
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
        public x1: number;
        public y1: number;
        public x2: number;
        public y2: number;
        public color: string;

        constructor(_color: string) {
            this.x1 = Math.floor(Math.random() * (499));
            this.y1 = Math.floor(Math.random() * (499));
            this.x2 = Math.floor(Math.random() * (500));
            this.y2 = Math.floor(Math.random() * (500));
            this.color = _color;
        }
        public drawRect(): void {
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
    
    let rect1: Rect = new Rect(420, 20, 400, 400, "black");
    rect1.drawRect();
    let rand1: RandRect = new RandRect("yellow");
    rand1.drawRect();
    let rectarr: RandRect[] = [new RandRect("red"), new RandRect("green"), new RandRect("blue")];
    rectarr[0].drawRect();
    rectarr[1].drawRect();
    rectarr[2].drawRect();

    //Bonus ist hoffentlich optional...
}
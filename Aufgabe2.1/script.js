"use strict";
function a1() {
    let x = "Alles";
    console.log(x);
    funcB();
    console.log(x);
    funcA();
    console.log(x);
    funcC();
}
a1();
function funcA() {
    console.log("klar?");
}
function funcB() {
    console.log("Gute!");
}
function funcC() {
    console.log("Logo!");
}
// Ausgabe: Alles, Klar?, Logo!
// Für Variablen keine Zahlen am Anfang aber bspw. a1 möglich
// Der Debugger veranschaulicht, wie beim Aufruf der Funktion func1 zuerst die komplette Funktion durchflogen wird bevor a1 weiterläuft.
//Die Funktion wird i von 9 bis 1 ausgeben.
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
//stimmt :)
//Chrome zeigt überraschenderweise überall dort, wo die Variable vorkommt die Änderung gelb hervorgehoben an.
//Zur 3 kann ich nicht wirklich kommentieren, interessant finde ich aber, dass man sich zusätzlich zu i sogar auch NaN ausgeben kann, wie auch immer das von Nutzen sein könnte...
//Außerdem wird anders als in Java vor geschweiften Klammern ein Leerzeichen gewollt, was mir neu ist.
//Annahme zu 4: Zuerst wird "Hallo" ausgegeben, dann "Bla", weil hier das Hallo in y vom Bla überschrieben wird.
//Dann wird wieder "Hallo" ausgegeben, danach "Blubb" und zum Schluss nochmal der globale string x="Hallo". x ="Test" bzw. func3 ist also irrelevant.
let x = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
function func1(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
//Zu meiner Verwunderung wird doch "Test" ausgegeben. Ich bin davon ausgegangen, dass bloß in func3 x="Test" gilt und nach Ende der Funktion wieder der globale String betrachtet wird.
//"normale" Variablen wie Zahlen können vielfältiger gebraucht werden, da sie auch in Rechenoperationen Verwendung finden. Funktionen können zwar auch wi Variablen deklariert werden, dies hat allerdings in diesem Kurs keine große Verwendung.
function multiply(x1, x2) {
    return (x1 * x2);
}
console.log(multiply(2, 4));
function max(y1, y2) {
    if (y1 > y2) {
        return y1;
    }
    else {
        return y2;
    }
}
console.log(max(5, 5));
let zaehl = 0;
let b = 0;
while (zaehl < 101) {
    b += zaehl;
    zaehl++;
}
console.log(b);
for (let j = 0; j < 10; j++) {
    console.log(100 * Math.random());
}
function factorial(n) {
    let k = n;
    if (n < 1) {
        return 1;
    }
    else {
        for (let z = 1; z < k; z++) {
            n *= z;
        }
        return n;
    }
}
console.log(factorial(6));
//# sourceMappingURL=script.js.map
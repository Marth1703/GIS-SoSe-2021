"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    Aufgabe2_4.auswahlHaus = {
        dach: [{ art: "Flachdach", bild: "./Bilder/dach1.png" }, { art: "Satteldach", bild: "./Bilder/dach2.png" }, { art: "Zeltdach", bild: "./Bilder/dach3.png" }],
        mauer: [{ art: "Betonmauer", bild: "./Bilder/mauer1.png" }, { art: "Steinmauer", bild: "./Bilder/mauer2.png" }, { art: "Holzdach", bild: "./Bilder/mauer3.png" }],
        garten: [{ art: "Keinen", bild: "./Bilder/garten1.png" }, { art: "Schrebergarten", bild: "./Bilder/garten2.png" }, { art: "Wiese", bild: "./Bilder/garten3.png" }]
    };
    Aufgabe2_4.hausJSON = JSON.stringify(Aufgabe2_4.auswahlHaus);
    console.log(Aufgabe2_4.hausJSON);
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=data.js.map
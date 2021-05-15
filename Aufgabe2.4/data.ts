namespace Aufgabe2_4 {

   export interface Hausteil {
      art: string;
      bild: string;
   }

   export interface Haus {
      dach: Hausteil[];
      mauer: Hausteil[];
      garten: Hausteil[];

   }

   export let auswahlHaus: Haus = {
      dach: [{ art: "Flachdach", bild: "./Bilder/dach1.png" }, { art: "Satteldach", bild: "./Bilder/dach2.png" }, { art: "Zeltdach", bild: "./Bilder/dach3.png" }],
      mauer: [{ art: "Betonmauer", bild: "./Bilder/mauer1.png" }, { art: "Steinmauer", bild: "./Bilder/mauer2.png" }, { art: "Holzdach", bild: "./Bilder/mauer3.png" }],
      garten: [{ art: "Keinen", bild: "./Bilder/garten1.png" }, { art: "Schrebergarten", bild: "./Bilder/garten2.png" }, { art: "Wiese", bild: "./Bilder/garten3.png" }]
   };

   export let hausJSON: string = JSON.stringify(auswahlHaus);
   console.log(hausJSON);

}
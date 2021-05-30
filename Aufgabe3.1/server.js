"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    //Hier wird der Server gestartet indem ihm der Port "8100" mitgeteilt wird bzw. diese Variable immer auf 8100 gesetzt wird.
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    //Hier werden dem Server seine Funktionen hinzugefügt: zum einen sein "Listening" was automatisch in der Konsole steht wenn keine Anfrage kommt und "I hear voices" was bei der Interaktion ausgegeben wird.
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    //Hier werden die genannten Funktionen initialisiert.
    function handleListen() {
        console.log("Listening");
    }
    //Dieser Funktion werden automatisch Anfrage und Nachricht hinzugefügt  
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        //Hier werden die "metadaten?" der Antwort bestimmt.
        _response.setHeader("content-type", "text/html; charset=utf-8");
        //Access Control ist wohl eine Kontrolle, wer von wo Zugriff hat...
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        console.log(_request.url);
        _response.end();
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map
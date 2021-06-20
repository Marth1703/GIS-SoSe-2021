"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Mongo = require("mongodb");
const Http = require("http");
const Url = require("url");
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let eingabe;
    let url = "mongodb+srv://MarthUser:12345qwertz@marthcluster.hmi8e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    connectToDatabase(url);
    function startServer(_port) {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        eingabe = mongoClient.db("Test").collection("Students");
        console.log("Connected", eingabe != undefined);
        let cursor = eingabe.find();
        let eintraege = await cursor.toArray();
        return eintraege;
    }
    async function readDatabase(_url, eintrag) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        eingabe = mongoClient.db("Test").collection("Students");
        eingabe.insertOne(eintrag);
        console.log("Inserted", eingabe != undefined);
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url1 = Url.parse(_request.url, true);
            let input = { name: url1.query.name + "", vorname: url1.query.nachname + "", matrikel: url1.query.matrikel + "" };
            if (url1.pathname == "/send") {
                await readDatabase(url, input);
                console.log("Daten hinzugefügt");
            }
            else if (url1.pathname == "/get") {
                let baseData = await connectToDatabase(url);
                let antwort = JSON.stringify(baseData);
                _response.write(antwort);
            }
        }
        _response.end();
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map
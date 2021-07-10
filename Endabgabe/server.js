"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Mongo = require("mongodb");
const Http = require("http");
const Url = require("url");
var Endabgabe;
(function (Endabgabe) {
    let cards;
    let scores;
    let url = "mongodb+srv://MarthUser:12345qwertz@marthcluster.hmi8e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    function startServer(_port) {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
        function handleListen() {
            console.log("Listening");
        }
        async function connectToImages(_url) {
            let options = { useNewUrlParser: true, useUnifiedTopology: true };
            let mongoClient = new Mongo.MongoClient(_url, options);
            await mongoClient.connect();
            cards = mongoClient.db("Memory").collection("Cards");
            console.log("DB connected", cards != undefined);
        }
        async function connectToScores(_url) {
            let options = { useNewUrlParser: true, useUnifiedTopology: true };
            let mongoClient = new Mongo.MongoClient(_url, options);
            await mongoClient.connect();
            scores = mongoClient.db("Memory").collection("Times");
            console.log("DB connected", scores != undefined);
        }
        async function handleRequest(_request, _response) {
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.setHeader("content-type", "text/html; charset=utf-8");
            if (_request.url) {
                let url = Url.parse(_request.url, true);
                if (url.pathname == "/scoretodb") {
                    let submission = JSON.stringify(url.query);
                    await storeScore(submission);
                    _response.write(submission);
                }
                if (url.pathname == "/loadcards") {
                    let show = await adminload();
                    _response.write(JSON.stringify(show));
                }
                if (url.pathname == "/addcard") {
                    let addition = JSON.stringify(url.query);
                    await storeCard(addition);
                    _response.write(addition);
                }
            }
            _response.end();
        }
        async function storeScore(_submission) {
            connectToScores(url);
            scores.insertOne(_submission);
        }
        async function adminload() {
            connectToImages(url);
            let cursor = cards.find();
            let result = await cursor.toArray();
            return result;
        }
        async function storeCard(_addition) {
            connectToImages(url);
            cards.insertOne(_addition);
        }
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map
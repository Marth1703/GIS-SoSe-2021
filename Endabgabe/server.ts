import * as Mongo from "mongodb";
import * as Http from "http";
import * as Url from "url";

export namespace Endabgabe {

    interface Card {
        link: string;
        number: string;
    }

    interface Score {
        name: string;
        time: string;
    }

    let cards: Mongo.Collection;
    let scores: Mongo.Collection;
    let url: string = "mongodb+srv://MarthUser:12345qwertz@marthcluster.hmi8e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);

        function handleListen(): void {
            console.log("Listening");
        }

        async function connectToImages(_url: string): Promise<void> {
            let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
            let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
            await mongoClient.connect();
            cards = mongoClient.db("Memory").collection("Cards");
            console.log("DB connected", cards != undefined);
        }

        async function connectToScores(_url: string): Promise<void> {
            let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
            let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
            await mongoClient.connect();
            scores = mongoClient.db("Memory").collection("Times");
            console.log("DB connected", scores != undefined);
        }

        async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.setHeader("content-type", "text/html; charset=utf-8");
            if (_request.url) {
                let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

                if (url.pathname == "/scoretodb") {
                    _response.setHeader("content-type", "application/json");
                    let submission: string = JSON.stringify(url.query);
                    _response.write(submission);
                    await storeScore(submission);
                }
                if (url.pathname == "/loadcards") {
                    let show: Card[] = await adminload();
                    _response.write(JSON.stringify(show));
                }

                if (url.pathname == "/addcard") {
                    let addition: string = JSON.stringify(url.query);
                    await storeCard(addition);
                    _response.write(addition);
                }
            }
            _response.end();
        }

        async function storeScore(_submission: string): Promise<void> {
            connectToScores(url);
            scores.insertOne(_submission);
        }

        async function adminload(): Promise <Card[]> {
            connectToImages(url);
            let cursor: Mongo.Cursor = cards.find();
            let result: Card[] = await cursor.toArray();
            return result;
        }

        async function storeCard(_addition: string): Promise<void> {
            connectToImages(url);
            cards.insertOne(_addition);
        }
    }
}
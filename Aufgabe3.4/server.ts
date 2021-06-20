import * as Mongo from "mongodb";
import * as Http from "http";
import * as Url from "url";

export namespace Aufgabe3_4 {

    interface Formdaten {
        name: string;
        vorname: string;
        matrikel: string;
    }

    let eingabe: Mongo.Collection;
    let url: string = "mongodb+srv://MarthUser:12345qwertz@marthcluster.hmi8e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    connectToDatabase(url);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }

    function handleListen(): void {
        console.log("Listening");
    }

    async function connectToDatabase(_url: string): Promise<Formdaten[]> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        eingabe = mongoClient.db("Test").collection("Students");
        console.log("Connected", eingabe != undefined);
        let cursor: Mongo.Cursor = eingabe.find();
        let eintraege: Formdaten[] = await cursor.toArray();
        return eintraege;
    }

    async function readDatabase(_url: string, eintrag: Formdaten): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        eingabe = mongoClient.db("Test").collection("Students");
        eingabe.insertOne(eintrag);
        console.log("Inserted", eingabe != undefined);
    }

    

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise <void> {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");

        if (_request.url) {
            let url1: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let input: Formdaten = { name: url1.query.name + "", vorname: url1.query.nachname + "", matrikel: url1.query.matrikel + ""};
            if (url1.pathname == "/send") {
                await readDatabase(url, input);
                console.log("Daten hinzugefügt");
            }

            else if (url1.pathname == "/get") {
                let baseData: Formdaten[] = await connectToDatabase(url);
                let antwort: string = JSON.stringify(baseData);
                _response.write(antwort);
            }

        }

        _response.end();
    }

}
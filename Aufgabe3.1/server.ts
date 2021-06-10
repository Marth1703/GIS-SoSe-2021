/* import * as Http from "http";

export namespace P_3_1Server {

    //Hier wird der Server gestartet indem ihm der Port "8100" mitgeteilt wird bzw. diese Variable immer auf 8100 gesetzt wird.

    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    
    //Hier werden dem Server seine Funktionen hinzugefügt: zum einen sein "Listening" was automatisch in der Konsole steht wenn keine Anfrage kommt und "I hear voices" was bei der Interaktion ausgegeben wird.

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    //Hier werden die genannten Funktionen initialisiert.

    function handleListen(): void {
        console.log("Listening");
    }

    //Dieser Funktion werden automatisch Anfrage und Nachricht hinzugefügt  

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        //Hier werden die "metadaten?" der Antwort bestimmt.
        _response.setHeader("content-type", "text/html; charset=utf-8");

        //Access Control ist wohl eine Kontrolle, wer von wo Zugriff hat...
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        console.log(_request.url);
        _response.end();
    }
} */
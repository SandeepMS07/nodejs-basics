import http, { IncomingMessage, Server, ServerResponse } from "http";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode == 200;
    response.setHeader("Content-Type", "text/html");
    response.end(
      `<h3 style="font-family:Lato, sans-serif; color:green">Welcome to Node Js Server</h3>`
    );
    //end() => Calling the writable.end() method signals that no more data will be written to the Writable. The optional chunk and encoding arguments allow one final additional chunk of data to be written immediately before closing the stream.
    // Calling the write method after calling end will raise an error.
  }
);

server.listen(port, hostname, () => {
  console.log(`Node js Server is started  at http://${hostname}:${port}`);
});  //Start a server listening for connections. A net.Server can be a TCP or an IPC server depending on what it listens to.

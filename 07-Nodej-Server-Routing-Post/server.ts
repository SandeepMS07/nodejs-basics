import http, { IncomingMessage, Server, ServerResponse } from "http";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode == 200;
    response.setHeader("Content-Type", "application/json");

    //!URL AND POST
    if (request.url === "/user" && request.method === "POST") {
     try {
      let body: any = "";
      request
        .on("data", (chunk) => {
          //Adds the listener function to the end of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventNameand listener will result in the listener being added, and called, multiple times.
          body += chunk;
        })
        .on("end", () => {
          let formData = JSON.parse(body);
          response.end(`<pre>${JSON.stringify(formData)}</pre>`);
        });
     }
     catch (error) {
      console.log(error);
     }
    }

    // response.end(
    //   `<h3 style="font-family:Lato, sans-serif; color:green">Welcome to Node Js Server</h3>`
    // );
    //end() => Calling the writable.end() method signals that no more data will be written to the Writable. The optional chunk and encoding arguments allow one final additional chunk of data to be written immediately before closing the stream.
    // Calling the write method after calling end will raise an error.F
  }
);

server.listen(port, hostname, () => {
  console.log(`Node js Server is started  at http://${hostname}:${port}`);
}); //Start a server listening for connections. A net.Server can be a TCP or an IPC server depending on what it listens to.

import http, { IncomingMessage, Server, ServerResponse } from "http";
import os from "os";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    //! OS Module
    let osData = {
        totalMemory : os.totalmem(),  //Returns the total amount of system memory in bytes as an integer.
        freeMemory: os.freemem(),     //Returns the amount of free system memory in bytes as an integer.
        homeDir: os.homedir(),        //Returns the string path of the current user's home directory.
        computerName: os.hostname()   //Returns the host name of the operating system as a string
    }

    response.end(`<pre>${JSON.stringify(osData)}</pre>`);

    // response.end(
    //   `<h3 style="font-family:Lato, sans-serif; color:green">Welcome to Node Js Server</h3>`
    // );

  }
);

server.listen(port, hostname, () => {
  console.log(`Node Js Server started at http://${hostname}:${port}`);
});

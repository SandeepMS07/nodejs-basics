import http, { IncomingMessage, Server, ServerResponse } from "http";
import fs from "fs";
import path from "path";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    //! FS madule => The "node:fs" module enables interacting with the file system in a way modeled on standard POSIX functions.
    // fs.readFile(path.join(__dirname, 'data', 'data.txt'), 'utf-8', (error, result)=> {
    //     if(error) {
    //         console.log(error)
    //     }

    //     fs.writeFile(path.join(__dirname, 'data', 'copyFile.txt'), result ,'utf-8', (error)=> {
    //       if(error) {
    //         console.log(error)
    //       }
    //       response.end("data is written")
    //     })
    //     // response.end(`<pre>${result}</pre>`)
    // })

    // fs.readFile(path.join(__dirname, "server.ts"), "utf-8", (error, result) => {
    //   if (error) {
    //     console.log(error);
    //   }
    //   fs.writeFile(
    //     path.join(__dirname, "data" ,"data.txt"),
    //     result,
    //     "utf-8",
    //     (error) => {
    //       if (error) {
    //         console.log(error);
    //       }
    //       response.end(`<pre>data is wrritten</pre>`);
    //     }
    //   );
    // });

    fs.readFile(path.join(__dirname, "data", "data.txt"), "utf-8", (errror, result)=> {
      if (errror) {
        console.log(errror);
      }
      response.end(`<pre>${result}</pre>`)
    })
  }
);

server.listen(port, hostname, () => {
  console.log(`Node Js Server started at http://${hostname}:${port}`);
});

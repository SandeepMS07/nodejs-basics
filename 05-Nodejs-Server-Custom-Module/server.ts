import http, { IncomingMessage, Server, ServerResponse } from "http";
import { Mathutil } from "./util/MathUtil";
import { StringUtil } from "./util/StringUtil";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    //! String Util
    const CustomerName: string = "Sandep M S";
    let length = StringUtil.printLength(CustomerName);

    //!
    const channelName: string = "SVT-Traders";
    const result: string = StringUtil.printTriangle(channelName);
    // response.end(`<pre>Length: ${result}</pre>`);

    //! Math util
    const TheNumber: number = 19;
    let table: string = Mathutil.printMathTable(TheNumber);
    response.end(`<pre>${table}</pre>`);
  }
);

server.listen(port, hostname, () => {
  console.log(`Node js Server is started at http://${hostname}:${port}`);
});

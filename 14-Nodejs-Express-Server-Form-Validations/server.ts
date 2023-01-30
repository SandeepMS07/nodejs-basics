import express from "express";
import userRouter from "./router/userRouter";

const app: express.Application = express(); //Creates an Express application. The express() function is a top-level function exported by the express module.

const hostname: string = "127.0.0.1";
const port: number = 5000;

//configure express to receive the formdata
app.use(express.json());

app.get("/", (request: express.Request, response: express.Response) => {
  response
    .status(200)
    .send(
      `<h3 style="font-family:Lato, sans-serif; color:green">Welcome to express js</h3>`
    );
});

//api configuration
app.use("/user", userRouter);

app.listen(port, hostname, () => {
  console.log(`Express Server is started at http://${hostname}:${port}`);
});

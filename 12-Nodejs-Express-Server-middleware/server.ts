import express from "express";
import appLogger from "./middleware/appLogger";
import apiRouter from "./router/apiRouter";
import userRouter from "./router/userRouter";

const app: express.Application = express(); //Creates an Express application. The express() function is a top-level function exported by the express module.

const hostname: string = "127.0.0.1";
const port: number = 5000;

app.use(appLogger); //! to log all the api request

//configure express to recieve form data //!important to write
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//configuration
app.use("/users", userRouter);
app.use("/api", apiRouter);

app.listen(port, hostname, () => {
  console.log(`Express Server is started at http://${hostname}:${port}`);
});

//!output
//[/api/] [GET] - [30/1/2023] - [12:23:31 pm]
// [/] [GET] - [30/1/2023] - [12:23:31 pm]
// [/api/test/] [GET] - [30/1/2023] - [12:23:45 pm]
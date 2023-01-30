import express from "express";
import appLogger from "../middleware/appLogger";

const apiRouter: express.Router = express.Router();

//logic
//! to log only for this request
apiRouter.get(
  "/",
  appLogger,
  (request: express.Request, response: express.Response) => {
    response.status(200).send(
      `<h3 style="font-family:Lato, sans-serif; color:green">
      Welcome to api Router
      </h3>`
    );
  }
);

apiRouter.get(
  "/test",
  (request: express.Request, response: express.Response) => {
    response.status(200).send(
      `<h3 style="font-family:Lato, sans-serif; color:green">
        Welcome to api Router Test path
        </h3>`
    );
  }
);

export default apiRouter;

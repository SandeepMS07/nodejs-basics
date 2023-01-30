import express from "express";
import { body, validationResult } from "express-validator";

const userRouter: express.Router = express.Router();

//logic
userRouter.get("/", (request: express.Request, response: express.Response) => {
  response.status(200).send(
    `<h3 style="font-family:Lato, sans-serif; color:green">
      Welcome to user Router
      </h3>`
  );
});

userRouter.post(
  "/register",
  [
    body("name").not().isEmpty().withMessage("Name is Required"),
    body("email").isEmail().withMessage("Proper Email is Required"),
  ],
  (request: express.Request, response: express.Response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    let { name, email } = request.body;
    try {
      response.status(200).json({
        user: { name, email },
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export default userRouter;

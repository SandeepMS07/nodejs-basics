import express from "express";

const userRouter: express.Router = express.Router();

/*
    @usage: to test url
    @url: http://127.0.0.1:5000/users/
    @method: get
    @fields: no-fields
    @access" PUBLIC
*/

userRouter.get("/", (request: express.Request, response: express.Response) => {
  response
    .status(200)
    .send(
      `<h3 style="font-family:Lato, sans-serif; color:green">Welcome to user Router</h3>`
    );
});


/*
    @usage: to check the form data
    @url: http://127.0.0.1:5000/users/login
    @method: post
    @fields: name, password
    @access" PUBLIC
*/

userRouter.post(
  "/login",
  (request: express.Request, response: express.Response) => {
    let formData = request.body; //to receive the form data from client
    response.status(200).json({
      msg: "form data is received",
      formData: formData,
    });
  }
);

export default userRouter;

import express from "express";

let appLogger = (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  //url, method, time, data
  let url = request.url;
  let method = request.method;
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  let result: string = `[${url}] [${method}] - [${date}] - [${time}]`;
  console.log(result);

  next(); //! mandatory function
};

export default appLogger;

import express from "express";

export class HomeController {
  constructor() {}

  home = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.send("Welcome!");
  };
}

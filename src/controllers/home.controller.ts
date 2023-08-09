import express from "express";

export class HomeController {
  constructor() {}

  home = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.render("home", { username: req.user ? req.user.email : "N/A" });
  };

  login = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.render("login");
  };
}

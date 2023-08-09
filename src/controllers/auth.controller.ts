import express from "express";
export class AuthController {
  constructor() {}

  metadata = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.log("idp/metadata");
    next();
  };

  callback = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.log("idp/callback");
    res.cookie("Authorization", "123");
    res.redirect("/");
  };

  logout = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    req.logout({}, (err: any) => {
      res.redirect("/login");
    });
  };
}

import express from "express";
//import saml2js from "saml2js";

export class AuthController {
  constructor() {}

  acs = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.log("acs");
    //res.cookie("Authorization", "123");
    res.redirect("/home");
  };

  metadata = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.log("idp/metadata");
    res.send();
  };

  callback = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.log("idp/callback");
    // const xmlResponse = req.body.SAMLResponse;
    // const parser = new saml2js(xmlResponse);
    next();
  };
}

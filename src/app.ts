import express from "express";
import { passport } from "./infra/auth";
import { errorMiddleware } from "./middleware";
import { RouteConfig } from "./routes/base.route";
const session = require("express-session");
const bodyParser = require("body-parser");

export class App {
  constructor(app: express.Application, routes: RouteConfig[]) {
    this.initializeExpress(app);
    this.initializeRoutes(app, routes);
    app.use(bodyParser.json({ limit: "5mb" }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(
      session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
    );
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(errorMiddleware);
  }

  private initializeExpress = (app: express.Application) => {
    const normalizedPort = 4000 || Number(process.env.PORT);

    app.listen(normalizedPort, () => {
      console.log(`🚀 App listing on port ${normalizedPort}`);
    });
  };

  private initializeRoutes = (
    app: express.Application,
    routes: RouteConfig[]
  ) => {
    routes.forEach((route) => {
      app.use("/", route.router);
    });
  };
}

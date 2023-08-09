import bodyParser from "body-parser";
import cookie from "cookie-parser";
import express from "express";
import session from "express-session";
import morgan from "morgan";
import path from "path";
import { passport } from "./infra/auth";
import { errorMiddleware } from "./middleware";
import { RouteConfig } from "./routes/base.route";

export class App {
  constructor(app: express.Application, routes: RouteConfig[]) {
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "views"));
    app.use(morgan("combined"));
    app.use(cookie());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(
      session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
    );
    app.use(passport.initialize());
    app.use(passport.session());

    this.initializeExpress(app);
    this.initializeRoutes(app, routes);

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

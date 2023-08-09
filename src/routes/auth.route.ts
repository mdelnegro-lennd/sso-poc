import { AuthController } from "../controllers";
import { passport } from "../infra/auth";
import { RouteConfig } from "./base.route";

export class AuthRoute extends RouteConfig {
  public path?: string = "/auth";

  constructor(private readonly authController = new AuthController()) {
    super();
    this.initializeRoutes();
  }

  protected initializeRoutes(): void {
    this.router.get(
      `${this.path}/sso/saml/login`,
      passport.authenticate("saml", {
        successRedirect: "/",
        failureRedirect: "/login",
      })
    );

    this.router.post(
      `${this.path}/sso/saml/callback`,
      passport.authenticate("saml", {
        failureRedirect: "/login",
      }),
      this.authController.callback
    );

    this.router.get(
      `${this.path}/sso/saml/metadata`,
      this.authController.metadata
    );

    this.router.get(`${this.path}/sso/saml/logout`, this.authController.logout);
  }
}

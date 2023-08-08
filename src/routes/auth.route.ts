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
      passport.authenticate("samlStrategy", {
        failureRedirect: "/api",
        failureFlash: true,
      })
    );

    this.router.post(
      `${this.path}/sso/saml/acs`,
      passport.authenticate("samlStrategy", {
        failureRedirect: "/api",
        failureFlash: true,
      }),
      this.authController.acs
    );

    this.router.post(
      `${this.path}/sso/saml/callback`,
      passport.authenticate("samlStrategy", {
        failureRedirect: "/api",
        failureFlash: true,
      }),
      this.authController.callback
    );

    this.router.get(
      `${this.path}/sso/saml/metadata`,
      this.authController.metadata
    );
  }
}

import { HomeController } from "../controllers";
import { RouteConfig } from "./base.route";

export class HomeRoute extends RouteConfig {
  public path?: string = "/";

  constructor(private readonly homeController = new HomeController()) {
    super();
    this.initializeRoutes();
  }

  protected initializeRoutes(): void {
    this.router.get(`${this.path}`, this.homeController.home);
    this.router.get(`${this.path}login`, this.homeController.login);
  }
}

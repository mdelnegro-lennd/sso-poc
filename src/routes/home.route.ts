import { HomeController } from "../controllers";
import { RouteConfig } from "./base.route";

export class HomeRoute extends RouteConfig {
  public path?: string = "/home";

  constructor(private readonly homeController = new HomeController()) {
    super();
    this.initializeRoutes();
  }

  protected initializeRoutes(): void {
    this.router.get(`${this.path}/`, this.homeController.home);
  }
}

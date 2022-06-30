import { Router } from 'express';

export interface Route {
  path?: string;
  router: Router;
}

export abstract class RouteConfig {
  public abstract path?: string;
  public router: Router;

  constructor() {
    this.router = Router();
  }

  protected abstract initializeRoutes(): void;
}
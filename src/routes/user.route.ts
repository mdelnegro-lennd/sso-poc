import { RouteConfig } from './base.route';

export class UserRoute extends RouteConfig {
    public path?: string = '/user';

    constructor() {
        super();
        this.initializeRoutes();
    }

    protected initializeRoutes(): void {
        throw new Error("Method not implemented.");
    }
}

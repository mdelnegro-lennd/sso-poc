import { authenticationMiddleware, hasPermissions } from '../middleware';
import { CompanyController } from '../controllers/company.controller';
import { RouteConfig } from './base.route';

export class CompanyRoute extends RouteConfig {
    public path?: string = '/company';

    constructor(
        private readonly companyController = new CompanyController(),
    ) {
        super();
        this.initializeRoutes();
    }

    initializeRoutes = () => {
        this.router.get(
            `${this.path}/:id`,
            authenticationMiddleware,
            hasPermissions('read', 'company'),
            this.companyController.get,
        );

        this.router.get(
            `${this.path}`,
            authenticationMiddleware,
            hasPermissions('read', 'company'),
            this.companyController.all,
        );
    }
}

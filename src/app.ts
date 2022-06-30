import express from 'express';
import { RouteConfig } from './routes/base.route';
import { errorMiddleware } from './middleware';

export class App {
    constructor(app: express.Application, routes: RouteConfig[]) {
        this.initializeExpress(app);
        this.initializeRoutes(app, routes);
        app.use(errorMiddleware);
    }

    private initializeExpress = (app: express.Application) => {
        const normalizedPort = 4000 || Number(process.env.PORT);
        
        app.listen(normalizedPort, () => {
            console.log(`🚀 App listing on port ${normalizedPort}`);
        });
    }

    private initializeRoutes = (app: express.Application, routes: RouteConfig[]) => {
        routes.forEach((route) => {
            app.use('/api', route.router);
        });
    }
};

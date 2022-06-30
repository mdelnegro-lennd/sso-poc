import express from 'express';

export const authenticationMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    req.currentUser = {
        id: 2,
        isAdmin: false,
    };
     
    next();
}

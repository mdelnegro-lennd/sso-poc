import express from 'express';
import { UserService } from '../services';

export const authenticationMiddleware = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const userService = new UserService();
    const user = await userService.getUser(1);
    req.currentUser = user;
     
    next();
}

import express from 'express';
import { ForbiddenError } from '@casl/ability';
import { CustomError } from '../errors';

export const errorMiddleware = (error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (error instanceof ForbiddenError) {
        return res.status(401).send({
            errors: [
                `You don't have permission to ${error.action} this ${error.subjectType}`
            ],
        });
    }

    if (error instanceof CustomError) {
        return res.status(error.statusCode).send({
            errors: error.serializeErrors()
        });
    }

    res.status(400).send({
        err: error.message
    });
}

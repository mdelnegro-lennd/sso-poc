import express from 'express';
import { ForbiddenError } from '@casl/ability';
import { defineAbilitiesFor } from '../ability/defineAbility';
import { NotAuthorizedError } from '../errors';

export const hasPermissions = (action: string, asset: string) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const ability = defineAbilitiesFor(req.currentUser);
        req.currentUserAbility = ability;

        try {
            ForbiddenError.from(ability).throwUnlessCan(action, asset);
        } catch (error) {
            res.status(400).send({
                err: `You don't have permission to ${(error as any).action} this ${(error as any).subjectType}`
            }).end();
        }

        next();
    }
}

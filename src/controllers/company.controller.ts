import express from 'express';
import { ForbiddenError, subject } from '@casl/ability';
import { NotFoundError } from '../errors';

const companies = [
    {
        id: 1,
        name: 'Microsoft',
    },
    {
        id: 2,
        name: 'Apple Inc.',
    },
];

export class CompanyController {
    get = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const company = companies.filter((c => c.id === Number(req.params.id)));

        if (!company) {
            throw new NotFoundError();
        }

        ForbiddenError.from(req.currentUserAbility).throwUnlessCan('view', subject('company', company));

        res.status(200).send({
            success: true,
            data: company,
        });
    }

    all = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        return res.status(200).send({
            success: true,
            data: companies,
        })
    }
}

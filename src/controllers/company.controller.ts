import express from 'express';
import { ForbiddenError, subject } from '@casl/ability';
import { NotFoundError } from '../errors';
import { CompanyService } from '../services';

export class CompanyController {

    constructor(
        private readonly companyService: CompanyService = new CompanyService(),
    ) {}

    get = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const company = await this.companyService.getById(Number(req.params.id));

        if (!company) {
            throw new NotFoundError();
        }

        ForbiddenError.from(req.currentUserAbility).throwUnlessCan('view', subject('company', {...company}));

        res.status(200).send({
            success: true,
            data: company,
        });
    }

    all = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const companies = await this.companyService.get();

        return res.status(200).send({
            success: true,
            data: companies,
        });
    }
}

import { getRepository } from 'typeorm';
import { Company } from '../entity';

export class CompanyService {
    constructor() {}

    get = (): Promise<Company[]> => {
        const companyRepo = getRepository(Company);
        return companyRepo.find();
    }

    getById = (id: number): Promise<Company | undefined> => {
        const companyRepo = getRepository(Company);
        return companyRepo.findOne(id);
    }
}

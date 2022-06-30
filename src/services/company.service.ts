import { getRepository } from 'typeorm';
import { Company } from '../entity';

export class CompanyService {
    constructor() {}

    get = (): Promise<Company[]> => {
        const companyRepo = getRepository(Company);
        return companyRepo.find();
    }
}

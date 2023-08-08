import { getRepository } from "typeorm";
import { User } from "../entity";

export class UserService {
  constructor() {}

  getUser = (id: number): Promise<User | undefined> => {
    const userRepo = getRepository(User);
    return userRepo.findOne(id);
  };
}

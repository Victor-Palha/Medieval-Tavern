import { User } from "../../models/Users";
import { UserRepository } from "../../repositories/ORMRepository/user.repository";
import { CreateUserService } from "../create-user.service";

export function MakeCreateUserService() {
    const userRepository = new UserRepository(User)
    const service = new CreateUserService(userRepository);

    return service;
}
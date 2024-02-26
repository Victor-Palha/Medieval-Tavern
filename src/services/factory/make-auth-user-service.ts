import { User } from "../../models/Users";
import { UserRepository } from "../../repositories/ORMRepository/user.repository";
import { AuthUserService } from "../auth-user.service";

export function makeAuthUserService() {
    const userRepository = new UserRepository(User)
    const service = new AuthUserService(userRepository)
    return service
}
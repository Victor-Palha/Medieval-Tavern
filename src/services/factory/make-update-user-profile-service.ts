import { User } from "../../models/Users";
import { UserRepository } from "../../repositories/ORMRepository/user.repository";
import { UpdateUserProfileService } from "../update-user-profile.service";

export function makeUpdateUserProfileService() {
    const userRepository = new UserRepository(User)
    const service = new UpdateUserProfileService(userRepository);
    return service;
}
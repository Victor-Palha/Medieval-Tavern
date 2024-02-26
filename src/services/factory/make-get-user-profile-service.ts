import { User } from "../../models/Users";
import { UserRepository } from "../../repositories/ORMRepository/user.repository";
import { GetUserProfileService } from "../get-user-profile.service";

export function makeGetUserProfileService(){
    const userRepository = new UserRepository(User)
    const service = new GetUserProfileService(userRepository);
    return service;
}
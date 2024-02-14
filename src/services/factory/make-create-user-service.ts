import { User } from "../../models/Users";
import { CreateUserService } from "../users/create-user.service";

export function MakeCreateUserService() {
    const service = new CreateUserService(User);

    return service;
}
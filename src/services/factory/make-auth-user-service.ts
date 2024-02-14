import { User } from "../../models/Users";
import { AuthUserService } from "../users/auth-user.service";

export function makeAuthUserService() {
    const service = new AuthUserService(User)
    return service
}
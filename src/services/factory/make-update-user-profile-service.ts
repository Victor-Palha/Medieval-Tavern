import { User } from "../../models/Users";
import { UpdateUserProfileService } from "../users/update-user-profile.service";

export function makeUpdateUserProfileService() {
    const service = new UpdateUserProfileService(User);
    return service;
}
import { User } from "../../models/Users";
import { GetUserProfileService } from "../users/get-user-profile.service";

export function makeGetUserProfileService(){
    const service = new GetUserProfileService(User);
    return service;
}
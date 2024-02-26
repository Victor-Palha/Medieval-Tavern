import { User } from "../../models/Users";
import { UserRepository } from "../../repositories/ORMRepository/user.repository";
import { FetchMyFavoritesRecipesService } from "../fetch-my-favorites-recipes.service";

export function makeFetchMyFavoritesRecipesService(){
    const userRepository = new UserRepository(User)
    const service = new FetchMyFavoritesRecipesService(userRepository);
    return service;
}
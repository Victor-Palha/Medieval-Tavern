import { User } from "../../models/Users";
import { FetchMyFavoritesRecipesService } from "../users/fetch-my-favorites-recipes.service";

export function makeFetchMyFavoritesRecipesService(){
    const service = new FetchMyFavoritesRecipesService(User);
    return service;
}
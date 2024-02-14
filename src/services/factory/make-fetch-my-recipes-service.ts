import { User } from "../../models/Users";
import { FetchMyRecipesService } from "../recipes/fetch-my-recipes.service";

export function makeFetchMyRecipesService() {
    const service = new FetchMyRecipesService(User);
    return service;
}
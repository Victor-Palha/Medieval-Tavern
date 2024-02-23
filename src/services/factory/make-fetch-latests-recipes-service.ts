import { Recipe } from "../../models/Recipes";
import { FetchLatestsRecipesService } from "../recipes/fetch-lastests-recipes.service";

export function makeFetchLatestRecipesService(){
    const service = new FetchLatestsRecipesService(Recipe);
    return service;
}
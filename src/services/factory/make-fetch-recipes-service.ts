import { Recipe } from "../../models/Recipes";
import { FetchRecipesService } from "../recipes/fetch-recipes.service";

export function makeFetchRecipesService(){
    const service = new FetchRecipesService(Recipe);
    return service;
}
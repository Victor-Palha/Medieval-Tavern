import { Recipe } from "../../models/Recipes";
import { SearchRecipesService } from "../recipes/serch-recipes.service";

export function makeSearchRecipesService(){
    const service = new SearchRecipesService(Recipe);
    return service;
}
import { Recipe } from "../../models/Recipes";
import { GetUniqueRecipeService } from "../recipes/get-unique-recipe.service";

export function makeGetUniqueRecipeService(){
    const service = new GetUniqueRecipeService(Recipe);
    return service;
}
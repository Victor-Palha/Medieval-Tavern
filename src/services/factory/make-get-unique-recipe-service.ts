import { Recipe } from "../../models/Recipes";
import { RecipeRepository } from "../../repositories/ORMRepository/recipe.repository";
import { GetUniqueRecipeService } from "../get-unique-recipe.service";

export function makeGetUniqueRecipeService(){
    const recipeRepository = new RecipeRepository(Recipe)
    const service = new GetUniqueRecipeService(recipeRepository);
    return service;
}
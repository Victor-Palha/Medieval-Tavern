import { Recipe } from "../../models/Recipes";
import { RecipeRepository } from "../../repositories/ORMRepository/recipe.repository";
import { DeleteRecipeService } from "../delete-recipe.service";

export function makeDeleteRecipeService(){
    const recipeRepository = new RecipeRepository(Recipe)
    const service = new DeleteRecipeService(recipeRepository)
    return service;
}
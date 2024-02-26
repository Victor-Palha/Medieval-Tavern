import { Recipe } from "../../models/Recipes";
import { RecipeRepository } from "../../repositories/ORMRepository/recipe.repository";
import { SearchRecipesService } from "../serch-recipes.service";

export function makeSearchRecipesService(){
    const recipeRepository = new RecipeRepository(Recipe)
    const service = new SearchRecipesService(recipeRepository);
    return service;
}
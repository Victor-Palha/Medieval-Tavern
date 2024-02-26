import { Recipe } from "../../models/Recipes";
import { RecipeRepository } from "../../repositories/ORMRepository/recipe.repository";
import { FetchLatestsRecipesService } from "../fetch-lastests-recipes.service";

export function makeFetchLatestRecipesService(){
    const recipeRepository = new RecipeRepository(Recipe)
    const service = new FetchLatestsRecipesService(recipeRepository);
    return service;
}
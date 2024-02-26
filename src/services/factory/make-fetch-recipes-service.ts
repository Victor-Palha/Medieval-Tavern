import { Recipe } from "../../models/Recipes";
import { RecipeRepository } from "../../repositories/ORMRepository/recipe.repository";
import { FetchRecipesService } from "../fetch-recipes.service";

export function makeFetchRecipesService(){
    const recipeRepository = new RecipeRepository(Recipe)
    const service = new FetchRecipesService(recipeRepository);
    return service;
}
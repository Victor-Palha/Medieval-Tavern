import { Recipe } from "../../models/Recipes";
import { User } from "../../models/Users";
import { CreateRecipesService } from "../recipes/create-recipe.service";

export function MakeCreateRecipeService(){
    const service = new CreateRecipesService(Recipe, User);
    return service;
}
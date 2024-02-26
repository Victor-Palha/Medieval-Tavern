import { Recipe } from "../../models/Recipes";
import { User } from "../../models/Users";
import { DeleteRecipeService } from "../recipes/delete-recipe.service";

export function makeDeleteRecipeService(){
    const service = new DeleteRecipeService(Recipe)
    return service;
}
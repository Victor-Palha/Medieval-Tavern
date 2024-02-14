import { Recipe } from "../../models/Recipes";
import { User } from "../../models/Users";
import { GiveStarToRecipeService } from "../users/give-star-to-recipe.service";

export function makeGiveStartToRecipeService(){
    const service = new GiveStarToRecipeService(Recipe, User)

    return service;
}
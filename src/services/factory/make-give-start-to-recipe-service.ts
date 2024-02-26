import { Recipe } from "../../models/Recipes";
import { User } from "../../models/Users";
import { RecipeRepository } from "../../repositories/ORMRepository/recipe.repository";
import { UserRepository } from "../../repositories/ORMRepository/user.repository";
import { GiveStarToRecipeService } from "../give-star-to-recipe.service";

export function makeGiveStartToRecipeService(){
    const userRepository = new UserRepository(User)
    const recipeRepository = new RecipeRepository(Recipe)
    const service = new GiveStarToRecipeService(recipeRepository, userRepository)

    return service;
}
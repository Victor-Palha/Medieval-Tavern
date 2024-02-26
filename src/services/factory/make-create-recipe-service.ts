import { Recipe } from "../../models/Recipes";
import { User } from "../../models/Users";
import { RecipeRepository } from "../../repositories/ORMRepository/recipe.repository";
import { UserRepository } from "../../repositories/ORMRepository/user.repository";
import { CreateRecipesService } from "../create-recipe.service";

export function MakeCreateRecipeService(){
    const userRepository = new UserRepository(User)
    const recipeRepository = new RecipeRepository(Recipe)
    const service = new CreateRecipesService(recipeRepository, userRepository);
    return service;
}
import { RecipeRepository } from "../repositories/ORMRepository/recipe.repository";

export class FetchLatestsRecipesService{
    constructor(
        private recipeModel: RecipeRepository
    ){}

    async execute(){
        const bestsRecipes = await this.recipeModel.fetchBestRecipes();

        return {bestsRecipes};
    }
}
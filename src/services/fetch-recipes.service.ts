import { RecipeInterfaceRepository } from "../repositories/recipe-interface.repository";

export class FetchRecipesService{
    constructor(
        private recipeModel: RecipeInterfaceRepository
    ){}

    async execute(){
        const allRecipes = await this.recipeModel.fetchAllRecipes();

        return {allRecipes};
    }
}
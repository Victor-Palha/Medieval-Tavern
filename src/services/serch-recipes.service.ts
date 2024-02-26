import { RecipeInterfaceRepository } from "../repositories/recipe-interface.repository";

export class SearchRecipesService{
    constructor(
        private recipeModel: RecipeInterfaceRepository
    ){}

    async execute(search: string){
        const recipes = await this.recipeModel.serchRecipes(search);

        return {recipes};
    }
}
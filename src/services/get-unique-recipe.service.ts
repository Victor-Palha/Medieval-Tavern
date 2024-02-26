import { RecipeInterfaceRepository } from "../repositories/recipe-interface.repository";

export class GetUniqueRecipeService{
    constructor(
        private recipeModel: RecipeInterfaceRepository
    ){}

    async execute(recipeId: string){
        const recipe = await this.recipeModel.findRecipeById(recipeId);
        if(!recipe){
            throw new Error("Receita não encontrada!");
        }
        return {recipe};
    }
}
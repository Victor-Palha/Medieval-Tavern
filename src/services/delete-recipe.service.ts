import { RecipeInterfaceRepository } from "../repositories/recipe-interface.repository";

type DeleteRecipeRequest = {
    id: string;
    user_id: string;
}

export class DeleteRecipeService{
    constructor(
        // private userModel: typeof User,
        private recipeModel: RecipeInterfaceRepository
    ){}

    async execute({id, user_id}: DeleteRecipeRequest){
        const recipeExists = await this.recipeModel.findRecipeById(id);
        if(!recipeExists){
            throw new Error("Ops! Parece que essa receita não existe!");
        }

        await this.recipeModel.deleteRecipe(recipeExists.id, user_id);
    }
}
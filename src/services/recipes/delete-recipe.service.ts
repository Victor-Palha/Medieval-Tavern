import { Recipe } from "../../models/Recipes";

type DeleteRecipeRequest = {
    id: string;
    user_id: string;
}

export class DeleteRecipeService{
    constructor(
        // private userModel: typeof User,
        private recipeModel: typeof Recipe
    ){}

    async execute({id, user_id}: DeleteRecipeRequest){
        const recipe = await this.recipeModel.findOneAndDelete({_id: id, createdBy: user_id});

        if(!recipe){
            throw new Error("Receita não encontrada");
        }
    }
}
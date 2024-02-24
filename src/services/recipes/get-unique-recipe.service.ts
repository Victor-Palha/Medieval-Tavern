import { Recipe } from "../../models/Recipes";

export class GetUniqueRecipeService{
    constructor(
        private recipeModel: typeof Recipe
    ){}

    async execute(recipeId: string){
        const recipe = await this.recipeModel.findById(recipeId).populate({path: "createdBy", select: "name image"});
        if(!recipe){
            throw new Error("Receita não encontrada!");
        }
        return {recipe};
    }
}
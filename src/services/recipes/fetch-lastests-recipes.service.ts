import { Recipe } from "../../models/Recipes";

export class FetchLatestsRecipesService{
    constructor(
        private recipeModel: typeof Recipe
    ){}

    async execute(){
        const recipes = await this.recipeModel.find()
            .sort({createdAt: "desc"})
            .populate({path: "createdBy", select: "name image"})
            .limit(5);

        return {recipes};
    }
}
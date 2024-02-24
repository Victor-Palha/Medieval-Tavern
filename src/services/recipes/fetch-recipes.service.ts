import { Recipe } from "../../models/Recipes";

export class FetchRecipesService{
    constructor(
        private recipeModel: typeof Recipe
    ){}

    async execute(){
        const recipes = await this.recipeModel.find().populate({path: "createdBy", select: "name image"});

        return {recipes};
    }
}
import { Recipe } from "../../models/Recipes";

export class FetchRecipesService{
    constructor(
        private recipeModel: typeof Recipe
    ){}

    async execute(){
        const recipes = await this.recipeModel.find();

        return {recipes};
    }
}
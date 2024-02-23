import { Recipe } from "../../models/Recipes";

export class FetchLatestsRecipesService{
    constructor(
        private recipeModel: typeof Recipe
    ){}

    async execute(){
        const recipes = await this.recipeModel.find().sort({createdAt: "desc"}).limit(5);

        return {recipes};
    }
}
import { Recipe } from "../../models/Recipes";

export class SearchRecipesService{
    constructor(
        private recipeModel: typeof Recipe
    ){}

    async execute(search: string){
        const recipes = await this.recipeModel.find({
            $or: [
                { name: { $regex: search, $options: 'i' } }, // Busca por nome (case-insensitive)
                { tags: { $regex: search, $options: 'i' } }, // Busca por tag
                { origin: { $regex: search, $options: 'i' } } // Busca por origem
            ]
        }).populate({path: "createdBy", select: "name image"});

        return {recipes};
    }
}
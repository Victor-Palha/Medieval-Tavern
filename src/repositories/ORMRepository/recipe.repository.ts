import { Model } from "mongoose";
import { RecipeDocument } from "../../models/Recipes";
import { RecipeInterfaceRepository } from "../recipe-interface.repository";

export class RecipeRepository implements RecipeInterfaceRepository{
    constructor(
        private recipeModel: Model<RecipeDocument>
    ){}

    /**
     * 
     * @param data RecipeDocument
     * @description 
     * Create a new recipe
     * @returns
     * Promise<RecipeDocument> 
     */
    async createNewRecipe(data: RecipeDocument) {
        const recipe = await this.recipeModel.create(data);
        return recipe;    
    }
    /**
     * 
     * @param recipeId 
     * @param userId 
     * @description
     * Delete a recipe
     */
    async deleteRecipe(recipeId: string, userId: string) {
        await this.recipeModel.findOneAndDelete({_id: recipeId, createdBy: userId});
    }

    /**
     * 
     * @description
     * Fetch the 5 best recipes
     * @returns
     * Promise<RecipeDocument[]>
     */
    async fetchBestRecipes() {
        const recipes = await this.recipeModel.find()
            .sort({stars: "desc"})
            .populate({path: "createdBy", select: "name image"})
            .limit(5);
        return recipes;
    }

    /**
     * 
     * @description
     * Fetch all recipes
     * @returns
     * Promise<RecipeDocument[]>
     */
    async fetchAllRecipes() {
        const recipes = await this.recipeModel.find().populate({path: "createdBy", select: "name image"});
        return recipes;
    }

    /**
     * 
     * @param recipeId 
     * @description
     * Find a recipe by id
     * @returns
     * Promise<RecipeDocument | null>
     */
    async findRecipeById(recipeId: string) {
        const recipe = await this.recipeModel.findById(recipeId).populate({path: "createdBy", select: "name image"});
        return recipe;
    }

    /**
     * 
     * @param search string
     * @description
     * Search for recipes
     * @returns
     * Promise<RecipeDocument[] | null>
     */
    async serchRecipes(search: string) {
        const recipes = await this.recipeModel.find({
            $or: [
                { name: { $regex: search, $options: 'i' } }, // Busca por nome (case-insensitive)
                { tags: { $regex: search, $options: 'i' } }, // Busca por tag
                { origin: { $regex: search, $options: 'i' } } // Busca por origem
            ]
        }).populate({path: "createdBy", select: "name image"});
        return recipes;
    }

    /**
     * 
     * @param recipeId string
     * @description
     * Add a star to a recipe
     */
    async addStarToRecipe(recipeId: string) {
        await this.recipeModel.findByIdAndUpdate(recipeId, {
            $inc: {
                stars: 1
            }
        });
    }

    /**
     * 
     * @param recipeId string
     * @description
     * Remove a star from a recipe
     */
    async removeStarToRecipe(recipeId: string) {
        await this.recipeModel.findByIdAndUpdate(recipeId, {
            $inc: {
                stars: -1
            }
        });
    }
}
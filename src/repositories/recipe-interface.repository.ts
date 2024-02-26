import { Recipe, RecipeDocument } from "../models/Recipes";

export interface RecipeInterfaceRepository{
    createNewRecipe(data: Omit<Recipe, "stars">): Promise<RecipeDocument>
    deleteRecipe(recipeId: string, userId: string): Promise<void>
    fetchBestRecipes(): Promise<RecipeDocument[]>
    fetchAllRecipes(): Promise<RecipeDocument[]>
    findRecipeById(recipeId: string): Promise<RecipeDocument | null>
    serchRecipes(search: string): Promise<RecipeDocument[] | null>
    addStarToRecipe(recipeId: string): Promise<void>
    removeStarToRecipe(recipeId: string): Promise<void>
}
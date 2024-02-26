import { UserDocument } from "../models/Users";

type FindUserAndRecipesById = {
    userId: string;
    recipeId: string;
}

export interface UserInterfaceRepository{
    findUserByEmail(email: string): Promise<UserDocument | null>;
    createUser(data: Omit<UserDocument, "id" | "image" | "description" | "myRecipes" | "myFavorites">): Promise<UserDocument>;
    findUserById(id: string): Promise<UserDocument | null>;
    findUserByIdWithRecipes(id: string): Promise<UserDocument | null>;
    findUserByIdWithFavorites(id: string): Promise<UserDocument | null>;
    addFavoriteRecipeToUserProfile({userId, recipeId}: FindUserAndRecipesById): Promise<void>;
    deleteFavoriteRecipeFromUserProfile({userId, recipeId}: FindUserAndRecipesById): Promise<void>;
    addRecipeToUserProfile({userId, recipeId}: FindUserAndRecipesById): Promise<void>;
    deleteRecipeFromUserProfile({userId, recipeId}: FindUserAndRecipesById): Promise<void>;
    updateUserProfile(data: Pick<UserDocument, "id" | "name" | "description" | "image">): Promise<UserDocument | null>;
}
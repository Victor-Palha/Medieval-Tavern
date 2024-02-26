import { UserDocument } from "../models/Users";

type FindUserAndRecipesById = {
    userId: string;
    recipeId: string;
}
type CreateUserRequest = {
    name: string;
    email: string;
    password: string;
}

export interface UserInterfaceRepository{
    findUserByEmail(email: string): Promise<UserDocument | null>;
    createUser(data: CreateUserRequest): Promise<UserDocument>;
    findUserById(id: string): Promise<UserDocument | null>;
    findUserByIdWithRecipes(id: string): Promise<UserDocument | null>;
    findUserByIdWithFavorites(id: string): Promise<UserDocument | null>;
    addFavoriteRecipeToUserProfile({userId, recipeId}: FindUserAndRecipesById): Promise<void>;
    deleteFavoriteRecipeFromUserProfile({userId, recipeId}: FindUserAndRecipesById): Promise<void>;
    addRecipeToUserProfile({userId, recipeId}: FindUserAndRecipesById): Promise<void>;
    deleteRecipeFromUserProfile({userId, recipeId}: FindUserAndRecipesById): Promise<void>;
    updateUserProfile(data: Pick<UserDocument, "id" | "name" | "description" | "image">): Promise<UserDocument | null>;
}
import { Model } from "mongoose";
import { UserDocument } from "../../models/Users";
import { UserInterfaceRepository } from "../user-interface.repository";

export class UserRepository implements UserInterfaceRepository {
    constructor(
        private userModel: Model<UserDocument>
    ){}
    
    /**
     * 
     * @param email string
     * @description
     * This method finds a user by email
     * @returns 
     * UserDocument | null
     */
    async findUserByEmail(email: string){
        const user = await this.userModel.findOne({
            email
        })

        return user;
    }

    /**
     * 
     * @param name string
     * @param email string
     * @param password string
     * @description
     * This method creates a user
     * @returns 
     * UserDocument
     */
    async createUser(data: Omit<UserDocument, "id" | "image" | "description" | "myRecipes" | "myFavorites">){
        const user = await this.userModel.create(data);

        return user;
    }

    /**
     * 
     * @param id string
     * @description
     * This method finds a user by id
     * @returns 
     * UserDocument | null
     */
    async findUserById(id: string){
        const user = await this.userModel.findById(id);

        return user;
    }

    /**
     * 
     * @param id string
     * @description
     * This method finds a user by id and populates the myRecipes field
     * @returns 
     * UserDocument | null
     */
    async findUserByIdWithRecipes(id: string){
        const user = await this.userModel.findById(id).populate("myRecipes");

        return user;
    }
    /**
     * 
     * @param id string
     * @description
     * This method finds a user by id and populates the myFavorites field
     * @returns 
     * UserDocument | null
     */
    async findUserByIdWithFavorites(id: string){
        const user = await this.userModel.findById(id).populate("myFavorites");

        return user;
    }
    /**
     * 
     * @param userId string
     * @param recipeId string
     * @description
     * This method adds a favorite recipe to the user profile
     */
    async addFavoriteRecipeToUserProfile({userId, recipeId}: {userId: string, recipeId: string}){
        const user = await this.userModel.findByIdAndUpdate(userId, {
            $push: {
                myFavorites: recipeId
            }
        })
    }

    /**
     * 
     * @param userId string
     * @param recipeId string
     * @description
     * This method deletes a favorite recipe from the user profile
     */
    async deleteFavoriteRecipeFromUserProfile({userId, recipeId}: {userId: string, recipeId: string}){
        await this.userModel.findByIdAndUpdate(userId, {
            $unset: {
                myFavorites: recipeId
            }
        })
    }

    /**
     * 
     * @param userId string
     * @param recipeId string
     * @description
     * This method adds a recipe to the user profile
     */
    async addRecipeToUserProfile({userId, recipeId}: {userId: string, recipeId: string}){
        await this.userModel.findByIdAndUpdate(userId, {
            $push: {
                myRecipes: recipeId
            }
        })
    }

    /**
     * 
     * @param userId string
     * @param recipeId string
     * @description
     * This method deletes a recipe from the user profile
     */
    async deleteRecipeFromUserProfile({userId, recipeId}: {userId: string, recipeId: string}){
        await this.userModel.findByIdAndUpdate(userId, {
            $unset: {
                myRecipes: recipeId
            }
        })
    }

    /**
     * 
     * @param data Pick<UserDocument, "id" | "name" | "description" | "image">
     * @description
     * This method updates the user profile
     * @returns 
     * UserDocument | null
     */
    async updateUserProfile(data: Pick<UserDocument, "id" | "name" | "description" | "image">){
        const userFinded = await this.findUserById(data.id);
        if(userFinded){
            const userUpdated = await this.userModel.findByIdAndUpdate(userFinded.id, data);
            return userUpdated as UserDocument;
        }
        return null;
    }
}
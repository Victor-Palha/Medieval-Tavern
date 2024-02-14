import { Recipe } from "../../models/Recipes";
import { User } from "../../models/Users";

export class GiveStarToRecipeService{
    constructor(
        private recipeModel: typeof Recipe,
        private userModel: typeof User
    ){}

    async execute(recipeId: string, userId: string){
        const recipe = await this.recipeModel.findById(recipeId);
        const user = await this.userModel.findById(userId);

        if(!recipe){
            throw new Error("Ops! Receita não encontrada!");
        }

        if(!user){
            throw new Error("Ops! Usuário não encontrado!");
        }
        if(user.myFavorites.includes(recipe._id)){
            await this.userModel.findByIdAndUpdate(user._id, {
                myFavorites: user.myFavorites.filter(favorite => favorite !== recipe._id)
            })
            await this.recipeModel.findByIdAndUpdate(recipe._id, {
                stars: recipe.stars - 1
            })
        }else{
            await this.recipeModel.findByIdAndUpdate(recipe._id, {
                stars: recipe.stars + 1
            })
        }

        

        await this.userModel.findByIdAndUpdate(user._id, {
            $push: {
                myFavorites: recipe._id
            }
        })

        return {recipe};
    }
}
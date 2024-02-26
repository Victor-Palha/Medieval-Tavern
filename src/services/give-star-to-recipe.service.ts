import { RecipeInterfaceRepository } from "../repositories/recipe-interface.repository";
import { UserInterfaceRepository } from "../repositories/user-interface.repository";


type GiveStarToRecipeServiceRequest = {
    recipeId: string;
    userId: string;
}

export class GiveStarToRecipeService{
    constructor(
        private recipeModel: RecipeInterfaceRepository,
        private userModel: UserInterfaceRepository
    ){}

    async execute({recipeId, userId}: GiveStarToRecipeServiceRequest){

        const recipeSearched = await this.recipeModel.findRecipeById(recipeId);
        const userSearched = await this.userModel.findUserById(userId);

        if(!recipeSearched){
            throw new Error("Ops! Receita não encontrada!");
        }

        if(!userSearched){
            throw new Error("Ops! Usuário não encontrado!");
        }

        const hasThisRecipeAlreadyStarredByUser = userSearched.myFavorites.includes(recipeSearched.id);

        if(hasThisRecipeAlreadyStarredByUser){
            this.recipeModel.removeStarToRecipe(recipeSearched.id);
            this.userModel.deleteFavoriteRecipeFromUserProfile(recipeSearched.id);
        }else{
            this.recipeModel.addStarToRecipe(recipeSearched.id);
            this.userModel.addFavoriteRecipeToUserProfile(recipeSearched.id);
        }
    }
}
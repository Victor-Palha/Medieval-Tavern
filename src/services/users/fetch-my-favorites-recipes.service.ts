import { User } from "../../models/Users";

export class FetchMyFavoritesRecipesService{
    constructor(
        private userModel: typeof User
    ){}

    async execute(userId: string){
        const user = await this.userModel.findById(userId).populate('myFavorites');
        if(!user){
            throw new Error("Ops! Usuário não encontrado!");
        }
        return {recipes: user.myFavorites};
    }
}
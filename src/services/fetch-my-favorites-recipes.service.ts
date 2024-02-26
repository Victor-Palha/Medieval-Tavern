import { UserInterfaceRepository } from "../repositories/user-interface.repository";

export class FetchMyFavoritesRecipesService{
    constructor(
        private userModel: UserInterfaceRepository
    ){}

    async execute(userId: string){
        const user = await this.userModel.findUserByIdWithFavorites(userId);
        if(!user){
            throw new Error("Ops! Usuário não encontrado!");
        }
        return {recipes: user.myFavorites};
    }
}
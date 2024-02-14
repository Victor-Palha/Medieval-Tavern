import { User } from "../../models/Users";

export class FetchMyRecipesService{
    constructor(
        private userModel: typeof User
    ){}

    async execute(userId: string){
        const user = await this.userModel.findById(userId).populate('myRecipes');
        if(!user){
            throw new Error("Usuário não encontrado!");
        }
        return {recipes: user.myRecipes};
    }
}
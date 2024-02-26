import { Types } from "mongoose";
import { UserRepository } from "../repositories/ORMRepository/user.repository";

type GetUserProfileServiceResponse = {
    name: string;
    description: string;
    image: string;
    amount_of_recipes: number;
    _id: string;
    myRecipes: Types.ObjectId[];
    myFavorites: Types.ObjectId[];
}

export class GetUserProfileService{
    constructor(
        private userModel: UserRepository
    ){}

    async execute(id: string): Promise<GetUserProfileServiceResponse>{
        const user = await this.userModel.findUserByIdWithRecipes(id);

        if(!user){
            throw new Error("Usuário não encontrado!");
        }

        return {
            _id: user.id,
            name: user.name,
            image: user.image,
            description: user.description,
            amount_of_recipes: user.myRecipes.length,
            myRecipes: user.myRecipes,
            myFavorites: user.myFavorites
        };
    }
}
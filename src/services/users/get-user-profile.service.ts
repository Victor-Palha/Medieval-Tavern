import { User } from "../../models/Users";

type GetUserProfileServiceResponse = {
    name: string;
    description: string;
    image: string;
    amount_of_recipes: number;
    _id: string;
}

export class GetUserProfileService{
    constructor(
        private readonly userModel: typeof User
    ){}

    async execute(id: string): Promise<GetUserProfileServiceResponse>{
        const user = await this.userModel.findById(id);

        if(!user){
            throw new Error("Usuário não encontrado!");
        }
        const response: GetUserProfileServiceResponse = {
            name: user.name as string,
            description: user.description,
            image: user.image,
            amount_of_recipes: user.myRecipes.length,
            _id: user.id as string,
        }
        return response;
    }
}
import { Recipe } from "../../models/Recipes";
import { User } from "../../models/Users";

interface CreateRecipeRequest{
    name: string;
    origin: string;
    tags: string[];
    serves: number;
    ingredients: string[];
    instructions: string[];
    description: string;
    image: string;
    userId: string;
    time: string;
}

export class CreateRecipesService {
    constructor(
        private recipeModel: typeof Recipe,
        private userModel: typeof User
    ){}

    async execute(data: CreateRecipeRequest){
        const userExists = await this.userModel.findById(data.userId);

        if(!userExists){
            throw new Error("Ops! Você não está logado!");
        }

        const recipe = await this.recipeModel.create({createdBy: data.userId, ...data});

        await this.userModel.findByIdAndUpdate(userExists.id, {
            $push: {
                myRecipes: recipe._id
            }
        });

        return {recipe};
    }
}
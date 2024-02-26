import { RecipeInterfaceRepository } from "../repositories/recipe-interface.repository";
import { UserInterfaceRepository } from "../repositories/user-interface.repository";

interface CreateRecipeRequest{
    userId: string;
    name: string;
    origin: string;
    tags: string[];
    serves: number;
    ingredients: string[];
    instructions: string[];
    description: string;
    image: string;
    time: string;
}

export class CreateRecipesService {
    constructor(
        private recipeModel: RecipeInterfaceRepository,
        private userModel: UserInterfaceRepository
    ){}

    async execute({userId, name, origin, description, image, ingredients, instructions, serves, tags, time}: CreateRecipeRequest){
        const userExists = await this.userModel.findUserById(userId);

        if(!userExists){
            throw new Error("Ops! Parece que esse usuário não existe!");
        }

        const recipe = await this.recipeModel.createNewRecipe({
            name,
            origin,
            description,
            tags,
            serves,
            ingredients,
            instructions,
            image,
            time,
            createdBy: userExists.id,
        })

        await this.userModel.addRecipeToUserProfile({
            userId,
            recipeId: recipe.id,
        });

        return {recipe};
    }
}
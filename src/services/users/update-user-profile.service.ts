import { User } from "../../models/Users";
import { DefaultImages } from "../../models/images";

type UpdateUserProfileRequest = {
    userId: string;
    name: string;
    description: string;
    image?: string;
}

export class UpdateUserProfileService{
    constructor(
        private userModel: typeof User
    ){}

    async execute({userId, name, description, image}: UpdateUserProfileRequest){
        const user = await this.userModel.findById(userId);

        if(!user){
            throw new Error("Ops, Usuário não encontrado!");
        }

        let newImage: string = user.image;
        if(image){
            switch(image){
                case "1":
                    newImage = DefaultImages.default;
                    break;
                case "2":
                    newImage = DefaultImages.manElf1;
                    break;
                case "3":
                    newImage = DefaultImages.manElf2;
                    break;
                case "4":
                    newImage = DefaultImages.manOrc;
                    break;
                case "5":
                    newImage = DefaultImages.manTiefling;
                    break;
                case "6":
                    newImage = DefaultImages.womanElf1;
                    break;
                case "7":
                    newImage = DefaultImages.womanElf2;
                    break;
                case "8":
                    newImage = DefaultImages.womanOrc;
                    break;
                case "9":
                    newImage = DefaultImages.womanTiefling;
                    break;
                default:
                    break;
            }
        }

        user.name = name;
        user.description = description;
        user.image = newImage;

        await user.save();

        return {user};

    }
}
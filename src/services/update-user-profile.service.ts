import { DefaultImages } from "../models/images";
import { UserInterfaceRepository } from "../repositories/user-interface.repository";

type UpdateUserProfileRequest = {
    userId: string;
    name: string;
    description: string;
    image?: string;
}

export class UpdateUserProfileService{
    constructor(
        private userModel: UserInterfaceRepository
    ){}

    async execute({userId, name, description, image}: UpdateUserProfileRequest){
        const user = await this.userModel.findUserById(userId);

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

        const updatedUser = this.userModel.updateUserProfile({
            id: userId,
            name,
            description,
            image: newImage
        })

        return {
            updatedUser
        };

    }
}
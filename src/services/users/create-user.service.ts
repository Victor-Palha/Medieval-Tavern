import { DefaultImages } from "../../models/images";
import { User } from "../../models/Users";
import {hash} from "bcryptjs";

interface CreateUserRequest{
    name: string;
    email: string;
    password: string;
    image: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
}

export class CreateUserService{
    constructor(
        private userModel: typeof User
    ){}

    async execute(data: CreateUserRequest){
        const userExists = await this.userModel.findOne({
            email: data.email
        })

        if(userExists){
            throw new Error("Ops! Este email já está cadastrado! Se você já tem uma conta, faça login!");
        }

        let image: DefaultImages = DefaultImages.default;

        switch(data.image){
            case "1":
                image = DefaultImages.default;
                break;
            case "2":
                image = DefaultImages.manElf1;
                break;
            case "3":
                image = DefaultImages.manElf2;
                break;
            case "4":
                image = DefaultImages.manOrc;
                break;
            case "5":
                image = DefaultImages.manTiefling;
                break;
            case "6":
                image = DefaultImages.womanElf1;
                break;
            case "7":
                image = DefaultImages.womanElf2;
                break;
            case "8":
                image = DefaultImages.womanOrc;
                break;
            case "9":
                image = DefaultImages.womanTiefling;
                break;
        }

        const passwordHash = await hash(data.password, 6);

        const user = await this.userModel.create({
            ...data,
            image,
            password: passwordHash
        });

        return {
            password: undefined,
            ...user
        };
    }
}
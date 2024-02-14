import { User } from "../../models/Users";
import {hash} from "bcryptjs";

interface CreateUserRequest{
    name: string;
    email: string;
    password: string;
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

        const passwordHash = await hash(data.password, 6);

        const user = await this.userModel.create({
            ...data,
            password: passwordHash
        });

        return {
            password: undefined,
            ...user
        };
    }
}
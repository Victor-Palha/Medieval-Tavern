import {hash} from "bcryptjs";
import { UserInterfaceRepository } from "../repositories/user-interface.repository";

interface CreateUserRequest{
    name: string;
    email: string;
    password: string;
}

export class CreateUserService{
    constructor(
        private userModel: UserInterfaceRepository
    ){}

    async execute(userRequest: CreateUserRequest){
        const userExists = await this.userModel.findUserByEmail(userRequest.email);

        if(userExists){
            throw new Error("Ops! Este email já está cadastrado! Se você já tem uma conta, faça login!");
        }

        const passwordHashed = await hash(userRequest.password, 6);

        const user = await this.userModel.createUser({
            name: userRequest.name,
            email: userRequest.email,
            password: passwordHashed,
        })

        return {
            user
        };
    }
}
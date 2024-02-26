import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { env } from "../config/env";
import { UserInterfaceRepository } from "../repositories/user-interface.repository";

interface AuthUserRequest{
    email: string;
    password: string;
}

export class AuthUserService {
    constructor(
        private userModel: UserInterfaceRepository
    ){}

    async execute({email, password}: AuthUserRequest){
        const userExists = await this.userModel.findUserByEmail(email);

        if(!userExists){
            throw new Error("Ops! Este email não está cadastrado! Se você não tem uma conta, cadastre-se!");
        }

        const passwordMatch = await compare(password, userExists.password as string);

        if(!passwordMatch){
            throw new Error("Ops! Senha ou e-mail incorretos!");
        }

        const token = sign(
            {},
            env.JWT_SECRET,
            {
                subject: userExists.id,
                expiresIn: "1d"
            }
        )

        return {token}

    }
}
import { compare } from "bcryptjs";
import { User } from "../../models/Users";
import { sign } from "jsonwebtoken";
import { env } from "../../config/env";

interface AuthUserRequest{
    email: string;
    password: string;
}

export class AuthUserService {
    constructor(
        private userModel: typeof User
    ){}

    async execute(data: AuthUserRequest){
        const userExists = await this.userModel.findOne({
            email: data.email
        })

        if(!userExists){
            throw new Error("Ops! Este email não está cadastrado! Se você não tem uma conta, cadastre-se!");
        }

        const passwordMatch = await compare(data.password, userExists.password as string);

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
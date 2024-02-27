import { Request, Response } from "express";
import { z } from "zod";
import { makeAuthUserService } from "../../services/factory/make-auth-user-service";

export async function authUserController(req: Request, res: Response){
    const authUserSchema = z.object({
        email: z.string().email().min(1),
        password: z.string().min(6)
    })

    const {email, password} = authUserSchema.parse(req.body);

    const service = makeAuthUserService();

    try {
        const token = await service.execute({email, password});

        return res.status(200).json(token);
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({message: error.message});
        }
    }
}
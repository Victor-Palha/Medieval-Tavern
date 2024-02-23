import { Request, Response } from "express";
import { z } from "zod";
import { MakeCreateUserService } from "../../../services/factory/make-create-user-service";

export async function createUserController(req: Request, res: Response){
    const userSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        description: z.string(),
        image: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9"])
    })

    const data = userSchema.parse(req.body);

    const service = MakeCreateUserService();

    try {
        await service.execute(data);
        return res.status(201).json({message: "Usuário criado com sucesso!"});
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({message: error.message});
        }
    }
}
import { Request, Response } from "express";
import { z } from "zod";
import { MakeCreateUserService } from "../../services/factory/make-create-user-service";

export async function createUserController(req: Request, res: Response){
    const userSchema = z.object({
        name: z.string().min(3),
        email: z.string().email().min(1),
        password: z.string().min(6),
        description: z.string().default("Novo(a) chefe na área!"),
        image: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9"]).default("1")
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
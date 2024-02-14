import { Request, Response } from "express";
import { z } from "zod";
import { MakeCreateUserService } from "../../../services/factory/make-create-user-service";

export async function createUserController(req: Request, res: Response){
    const userSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6)
    })

    const data = userSchema.parse(req.body);

    const service = MakeCreateUserService();

    try {
        await service.execute(data);
        return res.status(201);
    } catch (error) {
        return res.status(400).json({message: error});
    }
}
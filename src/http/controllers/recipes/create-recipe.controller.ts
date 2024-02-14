import { Request, Response } from "express";
import { z } from "zod";
import { MakeCreateRecipeService } from "../../../services/factory/make-create-recipe-service";

export async function createRecipeController(req: Request, res:Response){
    const recipeSchema = z.object({
        name: z.string(),
        origin: z.string(),
        tags: z.array(z.string()),
        serves: z.number(),
        ingredients: z.array(z.string()),
        instructions: z.array(z.string()),
        description: z.string(),
        image: z.string(),
    })

    const data = recipeSchema.parse(req.body);

    const service = MakeCreateRecipeService();

    try {
        await service.execute({
            userId: req.user_id.sub,
            ...data
        });
        return res.status(201).json({message: "Receita criada com sucesso!"});
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({message: error.message});
        }
    }
}
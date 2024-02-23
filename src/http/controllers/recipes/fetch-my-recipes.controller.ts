import { Request, Response } from "express";
import { makeFetchMyRecipesService } from "../../../services/factory/make-fetch-my-recipes-service";
import z from "zod";

export async function fetchMyRecipesController(req: Request, res: Response){
    const getRecipesFromSchema = z.object({
        id: z.string().min(1)
    })

    const service = makeFetchMyRecipesService();
    try {
        const {id} = getRecipesFromSchema.parse(req.params);
        const recipes = await service.execute(id);
        return res.status(200).json(recipes);
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({message: error.message});
        }
    }
}
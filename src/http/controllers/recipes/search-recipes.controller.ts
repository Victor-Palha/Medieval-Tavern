import { Request, Response } from "express";
import { z } from "zod";
import { makeSearchRecipesService } from "../../../services/factory/make-search-recipes-service";

export async function searchRecipesController(req: Request, res: Response){
    const searchSchema = z.object({
        q: z.string()
    })
    const { q } = searchSchema.parse(req.query);

    const service = makeSearchRecipesService();

    try {
        const response = await service.execute(q);
        return res.status(200).json(response);
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({error: error.message});
        }
    }
}
import { Request, Response } from "express";
import { makeFetchMyRecipesService } from "../../../services/factory/make-fetch-my-recipes-service";

export async function fetchMyRecipesController(req: Request, res: Response){
    const service = makeFetchMyRecipesService();
    try {
        const recipes = await service.execute(req.user_id.sub);
        return res.status(200).json(recipes);
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({message: error.message});
        }
    }
}
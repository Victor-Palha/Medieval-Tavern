import { Request, Response } from "express";
import { makeGetUniqueRecipeService } from "../../../services/factory/make-get-unique-recipe-service";

export async function getUniqueRecipeController(req: Request, res: Response){
    const recipeId = req.params.id;

    const service = makeGetUniqueRecipeService();
    try {
        const result = await service.execute(recipeId);
        return res.status(200).json(result);
    } catch (error) {
        if(error instanceof Error){
            return res.status(404).json({message: error.message});
        }
    }
}
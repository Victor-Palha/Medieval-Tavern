import { Request, Response } from "express";
import { makeGiveStartToRecipeService } from "../../services/factory/make-give-start-to-recipe-service";

export async function giveStartToRecipeController(req: Request, res: Response){
    const id = req.params.id;

    const service = makeGiveStartToRecipeService();

    try {
        await service.execute({
            recipeId: id,
            userId: req.user_id.sub
        })

        return res.status(204).json();
    } catch (error) {
        if(error instanceof Error){
            return res.status(404).json({message: error.message});
        }
    }
}
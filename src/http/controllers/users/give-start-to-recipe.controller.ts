import { Request, Response } from "express";
import { makeGiveStartToRecipeService } from "../../../services/factory/make-give-start-to-recipe-service";

export async function giveStartToRecipeController(req: Request, res: Response){
    const id = req.params.id;

    const service = makeGiveStartToRecipeService();

    try {
        const {recipeResponse} = await service.execute(
            id,
            req.user_id.sub
        )

        return res.status(200).json({message: recipeResponse});
    } catch (error) {
        if(error instanceof Error){
            return res.status(404).json({message: error.message});
        }
    }
}
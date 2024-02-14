import { Request, Response } from "express";
import { makeFetchMyFavoritesRecipesService } from "../../../services/factory/make-fetch-my-favorites-recipes-service";

export async function fetchMyFavoritesRecipesController(req:Request, res:Response){

    const service = makeFetchMyFavoritesRecipesService();

    try {
        const {recipes} = await service.execute(req.user_id.sub);

        return res.status(200).json({recipes});
    } catch (error) {
        if(error instanceof Error){
            return res.status(404).json({message: error.message});
        }
    }
}
import { Request, Response } from "express";
import { makeFetchMyFavoritesRecipesService } from "../../../services/factory/make-fetch-my-favorites-recipes-service";
import z from "zod";

export async function fetchMyFavoritesRecipesController(req:Request, res:Response){

    const fetchFavoritesSchema = z.object({
        id: z.string()
    })
    const {id} = fetchFavoritesSchema.parse(req.params);
    const service = makeFetchMyFavoritesRecipesService();


    try {
        const {recipes} = await service.execute(id);

        return res.status(200).json({recipes});
    } catch (error) {
        if(error instanceof Error){
            return res.status(404).json({message: error.message});
        }
    }
}
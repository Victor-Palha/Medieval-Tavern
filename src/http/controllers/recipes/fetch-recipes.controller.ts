import { Request, Response } from "express";
import { makeFetchRecipesService } from "../../../services/factory/make-fetch-recipes-service";

export async function fetchRecipesController(req: Request, res:Response){
    const service = makeFetchRecipesService();

    try {
        const recipes = await service.execute();
        return res.status(200).json(recipes);
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({message: error.message});
        }
    }
}
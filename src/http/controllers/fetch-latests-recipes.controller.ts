import { Request, Response } from "express";
import { makeFetchLatestRecipesService } from "../../services/factory/make-fetch-latests-recipes-service";

export async function fetchLatestsRecipesController(_req: Request, res: Response){

    try {
        const service = makeFetchLatestRecipesService();
        const {bestsRecipes} = await service.execute();

        return res.status(200).json({recipes: bestsRecipes});
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({error: error.message});
        }
    }
}
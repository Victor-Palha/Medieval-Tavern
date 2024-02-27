import { Request, Response } from "express";
import z from "zod";
import { makeDeleteRecipeService } from "../../services/factory/make-delete-recipe-service";

export async function deleteRecipeController(req: Request, res: Response){
    const deleteRecipeSchema = z.object({
        id: z.string()
    })

    const { id } = deleteRecipeSchema.parse(req.params);

    const service = makeDeleteRecipeService();

    try {
        await service.execute({
            id,
            user_id: req.user_id.sub
        })

        return res.status(204).send({message: "Receita deletada com sucesso!"});
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).send({message: error.message});
        }
    }
}
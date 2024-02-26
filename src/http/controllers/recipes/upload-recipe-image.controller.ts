import { Request, Response } from "express";
import z from "zod";

export async function uploadRecipeImageController(req: Request, res: Response) {
    const recipeImageSchema = z.object({
        originalname: z.string(),
        mimetype: z.string(),
        size: z.number(),
        key: z.string(),
    })

    const {key} = recipeImageSchema.parse(req.file);

    return res.status(201).json({url: `https://pub-921512ef7f0b4922aa488b1a93a08b4e.r2.dev/${key}`});
}
import { Request, Response } from "express";
import z from "zod";
import { makeUpdateUserProfileService } from "../../services/factory/make-update-user-profile-service";

export function updateUserProfileController(req: Request, res: Response){
    const updateProfileSchema = z.object({
        name: z.string().min(3),
        description: z.string().min(6),
        image: z.string().optional()
    })

    const { name, description, image } = updateProfileSchema.parse(req.body);

    const service = makeUpdateUserProfileService();

    try {
        service.execute({
            userId: req.user_id.sub,
            name,
            description,
            image
        });

        return res.status(204).json({message: "Perfil atualizado com sucesso!"});
    } catch (error) {
        if(error instanceof Error){
            return res.status(404).json({message: error.message});
        }
    }
}
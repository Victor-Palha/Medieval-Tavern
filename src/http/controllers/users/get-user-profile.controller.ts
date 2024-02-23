import { Request, Response } from "express";
import { makeGetUserProfileService } from "../../../services/factory/make-get-user-profile-service";
import z from "zod";

export async function GetUserProfileController(req: Request, res: Response){
    const getUserProfileSchema = z.object({
        id: z.string().min(1)
    })

    const service = makeGetUserProfileService();
    try {
        const {id} = getUserProfileSchema.parse(req.params);
        const response = await service.execute(id);

        return res.json(response);
        
    } catch (error) {
        if(error instanceof Error){
            return res.status(404).json({message: error.message});
        }
    }
}
import { Request, Response } from "express";
import { makeGetUserProfileService } from "../../services/factory/make-get-user-profile-service";

export async function validateTokenController(req: Request, res: Response){

    const id = req.user_id.sub
    const service = makeGetUserProfileService();

    try {
        const {_id, name, image, description, myFavorites } = await service.execute(id);

        return res.status(200).json({_id, name, image, description, myFavorites});

    } catch (error) {
        if(error instanceof Error){
            return res.status(404).json({message: error.message});
        }
    }
}
import { Request, Response } from "express";
import { DefaultImages } from "../../models/images";

export function fetchDefaultImagesController(_req: Request, res: Response){
    const images = [
        {
            id: "1",
            url: DefaultImages.default
        },
        {
            id: "2",
            url: DefaultImages.manElf1
        },
        {
            id: "3",
            url: DefaultImages.manElf2
        },
        {
            id: "4",
            url: DefaultImages.manOrc
        },
        {
            id: "5",
            url: DefaultImages.manTiefling
        },
        {
            id: "6",
            url: DefaultImages.womanElf1
        },
        {
            id: "7",
            url: DefaultImages.womanElf2
        },
        {
            id: "8",
            url: DefaultImages.womanOrc
        },
        {
            id: "9",
            url: DefaultImages.womanTiefling
        }
    ]
    return res.status(200).json(images)
}
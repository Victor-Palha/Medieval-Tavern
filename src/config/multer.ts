import multer from 'multer';
import multerS3 from 'multer-s3';
import { r2 } from '../lib/cloudflare';
import { env } from './env';


export const multerConfig: multer.Options = {
    storage: multerS3({
        s3: r2,
        bucket: env.CLOUDFLARE_BUCKET,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (_req, file, cb) => {
            const filename = `${Date.now()}-${file.originalname}`;
            cb(null, filename);
        }
    }),
    limits: {
        fileSize: 1024 * 1024 * 2
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/png"
        ]

        if(allowedMimes.includes(file.mimetype)){
            cb(null, true)
        }else {
            cb(new Error("Invalid file type"))
        }
    }
}
import {z} from "zod";

const envSchema = z.object({
    PORT: z.coerce.number().default(3000),
    DATABASE_URL: z.string().url(),
    JWT_SECRET: z.string(),
})

const _env = envSchema.safeParse(process.env);

if(!_env.success){
    console.error("Invalid environment variables:");
    throw new Error(_env.error.message);
}

export const env = _env.data
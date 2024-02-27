import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { ZodError } from 'zod';
import { appRoutes } from "./http/controllers/routes";

const app = express();

// Global Middlewares
const dir = process.cwd() + "/src/public";

app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use(express.static(dir));

// Routes
app.use("/api/", appRoutes);

//Errors
app.use((err:Error, _req:Request, res:Response, next: NextFunction)=>{
    if(err instanceof ZodError){
        //if are error
        return res.status(400).json({
            mesage: "Invalid data",
            error: err.issues,
        })
    }

    if(err instanceof Error){
        //if are error
        return res.status(500).json({
            error: err.message
        })
    }
    return res.status(500).json({status: "error", message:"Internal server error"})
})


export default app;
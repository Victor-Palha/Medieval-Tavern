import { Application } from "express";
import { createUserController } from "./create-user.controller";
import { authUserController } from "./auth-user.controller";

export async function routesUsers(app: Application){
    app.post("/signup", createUserController)
    app.get("/signin", authUserController)
}
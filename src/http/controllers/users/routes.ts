import { Router } from "express";
import { createUserController } from "./create-user.controller";
import { authUserController } from "./auth-user.controller";

const routesUsers = Router();
routesUsers
.post("/signup", createUserController)
.post("/signin", authUserController)

export { routesUsers }
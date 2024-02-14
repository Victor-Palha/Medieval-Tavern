import { Router } from "express";
import { createUserController } from "./create-user.controller";
import { authUserController } from "./auth-user.controller";
import { giveStartToRecipeController } from "./give-start-to-recipe.controller";
import { jwtMiddleware } from "../../middlewares/jwt.middleware";
import { fetchMyFavoritesRecipesController } from "./fetch-my-favorites-recipes.controller";

const routesUsers = Router();
routesUsers
.post("/signup", createUserController)
.post("/signin", authUserController)
.patch("/star/:id", jwtMiddleware, giveStartToRecipeController)
.get("/my-favorites", jwtMiddleware, fetchMyFavoritesRecipesController)

export { routesUsers }
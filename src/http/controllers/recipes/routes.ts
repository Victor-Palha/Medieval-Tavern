import { Application } from "express";
import { createRecipeController } from "./create-recipe.controller";
import { jwtMiddleware } from "../../middlewares/jwt.middleware";

export async function routesRecipes(app: Application){
    app.post("/recipes", jwtMiddleware, createRecipeController)
}
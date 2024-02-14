import { Router } from "express";
import { createRecipeController } from "./create-recipe.controller";
import { jwtMiddleware } from "../../middlewares/jwt.middleware";
import { fetchRecipesController } from "./fetch-recipes.controller";

const routesRecipes = Router();

routesRecipes
.post("/recipes", jwtMiddleware, createRecipeController)
.get("/recipes", fetchRecipesController)

export { routesRecipes }
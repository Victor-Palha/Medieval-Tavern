import { Router } from "express";
import { createRecipeController } from "./create-recipe.controller";
import { jwtMiddleware } from "../../middlewares/jwt.middleware";
import { fetchRecipesController } from "./fetch-recipes.controller";
import { fetchMyRecipesController } from "./fetch-my-recipes.controller";
import { getUniqueRecipeController } from "./get-unique-recipe.controller";
import { searchRecipesController } from "./search-recipes.controller";

const routesRecipes = Router();

routesRecipes
.post("/recipes", jwtMiddleware, createRecipeController)
.get("/recipes", fetchRecipesController)
.get("/recipes/my", jwtMiddleware, fetchMyRecipesController)
.get("/recipes/:id", getUniqueRecipeController)
.get("/search", searchRecipesController)

export { routesRecipes }
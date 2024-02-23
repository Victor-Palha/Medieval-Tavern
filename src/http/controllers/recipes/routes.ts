import { Router } from "express";
import { createRecipeController } from "./create-recipe.controller";
import { jwtMiddleware } from "../../middlewares/jwt.middleware";
import { fetchRecipesController } from "./fetch-recipes.controller";
import { fetchMyRecipesController } from "./fetch-my-recipes.controller";
import { getUniqueRecipeController } from "./get-unique-recipe.controller";
import { searchRecipesController } from "./search-recipes.controller";
import { fetchLastestsRecipesController } from "./fetch-lastests-recipes.controller";

const routesRecipes = Router();

routesRecipes
.post("/recipes", jwtMiddleware, createRecipeController)
.get("/recipes", fetchRecipesController)
.get("/recipes/latests", fetchLastestsRecipesController)
.get("/recipes/from/:id", fetchMyRecipesController)
.get("/recipes/:id", getUniqueRecipeController)
.get("/recipes/search", searchRecipesController)

export { routesRecipes }
import { Router } from "express";
import { createRecipeController } from "./create-recipe.controller";
import { jwtMiddleware } from "../../middlewares/jwt.middleware";
import { fetchRecipesController } from "./fetch-recipes.controller";
import { fetchMyRecipesController } from "./fetch-my-recipes.controller";
import { getUniqueRecipeController } from "./get-unique-recipe.controller";
import { searchRecipesController } from "./search-recipes.controller";
import { fetchLastestsRecipesController } from "./fetch-lastests-recipes.controller";
import { deleteRecipeController } from "./delete-recipe.controller";
import multer from "multer";
import { multerConfig } from "../../../config/multer";
import { uploadRecipeImageController } from "./upload-recipe-image.controller";

const routesRecipes = Router();

routesRecipes
.post("/recipes", jwtMiddleware, createRecipeController)
.post("/recipes/image", jwtMiddleware, multer(multerConfig).single("file"), uploadRecipeImageController)
.get("/recipes", fetchRecipesController)
.get("/recipes/latests", fetchLastestsRecipesController)
.delete("/recipes/:id", jwtMiddleware, deleteRecipeController)
// .get("/recipes/from/:id", fetchMyRecipesController)
.get("/recipes/search", searchRecipesController)
.get("/recipes/:id", getUniqueRecipeController)

export { routesRecipes }
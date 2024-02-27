import { Router } from "express";
import { createUserController } from "./create-user.controller";
import { authUserController } from "./auth-user.controller";
import { GetUserProfileController } from "./get-user-profile.controller";
import { jwtMiddleware } from "../middlewares/jwt.middleware";
import { updateUserProfileController } from "./update-user-profile.controller";
import { fetchDefaultImagesController } from "./fetch-default-images.controller";
import { giveStartToRecipeController } from "./give-start-to-recipe.controller";
import { fetchMyFavoritesRecipesController } from "./fetch-my-favorites-recipes.controller";
import { validateTokenController } from "./validate-token.controller";
import { createRecipeController } from "./create-recipe.controller";
import multer from "multer";
import { multerConfig } from "../../config/multer";
import { uploadRecipeImageController } from "./upload-recipe-image.controller";
import { fetchRecipesController } from "./fetch-recipes.controller";
import { fetchLatestsRecipesController } from "./fetch-latests-recipes.controller";
import { deleteRecipeController } from "./delete-recipe.controller";
import { searchRecipesController } from "./search-recipes.controller";
import { getUniqueRecipeController } from "./get-unique-recipe.controller";

export const appRoutes = Router();

appRoutes
.post("/signup", createUserController)
.post("/signin", authUserController)
.get("/profile/:id", GetUserProfileController)
.get("/imgs", fetchDefaultImagesController)
.get("/recipes", fetchRecipesController)
.get("/recipes/latests", fetchLatestsRecipesController)
.get("/recipes/search", searchRecipesController)
.get("/recipes/favorite/:id", fetchMyFavoritesRecipesController)
.get("/recipes/:id", getUniqueRecipeController)

//Private routes
.post("/recipes/image", jwtMiddleware, multer(multerConfig).single("file"), uploadRecipeImageController)
.post("/recipes", jwtMiddleware, createRecipeController)
.patch("/recipes/star/:id", jwtMiddleware, giveStartToRecipeController)
.delete("/recipes/:id", jwtMiddleware, deleteRecipeController)
.put("/profile/update", jwtMiddleware, updateUserProfileController)
.get("/auth/validate", jwtMiddleware, validateTokenController)

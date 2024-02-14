import { Schema, model } from "mongoose";
import { recipeSchema } from "./Recipes";

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true, 
    },
    myRecipes: {
        type: [recipeSchema]
    },
    myFavorites: {
        type: [recipeSchema]
    }
}, {
    timestamps: true,
})

const User = model("Users", userSchema);

export {
    User,
    userSchema
};
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
    description: {
        type: String,
        default: "Sem descrição",
    },
    image: {
        type: String,
        default: "https://medieval-tavern-api.azurewebsites.net/images/default-user-image.jpeg",
        require: true,
    },
    myRecipes: [{
        type: Schema.Types.ObjectId,
        ref: "Recipes"
    }],
    myFavorites: [{
        type: Schema.Types.ObjectId,
        ref: "Recipes"
    }]
}, {
    timestamps: true,
})

const User = model("Users", userSchema);

export {
    User,
    userSchema
};
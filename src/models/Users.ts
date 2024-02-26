import { Document, Schema, Types, model } from "mongoose";

interface User {
    name: string;
    email: string;
    password: string;
    description: string;
    image: string;
    myRecipes: Types.ObjectId[];
    myFavorites: Types.ObjectId[];
}

interface UserDocument extends User, Document {}

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
        ref: "Recipes",
        default: []
    }],
    myFavorites: [{
        type: Schema.Types.ObjectId,
        ref: "Recipes",
        default: []
    }]
}, {
    timestamps: true,
})

const User = model<UserDocument>("Users", userSchema);

export {
    User,
    userSchema,
    UserDocument
};
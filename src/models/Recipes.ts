import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
    name: {
        type: String,
        require: true, 
    },
    origin: {
        type: String,
        require: true,
    },
    tags: {
        type: [String],
        require: true,
    },
    serves: {
        type: Number,
        require: true,
    },
    ingredients: {
        type: [String],
        require: true,
    },
    instructions: {
        type: [String],
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    stars: {
        type: Number,
        default: 0,
    },
    time: {
        type: String,
        require: true,
    }
}, {
    timestamps: true,
})

const Recipe = model("Recipes", recipeSchema);

export {
    Recipe,
    recipeSchema
};
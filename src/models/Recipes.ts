import { Schema, Types, model } from "mongoose";

interface Recipe {
    name: string;
    origin: string;
    tags: string[];
    serves: number;
    ingredients: string[];
    instructions: string[];
    description: string;
    image: string;
    stars: number;
    time: string;
    createdBy: Types.ObjectId;
}

interface RecipeDocument extends Recipe, Document {}

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
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "Users",
    }
}, {
    timestamps: true,
})

const Recipe = model("Recipes", recipeSchema);

export {
    Recipe,
    recipeSchema,
    RecipeDocument
};
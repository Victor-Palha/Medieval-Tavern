import mongoose from "mongoose";
import { env } from "./env";

async function connect(){
    try {
        await mongoose.connect(env.DATABASE_URL)
    } catch (error) {
        console.error("Error connecting to database: ", error);
    }
}

export default connect;
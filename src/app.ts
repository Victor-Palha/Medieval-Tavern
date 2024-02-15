import express from 'express';
import cors from 'cors';
import { routesRecipes } from './http/controllers/recipes/routes';
import { routesUsers } from './http/controllers/users/routes';
import path from 'node:path';

const app = express();

// Global Middlewares
const dir = process.cwd() + "/src/public";

app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use(express.static(dir));

// Routes
app.use("/api/", routesRecipes);
app.use("/api/", routesUsers);


export default app;
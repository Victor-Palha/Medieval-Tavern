import express from 'express';
import cors from 'cors';
import { routesRecipes } from './http/controllers/recipes/routes';
import { routesUsers } from './http/controllers/users/routes';

const app = express();

// Global Middlewares
app.use(cors({
    origin: "*"
}));
app.use(express.json());

// Routes
app.use(routesRecipes);
app.use(routesUsers);


export default app;
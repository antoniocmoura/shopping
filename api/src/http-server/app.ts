import express from "express";
import categoriesRoute from "./routes/categories.route";
import productsRoute from "./routes/products.route";
import statusRoute from "./routes/status.route";
import errorHandler from './middlewares/error-handler.middleware';

const server = express();

// Configurations
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Routes
server.use(statusRoute);
server.use(categoriesRoute);
server.use(productsRoute);

// Error Handler
server.use(errorHandler);

export { server };

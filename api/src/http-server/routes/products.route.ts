import { Router } from "express";
import ProductsController from "../../controllers/products-controller";

const productsRoute = Router();
const productsController = new ProductsController();

productsRoute.get("/products",  productsController.list);
productsRoute.get("/products/:uuid", productsController.get);
productsRoute.post("/products", productsController.post);
productsRoute.put("/products/:uuid", productsController.put);
productsRoute.delete("/products/:uuid", productsController.delete);

export default productsRoute;

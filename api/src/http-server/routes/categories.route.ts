import { Router } from "express";
import CategoriesController from "../../controllers/categories-controller";

const categoriesRoute = Router();
const categoriesController = new CategoriesController();

categoriesRoute.get("/categories", categoriesController.list);
categoriesRoute.get("/categories/:uuid", categoriesController.get);
categoriesRoute.post("/categories", categoriesController.post);
categoriesRoute.put("/categories/:uuid", categoriesController.put); 
categoriesRoute.delete("/categories/:uuid",  categoriesController.delete);

export default categoriesRoute;

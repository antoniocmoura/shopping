import { DataSource } from "typeorm";
import { Category } from "../entities/category.typeorm.entity";
import { Product } from "../entities/product.typeorm.entity";
import { InsertCategoryes1659739651657 } from "./migrations/1659739651657-InsertCategoryes";
import { InsertProducts1659906848359 } from "./migrations/1659906848359-InsertProducts";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "ecommerce",    
    entities: [Category, Product],
    migrations: [InsertCategoryes1659739651657, InsertProducts1659906848359],
    synchronize: true,
    logging: true,    
})

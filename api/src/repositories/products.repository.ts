import { StatusCodes } from "http-status-codes";
import { Repository } from "typeorm";
 import { Product } from "../entities/product.typeorm.entity";
import AppError from "../models/errors/app.error.model";
import DatabaseError from "../models/errors/database.error.model";
import { AppDataSource } from "../typeorm";
import categoriesRepository from "./categories.repository";

class ProductsRepository {
    private repository: Repository<Product>;

    constructor() {
        this.repository = AppDataSource.getRepository(Product);
    }

    public async create(productRequest: ProductRequest): Promise<Product> {
        const category = await categoriesRepository.findById(productRequest.category_id);
        if (category) {
            const product = this.repository.create(productRequest);
            product.category = category;
            await this.repository.save(product);
            return product;
        } else {
            throw new AppError(`Category with id ${productRequest.category_id} was not found.`, StatusCodes.NOT_FOUND);
        }
    }

    public async findAll(): Promise<Product[]> {
        const products = await this.repository.find();
        return products;
    }

    public async findById(uuid: string): Promise<Product | null> {
        try {
            const product = await this.repository.findOneBy({ id: uuid });
            return product;
        } catch (error) {
            throw new DatabaseError('Id query error', error);
        }
    }

    public async update(uuid: string, productRequest: ProductRequest): Promise<Product> {
        const product = await this.findById(uuid);
        if (product) {
            try {
                const category = await categoriesRepository.findById(productRequest.category_id);
                if (category) {
                    product.name = productRequest.name;
                    product.image = productRequest.image;
                    product.price = productRequest.price;
                    product.quantity = productRequest.quantity;
                    product.category = category;
                    const updatedProduct = await this.repository.save(product);
                    return updatedProduct;
                } else {
                    throw new AppError(`Category with id ${productRequest.category_id} was not found.`, StatusCodes.NOT_FOUND);
                }
            } catch (error) {
                throw new DatabaseError('Product update error', error);
            }
        } else {
            throw new AppError(`Product with id ${uuid} was not found.`, StatusCodes.NOT_FOUND);
        }
    }

    public async delete(uuid: string) {
        const product = await this.findById(uuid);
        if (product) {
            await this.repository.remove(product);
        }
    }

}

export default new ProductsRepository();

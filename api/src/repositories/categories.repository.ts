import { StatusCodes } from "http-status-codes";
import { Repository } from "typeorm";
import { Category } from "../entities/category.typeorm.entity";
import AppError from "../models/errors/app.error.model";
import DatabaseError from "../models/errors/database.error.model";
import { AppDataSource } from "../typeorm";

class CategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = AppDataSource.getRepository(Category);
    }

    public async create(categoryRequest: CategoryRequest): Promise<Category> {
        try {
            const category = this.repository.create(categoryRequest);
            await this.repository.save(category);
            return category;
        } catch (error) {
            throw new DatabaseError("Create category error", error);
        }
    }

    public async findAll(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    } 

    public async findById(uuid: string): Promise<Category | null> {
        try {
            const category = await this.repository.findOneBy({ id: uuid });
            return category;
        } catch (error) {
            throw new DatabaseError('Id query error', error);
        }
    }

    public async update(uuid: string, categoryRequest: CategoryRequest): Promise<Category> {
        const category = await this.findById(uuid);
        if (category) {
            try {
                category.name = categoryRequest.name;
                const updatedCategory = await this.repository.save(category);
                return updatedCategory;
            } catch (error) {
                throw new DatabaseError('Category update error', error);
            }
        } else {
            throw new AppError(`Category with id ${uuid} was not found.`, StatusCodes.NOT_FOUND);
        }
    }

    public async delete(uuid: string) {
        const category = await this.findById(uuid);
        if (category) {
            await this.repository.remove(category);
        }
    }
}

export default new CategoriesRepository();

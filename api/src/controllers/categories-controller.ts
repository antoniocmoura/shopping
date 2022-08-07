import { Request, Response, NextFunction } from "express";
import StatusCodes from "http-status-codes";
import categoriesRepository from "../repositories/categories.repository";

export default class CategoriesController {
    public async list(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const categories = await categoriesRepository.findAll();
        return res.status(StatusCodes.OK).send(categories);
    }

    public async get(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
        try {
            const category = await categoriesRepository.findById(req.params.uuid);
            return res.status(StatusCodes.OK).send(category);
        } catch (error) {
            next(error);
        }
    }

    public async post(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
        try {
            const category = await categoriesRepository.create(req.body);
            return res.status(StatusCodes.CREATED).send(category);
        } catch (error) {
            next(error);
        }
    }

    public async put(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
        try {
            const category = await categoriesRepository.update(req.params.uuid, req.body);
            return res.status(StatusCodes.OK).send(category);
        } catch (error) {
            next(error);
        }
    }

    public async delete(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
        try {
            await categoriesRepository.delete(req.params.uuid);
            return res.sendStatus(StatusCodes.OK);
        } catch (error) {
            next(error);
        }
    }
}

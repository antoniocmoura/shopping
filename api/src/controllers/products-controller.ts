import { Request, Response, NextFunction } from "express";
import StatusCodes from "http-status-codes";
import productsRepository from "../repositories/products.repository";

export default class ProductsController {
    public async list(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const products = await productsRepository.findAll();
        return res.status(StatusCodes.OK).send(products);
    }

    public async get(req: Request<{ uuid: string }>, res: Response, next: NextFunction): Promise<Response | undefined> {
        try {
            const product = await productsRepository.findById(req.params.uuid);
            return res.status(StatusCodes.OK).send(product);
        } catch (error) {
            next(error);
        }
    }

    public async post(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
        try {            
            const product = await productsRepository.create(req.body);
            return res.status(StatusCodes.CREATED).send(product);
        } catch (error) {
            next(error);
        }        
    }

    public async put(req: Request<{ uuid: string }>, res: Response, next: NextFunction): Promise<Response | undefined> {
        try {            
            const product = await productsRepository.update(req.params.uuid, req.body);
            return res.status(StatusCodes.CREATED).send(product);
        } catch (error) {
            next(error);
        }        
    }

    public async delete(req: Request<{ uuid: string }>, res: Response, next: NextFunction): Promise<Response | undefined> {
        try {
            await productsRepository.delete(req.params.uuid);
            return res.sendStatus(StatusCodes.OK);
        } catch (error) {
            next(error);
        }
    }
}

import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import AppError from "../../models/errors/app.error.model";
import DatabaseError from "../../models/errors/database.error.model";
import ForbiddenError from "../../models/errors/forbidden.error.model";

export default function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    console.log('error handler');
    if (error instanceof AppError) {
        res.status(error.statusCode).send(error);
    } else if (error instanceof DatabaseError) {
        res.sendStatus(StatusCodes.BAD_REQUEST);
    } else if (error instanceof ForbiddenError) {
        res.sendStatus(StatusCodes.FORBIDDEN);
    } else {
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

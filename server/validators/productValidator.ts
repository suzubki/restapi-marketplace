import { Request, Response, NextFunction } from "express";

import { productSchema } from "../schema";

export const searchQuery = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const validated = await productSchema.schemaSearchQuery.validateAsync(
            req.query
        );
        req.body = validated;
        next();
    } catch (err) {
        return res.status(400).json({
            message: "Envie un formato de petición válido",
            err,
        });
    }
};

export const requestCreateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const validated = await productSchema.schemaCreateProduct.validateAsync(
            req.body
        );
        req.body = validated;
        next();
    } catch (err) {
        return res.status(400).json({
            message: "Envie un formato de petición válido",
            err,
        });
    }
};

export const updateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const validated = await productSchema.schemaSearchQuery.validateAsync(
            req.query
        );
        req.body = validated;
        next();
    } catch (err) {
        return res.status(400).json({
            message: "Envie un formato de petición válido",
            err,
        });
    }
};

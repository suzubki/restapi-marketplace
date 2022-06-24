import { Request, Response, NextFunction } from "express";
import { orderSchema } from "../schema";

export const requestCreateCoupon = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const validated = await orderSchema.schemaCreateOrder.validateAsync(
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

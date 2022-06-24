import { Request, Response, NextFunction } from "express";
import { couponSchema } from "../schema";

export const requestCreateCoupon = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const validated = await couponSchema.schemaCreateCoupon.validateAsync(
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

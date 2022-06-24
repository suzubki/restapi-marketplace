import { Request, Response, NextFunction } from "express";
import { userSchema } from "../schema";

export const schemaLoginRequest = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const validated = await userSchema.userLoginSchema.validateAsync(
            req.body
        );
        req.body = validated;
        next();
    } catch (err) {
        return res.status(400).json({
            message: "Envie un formato de petición válido",
        });
    }
};

export const schemaRegisterRequest = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const validated = await userSchema.userRegisterSchema.validateAsync(
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

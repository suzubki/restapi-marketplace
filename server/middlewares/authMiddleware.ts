import { Request, Response, NextFunction } from "express";
import { User } from "../models";
import { jwt } from "../utils";

export const verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token: string = "";

    // Bearer token
    const authHeader = req.headers["authorization"] || "";
    if (authHeader.split(" ")[0] === "Bearer") {
        token = authHeader.split(" ")[1];
    } else {
        // If token comes from cookies or body
        token = Object.keys(token).length === 0 && req.cookies;
        token = Object.keys(token).length === 0 && req.body.token;
    }

    if (!token) {
        return res.status(401).json({
            message:
                "Por favor mande un token válido para realizar la petición",
        });
    }

    // Set userId in params request for the next validation
    const userId = await jwt.isValidToken(token);
    req.params.userId = userId;

    next();
};

export const isAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userId = req.params.userId;

    // Find by id on database
    const user = await User.findById(userId).select("role -_id");

    if (!user) {
        return res.status(409).json({
            message: "El id del usuario no es válido",
        });
    }
    if (user.role === "client") {
        return res.status(401).json({
            message:
                "El usuario no tiene los permisos suficientes para realizar la petición",
        });
    }

    next();
};

export const isUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userId = req.params.userId;

    // Find by id on database
    const user = await User.findById(userId).select("role -_id");

    if (!user) {
        return res.status(409).json({
            message: "El id del usuario no es válido",
        });
    }
    if (user.role === "admin") {
        return res.status(401).json({
            message:
                "Los administradores no tienen los permisos suficientes para realizar la petición",
        });
    }

    next();
};

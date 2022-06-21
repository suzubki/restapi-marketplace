import { Request, Response, Router } from "express";
import { Admin } from "../models";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        const newAdmin = await Admin.create(req.body);

        return res.status(201).json({
            message: "Usuario creado",
            admin: newAdmin,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al crear un usuario",
            error,
        });
    }
});

export { router as adminRoutes };

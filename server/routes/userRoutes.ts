import { Request, Response, Router } from "express";
import { User } from "../models";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        const newUser = await User.create(req.body);

        return res.status(201).json({
            message: "Usuario creado",
            user: newUser,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al crear un usuario",
            error,
        });
    }
});

export { router as userRoutes };

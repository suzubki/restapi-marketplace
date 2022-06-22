import { Router } from "express";
import { seedData } from "../database";
import { User } from "../models";

const router = Router();

router.get("/", async (req, res) => {
    try {
        // Limpiamos la data de user
        User.deleteMany();

        // Rellenamos la data de user
        const newUsers = await User.insertMany(seedData.initialData.users);

        return res.json({
            newUsers,
        });
    } catch (error) {
        return res.json({
            error,
        });
    }
});

export { router as fakeRoutes };

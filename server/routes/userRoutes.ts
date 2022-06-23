import { Router } from "express";

import { userController } from "../controllers";

const router = Router();

// Login user
router.post("/login", userController.userLogin);

// Register user
router.post("/register", userController.userRegister);

export { router as userRoutes };

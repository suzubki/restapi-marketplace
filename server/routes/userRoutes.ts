import { Router } from "express";

import { userController } from "../controllers";
import { authMiddleware } from "../middlewares";
import { userValidator } from "../validators";

const router = Router();

// Login user
router.post(
    "/login",
    userValidator.schemaLoginRequest,
    userController.userLogin
);

// Register user
router.post(
    "/register",
    userValidator.schemaRegisterRequest,
    userController.userRegister
);

// History user
router.get(
    "/history",
    authMiddleware.verifyToken,
    authMiddleware.isUser,
    userController.getUserHistory
);

export { router as userRoutes };

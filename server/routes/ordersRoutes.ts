import { Router } from "express";
import { orderController } from "../controllers";
import { authMiddleware } from "../middlewares";

const router = Router();

router.get(
    "/",
    authMiddleware.verifyToken,
    authMiddleware.isAdmin,
    orderController.getAllOrders
);

router.post(
    "/",
    authMiddleware.verifyToken,
    authMiddleware.isUser,
    orderController.createOrder
);

export { router as ordersRoutes };

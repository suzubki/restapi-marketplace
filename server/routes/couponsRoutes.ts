import { Router } from "express";

import { couponController } from "../controllers";
import { authMiddleware } from "../middlewares";

const router = Router();

router.get(
    "/",
    authMiddleware.verifyToken,
    authMiddleware.isAdmin,
    couponController.getAllCoupons
);

router.get(
    "/:nombre",
    authMiddleware.verifyToken,
    authMiddleware.isAdmin,
    couponController.isValidCoupon
);

router.post(
    "/",
    authMiddleware.verifyToken,
    authMiddleware.isAdmin,
    couponController.createCoupon
);

export { router as couponsRoutes };

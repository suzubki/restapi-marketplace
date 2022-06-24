import { Router } from "express";

import { couponController } from "../controllers";
import { authMiddleware } from "../middlewares";
import { couponValidator } from "../validators";

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
    couponValidator.requestCreateCoupon,
    authMiddleware.verifyToken,
    authMiddleware.isAdmin,
    couponController.createCoupon
);

export { router as couponsRoutes };

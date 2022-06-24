"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.couponsRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const validators_1 = require("../validators");
const router = (0, express_1.Router)();
exports.couponsRoutes = router;
router.get("/", middlewares_1.authMiddleware.verifyToken, middlewares_1.authMiddleware.isAdmin, controllers_1.couponController.getAllCoupons);
router.get("/:nombre", middlewares_1.authMiddleware.verifyToken, middlewares_1.authMiddleware.isAdmin, controllers_1.couponController.isValidCoupon);
router.post("/", validators_1.couponValidator.requestCreateCoupon, middlewares_1.authMiddleware.verifyToken, middlewares_1.authMiddleware.isAdmin, controllers_1.couponController.createCoupon);
//# sourceMappingURL=couponsRoutes.js.map
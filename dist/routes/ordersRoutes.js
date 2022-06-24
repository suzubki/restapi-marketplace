"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
exports.ordersRoutes = router;
router.get("/", middlewares_1.authMiddleware.verifyToken, middlewares_1.authMiddleware.isAdmin, controllers_1.orderController.getAllOrders);
router.post("/", middlewares_1.authMiddleware.verifyToken, middlewares_1.authMiddleware.isUser, controllers_1.orderController.createOrder);
//# sourceMappingURL=ordersRoutes.js.map
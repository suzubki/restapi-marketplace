"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const validators_1 = require("../validators");
const router = (0, express_1.Router)();
exports.userRoutes = router;
// Login user
router.post("/login", validators_1.userValidator.schemaLoginRequest, controllers_1.userController.userLogin);
// Register user
router.post("/register", validators_1.userValidator.schemaRegisterRequest, controllers_1.userController.userRegister);
// History user
router.get("/history", middlewares_1.authMiddleware.verifyToken, middlewares_1.authMiddleware.isUser, controllers_1.userController.getUserHistory);
//# sourceMappingURL=userRoutes.js.map
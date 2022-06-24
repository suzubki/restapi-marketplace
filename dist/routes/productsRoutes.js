"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const validators_1 = require("../validators");
const router = (0, express_1.Router)();
exports.productsRoutes = router;
router.get("/", controllers_1.productController.getAllProducts);
router.get("/search", validators_1.productValidator.searchQuery, controllers_1.productController.getProductByQuery);
router.post("/", validators_1.productValidator.requestCreateProduct, middlewares_1.authMiddleware.verifyToken, middlewares_1.authMiddleware.isAdmin, controllers_1.productController.createProduct);
router.put("/:id", validators_1.productValidator.updateProduct, middlewares_1.authMiddleware.verifyToken, middlewares_1.authMiddleware.isAdmin, controllers_1.productController.updateProduct);
router.delete("/:id", middlewares_1.authMiddleware.verifyToken, middlewares_1.authMiddleware.isAdmin, controllers_1.productController.deleteProduct);
//# sourceMappingURL=productsRoutes.js.map
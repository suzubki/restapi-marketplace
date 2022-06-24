import { Router } from "express";

import { productController } from "../controllers";
import { authMiddleware } from "../middlewares";
import { productValidator } from "../validators";

const router = Router();

router.get("/", productController.getAllProducts);
router.get(
    "/search",
    productValidator.searchQuery,
    productController.getProductByQuery
);

router.post(
    "/",
    productValidator.requestCreateProduct,
    authMiddleware.verifyToken,
    authMiddleware.isAdmin,
    productController.createProduct
);

router.put(
    "/:id",
    productValidator.updateProduct,
    authMiddleware.verifyToken,
    authMiddleware.isAdmin,
    productController.updateProduct
);

router.delete(
    "/:id",
    authMiddleware.verifyToken,
    authMiddleware.isAdmin,
    productController.deleteProduct
);

export { router as productsRoutes };

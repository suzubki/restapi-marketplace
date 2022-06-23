import { Router } from "express";

import { productController } from "../controllers";
import { authMiddleware } from "../middlewares";

const router = Router();

router.get("/", productController.getAllProducts);
router.get("/search", productController.getProductByQuery);

router.post(
    "/",
    authMiddleware.verifyToken,
    authMiddleware.isAdmin,
    productController.createProduct
);

router.put(
    "/:id",
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

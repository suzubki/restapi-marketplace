import { Router } from "express";
import { seedData } from "../database";
import { Coupon, Product, User } from "../models";

const router = Router();

router.get("/user", async (req, res) => {
    try {
        // Limpiamos la data de user
        User.deleteMany();

        // Rellenamos la data de user
        const newUsers = await User.insertMany(seedData.initialData.users);

        return res.json({
            newUsers,
        });
    } catch (error) {
        return res.json({
            error,
        });
    }
});

router.get("/products", async (req, res) => {
    try {
        // Limpiamos la data de user
        Product.deleteMany();

        // Rellenamos la data de user
        const newProducts = await Product.insertMany(
            seedData.initialData.products
        );

        return res.json({
            newProducts,
        });
    } catch (error) {
        return res.json({
            error,
        });
    }
});

router.get("/coupons", async (req, res) => {
    try {
        // Limpiamos la data de la colección coupon
        Coupon.deleteMany();

        // Rellenamos la data de la colección coupons
        const newCoupons = await Coupon.insertMany(
            seedData.initialData.coupons
        );

        return res.json({
            newCoupons,
        });
    } catch (error) {
        return res.json({
            error,
        });
    }
});

export { router as fakeRoutes };

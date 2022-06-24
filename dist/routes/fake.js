"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeRoutes = void 0;
const express_1 = require("express");
const database_1 = require("../database");
const models_1 = require("../models");
const router = (0, express_1.Router)();
exports.fakeRoutes = router;
router.get("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Limpiamos la data de user
        models_1.User.deleteMany();
        // Rellenamos la data de user
        const newUsers = yield models_1.User.insertMany(database_1.seedData.initialData.users);
        return res.json({
            newUsers,
        });
    }
    catch (error) {
        return res.json({
            error,
        });
    }
}));
router.get("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Limpiamos la data de user
        models_1.Product.deleteMany();
        // Rellenamos la data de user
        const newProducts = yield models_1.Product.insertMany(database_1.seedData.initialData.products);
        return res.json({
            newProducts,
        });
    }
    catch (error) {
        return res.json({
            error,
        });
    }
}));
router.get("/coupons", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Limpiamos la data de la colección coupon
        models_1.Coupon.deleteMany();
        // Rellenamos la data de la colección coupons
        const newCoupons = yield models_1.Coupon.insertMany(database_1.seedData.initialData.coupons);
        return res.json({
            newCoupons,
        });
    }
    catch (error) {
        return res.json({
            error,
        });
    }
}));
//# sourceMappingURL=fake.js.map
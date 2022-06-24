"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const multer_1 = __importDefault(require("multer"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = require("./routes");
const api = (0, express_1.default)();
const upload = (0, multer_1.default)();
// if send body json
api.use(express_1.default.json());
// if send form-data
api.use(upload.none());
// parse cookies
api.use((0, cookie_parser_1.default)());
// cors middleware
api.use((0, cors_1.default)());
// security
api.use((0, helmet_1.default)());
// routes
api.use("/user", routes_1.userRoutes);
api.use("/products", routes_1.productsRoutes);
api.use("/coupons", routes_1.couponsRoutes);
api.use("/orders", routes_1.ordersRoutes);
// seed fake data
api.use("/seed", routes_1.fakeRoutes);
exports.default = api;
//# sourceMappingURL=api.js.map
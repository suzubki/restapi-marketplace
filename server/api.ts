import express from "express";
import cors from "cors";
import helmet from "helmet";
import multer from "multer";
import cookieParser from "cookie-parser";

import {
    userRoutes,
    productsRoutes,
    couponsRoutes,
    ordersRoutes,
    fakeRoutes,
} from "./routes";

const api = express();
const upload = multer();

// if send body json
api.use(express.json());

// if send form-data
api.use(upload.none());

// parse cookies
api.use(cookieParser());

// cors middleware
api.use(cors());

// security
api.use(helmet());

// routes
api.use("/user", userRoutes);
api.use("/products", productsRoutes);
api.use("/coupons", couponsRoutes);
api.use("/orders", ordersRoutes);

// seed fake data
api.use("/seed", fakeRoutes);

export default api;

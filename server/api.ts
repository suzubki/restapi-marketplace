import express from "express";
import cors from "cors";
import helmet from "helmet";

import { userRoutes, adminRoutes, productsRoutes } from "./routes";

const api = express();

// if send body json
api.use(express.json());

// cors middleware
api.use(cors());

// security
api.use(helmet());

// routes
api.use("/register/user", userRoutes);
api.use("/register/admin", adminRoutes);
api.use("/products", productsRoutes);

export default api;

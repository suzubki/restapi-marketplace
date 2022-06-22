import express from "express";
import cors from "cors";
import helmet from "helmet";

import { userRoutes, productsRoutes, fakeRoutes } from "./routes";

const api = express();

// if send body json
api.use(express.json());

// cors middleware
api.use(cors());

// security
api.use(helmet());

// routes
api.use("/register/user", userRoutes);
api.use("/products", productsRoutes);

// seed fake data
api.use("/seed", fakeRoutes);

export default api;

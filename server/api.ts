import express from "express";
import cors from "cors";
import helmet from "helmet";

import { userRoutes, adminRoutes } from "./routes";

const api = express();

// if send body json
api.use(express.json());

// if send body urlencoded
api.use(cors());

// some security
api.use(helmet());

// routes
api.use("/register/user", userRoutes);
api.use("/register/admin", adminRoutes);

export default api;

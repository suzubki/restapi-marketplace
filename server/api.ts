import express from "express";
import petRoutes from "./routes/petRoutes";

const api = express();
api.use(express.json());

api.use("/", petRoutes);

export default api;

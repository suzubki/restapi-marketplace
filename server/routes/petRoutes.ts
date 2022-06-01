import { Router } from "express";
import { createPet } from "../controllers/PetController";

const router = Router();

router.post("/pet", createPet);

export default router;

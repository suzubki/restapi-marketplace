import { Request, Response } from "express";
import { Pet } from "../models/Pet";

const createPet = async (req: Request, res: Response) => {
    const { pet } = req.body;

    if (!pet)
        return res.status(400).json({
            message: "Falta información el req.body",
        });

    try {
        const newPet = Pet.create(pet);
        return res.status(201).json({
            message: "Usuario creado!!",
            pet: newPet,
        });
    } catch (err) {
        return res.status(400).json({
            message: "Error en la validación!!",
        });
    }
};

export { createPet };

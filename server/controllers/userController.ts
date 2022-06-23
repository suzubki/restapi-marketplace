import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import { User } from "../models";
import { jwt } from "../utils";

export const userLogin = async (req: Request, res: Response) => {
    try {
        // TODO: Validamos que los campos esten completos, usaremos Joi Validator

        const { correo, contraseña } = req.body;
        if (!correo) {
            return res.json({
                message: "Ingresa un email válido",
            });
        }
        // Verify if email exists on database
        const user = await User.findOne({ correo });
        if (!user) {
            return res.status(404).json({
                message: "El correo no existe en la base de datos",
            });
        }
        // // Verify if password is valid
        const passwordIsCorrect = await bcrypt.compare(
            contraseña,
            user.contraseña
        );
        if (passwordIsCorrect === false) {
            return res.status(403).json({
                message: "La contraseña es incorrecta",
            });
        }

        const { _id = "", nombre = "" } = user;

        // Send the token and user info
        const token = jwt.createToken(_id, nombre, correo);

        return res.status(200).json({
            user,
            token,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al ingresar",
            error,
        });
    }
};

export const userRegister = async (req: Request, res: Response) => {
    try {
        // TODO: Validamos que los campos esten completos, usaremos Joi Validator

        const { correo, contraseña, nombre } = req.body;
        // Verify if email exists on database
        const oldUser = await User.findOne({ correo });
        if (oldUser) {
            return res.status(409).json({
                message: "El correo ya está siendo utilizado",
            });
        }

        // Hash the password and create user on database
        const newUser = await User.create({
            ...req.body,
            contraseña: bcrypt.hashSync(contraseña),
        });

        const { _id = "" } = newUser;

        // Create the token and send it together with the user info
        const token = jwt.createToken(_id, nombre, correo);

        return res.status(201).json({
            message: "Usuario creado",
            user: newUser,
            token,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al crear un usuario",
            error,
        });
    }
};

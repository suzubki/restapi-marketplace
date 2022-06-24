import Joi from "joi";

export const userLoginSchema = Joi.object({
    correo: Joi.string().min(5).required(),
    contraseña: Joi.string().min(4).required(),
});

export const userRegisterSchema = Joi.object({
    nombre: Joi.string().min(3).required(),
    apellidos: Joi.string().min(4).required(),
    correo: Joi.string().min(5).email().required(),
    fecha_de_nacimiento: Joi.date().required(),
    telefono: Joi.number().required(),
    contraseña: Joi.string().required(),
    direccion: [
        Joi.array().items(Joi.string().required()).required(),
        Joi.string().required(),
    ],

    role: Joi.string().valid("admin", "client"),
    ID: Joi.string(),
});

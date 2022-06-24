import Joi from "joi";

export const schemaCreateCoupon = Joi.object({
    nombre: Joi.string().required(),
    tipo: Joi.string().valid("Porcentaje", "Monto"),
    valor: Joi.number(),
    cantidad: Joi.number(),
    fecha_de_vencimiento: Joi.date(),
});

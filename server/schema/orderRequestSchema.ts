import Joi from "joi";

export const schemaCreateOrder = Joi.object({
    productos: [Joi.array(), Joi.string()],
});

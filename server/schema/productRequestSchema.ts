import Joi from "joi";

const CATEGORIAS = [
    "Tecnología",
    "Electrohogar",
    "Muebles",
    "Dormitorio",
    "Deportes",
    "Moda Hombre",
    "Moda Mujer",
    "Moda Infantil",
    "Accesorios",
    "Belleza",
    "Juguetería",
    "Bebidas",
    "Comidas",
    "Limpieza",
    "Abarrotes",
];

export const schemaSearchQuery = Joi.object({
    nombre: Joi.string(),
    proveedor: [Joi.array().items(Joi.string()), Joi.string()],
    precio: Joi.string(),
    categoria: Joi.string(),
});

export const schemaCreateProduct = Joi.object({
    nombre_del_producto: Joi.string().required(),
    proveedor: [
        Joi.array().items(Joi.string()).required(),
        Joi.string().required(),
    ],
    precio: Joi.number().required(),
    categoria: Joi.string().required(),
    especificaciones: Joi.string(),
    stock: Joi.number(),
    descripcion_del_producto: Joi.string(),
});

export const schemaUpdateProduct = Joi.object({
    stock: Joi.number().min(0),
    proveedor: [Joi.array().items(Joi.string()), Joi.string()],
    precio: Joi.string(),
    descripcion_del_producto: Joi.string(),
    especificaciones: Joi.string(),
});

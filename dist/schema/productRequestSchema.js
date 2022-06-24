"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaUpdateProduct = exports.schemaCreateProduct = exports.schemaSearchQuery = void 0;
const joi_1 = __importDefault(require("joi"));
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
exports.schemaSearchQuery = joi_1.default.object({
    nombre: joi_1.default.string(),
    proveedor: [joi_1.default.array().items(joi_1.default.string()), joi_1.default.string()],
    precio: joi_1.default.string(),
    categoria: joi_1.default.string(),
});
exports.schemaCreateProduct = joi_1.default.object({
    nombre_del_producto: joi_1.default.string().required(),
    proveedor: [
        joi_1.default.array().items(joi_1.default.string()).required(),
        joi_1.default.string().required(),
    ],
    precio: joi_1.default.number().required(),
    categoria: joi_1.default.string().required(),
    especificaciones: joi_1.default.string(),
    stock: joi_1.default.number(),
    descripcion_del_producto: joi_1.default.string(),
});
exports.schemaUpdateProduct = joi_1.default.object({
    stock: joi_1.default.number().min(0),
    proveedor: [joi_1.default.array().items(joi_1.default.string()), joi_1.default.string()],
    precio: joi_1.default.string(),
    descripcion_del_producto: joi_1.default.string(),
    especificaciones: joi_1.default.string(),
});
//# sourceMappingURL=productRequestSchema.js.map
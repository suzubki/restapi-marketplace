"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    nombre_del_producto: { type: String, required: true },
    proveedor: [{ type: String, required: true }],
    stock: { type: Number, default: 0 },
    precio: { type: Number, required: true },
    categoria: {
        type: String,
        required: true,
        enum: {
            values: [
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
                "Juguetería,",
                "Bebidas",
                "Comidas",
                "Limpieza",
                "Abarrotes",
            ],
            message: "{VALUE} no es una categoría válida",
        },
    },
    especificaciones: { type: String },
    descripcion_del_producto: { type: String },
}, {
    timestamps: true,
});
exports.Product = mongoose_1.default.models.Product || mongoose_1.default.model("Product", productSchema);
//# sourceMappingURL=productModel.js.map
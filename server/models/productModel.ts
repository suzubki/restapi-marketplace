import mongoose, { Model } from "mongoose";
import { IProduct } from "../interfaces";

const productSchema = new mongoose.Schema(
    {
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
    },
    {
        timestamps: true,
    }
);

export const Product: Model<IProduct> =
    mongoose.models.Product || mongoose.model("Product", productSchema);

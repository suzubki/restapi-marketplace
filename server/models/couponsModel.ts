import mongoose, { Model } from "mongoose";
import { ICoupon } from "../interfaces";

const couponsSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            unique: true,
        },
        tipo: {
            type: String,
            required: true,
            enum: {
                values: ["Porcentaje", "Monto"],
                message: "{VALUE} no es un tipo de descuento válido",
            },
        },
        valor: {
            type: Number,
            required: true,
            default: 10,
        },
        cantidad: {
            type: Number,
            default: 10,
        },
        fecha_de_vencimiento: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Coupon: Model<ICoupon> =
    mongoose.models.Coupon || mongoose.model("Coupon", couponsSchema);

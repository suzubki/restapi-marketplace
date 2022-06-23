import mongoose, { Model, Schema } from "mongoose";
import { IOrder } from "../interfaces";

const orderSchema = new mongoose.Schema(
    {
        productos: [
            {
                _id: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                cantidad: {
                    type: Number,
                    required: true,
                },
            },
        ],
        usuario: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        cupon: {
            type: Schema.Types.ObjectId,
            ref: "Coupon",
        },
        total: { type: Number },
    },
    {
        timestamps: true,
    }
);

export const Order: Model<IOrder> =
    mongoose.models.Order || mongoose.model("Order", orderSchema);

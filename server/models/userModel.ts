import mongoose, { Model, Schema } from "mongoose";
import { IUser } from "../interfaces";

const userSchema = new Schema(
    {
        nombre: { type: String, required: true },
        apellidos: { type: String, required: true },
        correo: { type: String, required: true },
        fecha_de_nacimiento: { type: String, required: true },
        telefono: { type: Number, required: true },
        contraseña: { type: String, required: true },
        direccion: [{ type: String, required: true }],

        role: { type: String, default: "client" },
        ID: { type: String },

        // orders
        orders: [
            {
                type: Schema.Types.ObjectId,
                ref: "Order",
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const User: Model<IUser> =
    mongoose.models.User || mongoose.model("User", userSchema);

import mongoose, { Model, Schema } from "mongoose";
import { IAdmin } from "../interfaces";

const adminSchema = new Schema({
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    fecha_de_nacimiento: { type: String, required: true },
    telefono: { type: Number, required: true },
    direccion: [{ type: String, required: true }],
    ID: { type: String, required: true },
});

export const Admin: Model<IAdmin> =
    mongoose.models.Admin || mongoose.model("Admin", adminSchema);

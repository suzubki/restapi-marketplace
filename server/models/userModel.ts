import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    correo: { type: String, required: true },
    fecha_de_nacimiento: { type: String, required: true },
    telefono: { type: Number, required: true },
    contraseña: { type: String, required: true },
    direccion: [{ type: String, required: true }],
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);

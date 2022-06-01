import mongoose, { Schema } from "mongoose";

const model: Schema = new mongoose.Schema({
    edad: Number,
    nombre: String,
    raza: String,
    tipo: String,
});

export const Pet = mongoose.model("Pet", model);

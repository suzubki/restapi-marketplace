"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegisterSchema = exports.userLoginSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userLoginSchema = joi_1.default.object({
    correo: joi_1.default.string().min(5).required(),
    contraseña: joi_1.default.string().min(4).required(),
});
exports.userRegisterSchema = joi_1.default.object({
    nombre: joi_1.default.string().min(3).required(),
    apellidos: joi_1.default.string().min(4).required(),
    correo: joi_1.default.string().min(5).email().required(),
    fecha_de_nacimiento: joi_1.default.date().required(),
    telefono: joi_1.default.number().required(),
    contraseña: joi_1.default.string().required(),
    direccion: [
        joi_1.default.array().items(joi_1.default.string().required()).required(),
        joi_1.default.string().required(),
    ],
    role: joi_1.default.string().valid("admin", "client"),
    ID: joi_1.default.string(),
});
//# sourceMappingURL=userRequestSchema.js.map
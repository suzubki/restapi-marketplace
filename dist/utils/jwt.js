"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (_id, nombre, correo) => {
    if (!process.env.JWT_SECRET_SEED) {
        throw new Error("No hay semilla de JWT");
    }
    return jsonwebtoken_1.default.sign({ _id, nombre, correo }, process.env.JWT_SECRET_SEED, {
        expiresIn: "4h",
    });
};
exports.createToken = createToken;
const isValidToken = (token) => {
    if (!process.env.JWT_SECRET_SEED) {
        throw new Error("No hay semilla de JWT");
    }
    return new Promise((resolve, reject) => {
        try {
            jsonwebtoken_1.default.verify(token, `${process.env.JWT_SECRET_SEED}` || "", (err, payload) => {
                if (err)
                    return reject("JWT no es válido");
                const { _id } = payload;
                resolve(_id);
            });
        }
        catch (error) {
            reject("JWT no es válido");
        }
    });
};
exports.isValidToken = isValidToken;
//# sourceMappingURL=jwt.js.map
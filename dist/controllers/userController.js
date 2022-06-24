"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserHistory = exports.userRegister = exports.userLogin = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const models_1 = require("../models");
const utils_1 = require("../utils");
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { correo, contraseña } = req.body;
        // Verify if email exists on database
        const user = yield models_1.User.findOne({ correo });
        if (!user) {
            return res.status(404).json({
                message: "El correo no existe en la base de datos",
            });
        }
        // // Verify if password is valid
        const passwordIsCorrect = yield bcryptjs_1.default.compare(contraseña, user.contraseña);
        if (passwordIsCorrect === false) {
            return res.status(403).json({
                message: "La contraseña es incorrecta",
            });
        }
        const { _id = "", nombre = "" } = user;
        // Send the token and user info
        const token = utils_1.jwt.createToken(_id, nombre, correo);
        return res.status(200).json({
            user,
            token,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error al ingresar",
            error,
        });
    }
});
exports.userLogin = userLogin;
const userRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { correo, contraseña, nombre } = req.body;
        // Verify if email exists on database
        const oldUser = yield models_1.User.findOne({ correo });
        if (oldUser) {
            return res.status(409).json({
                message: "El correo ya está siendo utilizado",
            });
        }
        // Hash the password and create user on database
        const newUser = yield models_1.User.create(Object.assign(Object.assign({}, req.body), { contraseña: bcryptjs_1.default.hashSync(contraseña) }));
        const { _id = "" } = newUser;
        // Create the token and send it together with the user info
        const token = utils_1.jwt.createToken(_id, nombre, correo);
        return res.status(201).json({
            message: "Usuario creado",
            user: newUser,
            token,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error al crear un usuario",
            error,
        });
    }
});
exports.userRegister = userRegister;
const getUserHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const user = yield models_1.User.findById(userId).populate({
            path: "orders",
            populate: { path: "productos._id cupon" },
        });
        if (!user) {
            return res.status(400).json({
                message: "Error al crear el usuario, asegúrese de que el parámetro sea válido",
            });
        }
        return res.status(200).json({
            message: "Usuario encontrado",
            user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error al obtener el historial del usuario",
            error,
        });
    }
});
exports.getUserHistory = getUserHistory;
//# sourceMappingURL=userController.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUser = exports.isAdmin = exports.verifyToken = void 0;
const models_1 = require("../models");
const utils_1 = require("../utils");
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token = "";
    // Bearer token
    const authHeader = req.headers["authorization"] || "";
    if (authHeader.split(" ")[0] === "Bearer") {
        token = authHeader.split(" ")[1];
    }
    else {
        // If token comes from cookies or body
        token = Object.keys(token).length === 0 && req.cookies;
        token = Object.keys(token).length === 0 && req.body.token;
    }
    if (!token) {
        return res.status(401).json({
            message: "Por favor mande un token válido para realizar la petición",
        });
    }
    // Set userId in params request for the next validation
    const userId = yield utils_1.jwt.isValidToken(token);
    req.params.userId = userId;
    next();
});
exports.verifyToken = verifyToken;
const isAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    // Find by id on database
    const user = yield models_1.User.findById(userId).select("role -_id");
    if (!user) {
        return res.status(409).json({
            message: "El id del usuario no es válido",
        });
    }
    if (user.role === "client") {
        return res.status(401).json({
            message: "El usuario no tiene los permisos suficientes para realizar la petición",
        });
    }
    next();
});
exports.isAdmin = isAdmin;
const isUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    // Find by id on database
    const user = yield models_1.User.findById(userId).select("role -_id");
    if (!user) {
        return res.status(409).json({
            message: "El id del usuario no es válido",
        });
    }
    if (user.role === "admin") {
        return res.status(401).json({
            message: "Los administradores no tienen los permisos suficientes para realizar la petición",
        });
    }
    next();
});
exports.isUser = isUser;
//# sourceMappingURL=authMiddleware.js.map
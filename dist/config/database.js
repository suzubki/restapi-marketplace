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
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const _1 = require("./");
const databaseHandlers = mongoose_1.default.connection;
databaseHandlers.on("connecting", () => {
    console.log("Intentando conectarse a la base de datos");
});
databaseHandlers.on("error", (error) => {
    console.error("⭕ Error en mongodatabaseHandlers" + error);
});
databaseHandlers.on("connected", () => {
    console.log("✅ Conexiíon a la base de datos establecida ");
});
databaseHandlers.on("disconnected", () => {
    console.info("🥐 Se ha desconectado de la base de datos");
});
databaseHandlers.on("reconnected", () => {
    console.log("Reconectado a la base de datos");
});
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(`${_1.config.database.MONGODB_URI}`);
});
exports.db = {
    connect,
};
//# sourceMappingURL=database.js.map
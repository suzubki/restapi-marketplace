"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const envinroment = (_a = process.env.NODE_ENV) === null || _a === void 0 ? void 0 : _a.trim();
dotenv_1.default.config();
if (envinroment === "development") {
    dotenv_1.default.config({
        path: `.env.${envinroment}`,
    });
}
exports.config = {
    serverConfig: {
        PORT: process.env.PORT || 3000,
    },
    database: {
        MONGODB_URI: process.env.MONGODB_URI,
    },
};
//# sourceMappingURL=config.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaCreateOrder = void 0;
const joi_1 = __importDefault(require("joi"));
exports.schemaCreateOrder = joi_1.default.object({
    productos: [joi_1.default.array(), joi_1.default.string()],
});
//# sourceMappingURL=orderRequestSchema.js.map
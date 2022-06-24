"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaCreateCoupon = void 0;
const joi_1 = __importDefault(require("joi"));
exports.schemaCreateCoupon = joi_1.default.object({
    nombre: joi_1.default.string().required(),
    tipo: joi_1.default.string().valid("Porcentaje", "Monto"),
    valor: joi_1.default.number(),
    cantidad: joi_1.default.number(),
    fecha_de_vencimiento: joi_1.default.date(),
});
//# sourceMappingURL=couponRequestSchema.js.map
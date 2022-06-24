"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupon = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const couponsSchema = new mongoose_1.default.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    tipo: {
        type: String,
        required: true,
        enum: {
            values: ["Porcentaje", "Monto"],
            message: "{VALUE} no es un tipo de descuento válido",
        },
    },
    valor: {
        type: Number,
        required: true,
        default: 10,
    },
    cantidad: {
        type: Number,
        default: 10,
    },
    fecha_de_vencimiento: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Coupon = mongoose_1.default.models.Coupon || mongoose_1.default.model("Coupon", couponsSchema);
//# sourceMappingURL=couponsModel.js.map
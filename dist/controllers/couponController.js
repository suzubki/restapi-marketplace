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
exports.createCoupon = exports.isValidCoupon = exports.getAllCoupons = void 0;
const models_1 = require("../models");
const utils_1 = require("../utils");
// Get Method
const getAllCoupons = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCoupons = yield models_1.Coupon.find();
        return res.status(201).json({
            coupons: allCoupons,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Error en el servidor",
        });
    }
});
exports.getAllCoupons = getAllCoupons;
// Get Method by id param
const isValidCoupon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    try {
        const coupon = yield models_1.Coupon.findOne({ nombre });
        if (!coupon) {
            return res.status(404).json({
                message: "El cupón no existe",
                valid: false,
            });
        }
        return res.status(200).json({
            message: "El cupón es válido",
            valid: true,
            coupon,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Error en el servidor",
        });
    }
});
exports.isValidCoupon = isValidCoupon;
// Post Method
const createCoupon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { fecha_de_vencimiento } = req.body;
    if (!fecha_de_vencimiento) {
        req.body.fecha_de_vencimiento = utils_1.date.getDateInSomeDays(20);
    }
    if (utils_1.date.isDateLessThanToday(fecha_de_vencimiento)) {
        return res.status(400).json({
            message: "La fecha de vencimiento del cupón no puede ser menor o igual a la actual",
        });
    }
    try {
        const newCoupon = yield models_1.Coupon.create(Object.assign({}, req.body));
        return res.status(201).json({
            message: "Cupón creado exitosamente",
            coupon: newCoupon,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Error en el servidor",
        });
    }
});
exports.createCoupon = createCoupon;
//# sourceMappingURL=couponController.js.map
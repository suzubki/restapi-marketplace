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
exports.createOrder = exports.getAllOrders = void 0;
const models_1 = require("../models");
// Get Method
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allOrders = yield models_1.Order.find().lean();
        return res
            .status(200)
            .json({ message: "Productos encontrados", orders: allOrders });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error conseguir los productos",
            error,
        });
    }
});
exports.getAllOrders = getAllOrders;
// Post Method
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Validar que el cupón sea válido
    const { cupon, productos } = req.body;
    const subtotal = yield productos.reduce((promise, product) => __awaiter(void 0, void 0, void 0, function* () {
        return promise.then((last) => __awaiter(void 0, void 0, void 0, function* () {
            const productFinded = yield models_1.Product.findById(product._id);
            return last + productFinded.precio;
        }));
    }), Promise.resolve(0));
    // TODO: Verificar si se ha introducido el cupón o no
    const couponFinded = yield models_1.Coupon.findById(cupon);
    // TODO: Redondear el total t-t
    const total = couponFinded.tipo === "Porcentaje"
        ? subtotal * (1 - couponFinded.valor / 100)
        : subtotal - couponFinded.valor;
    try {
        const { userId } = req.params;
        // Create the order and then assign it to user and viceversa
        const order = yield models_1.Order.create(Object.assign(Object.assign({}, req.body), { usuario: userId, total }));
        yield models_1.User.findByIdAndUpdate(userId, {
            $push: {
                orders: order._id,
            },
        });
        return res
            .status(200)
            .json({ message: "Orden creada exitosamente", order });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error conseguir los productos",
            error,
        });
    }
});
exports.createOrder = createOrder;
//# sourceMappingURL=orderController.js.map
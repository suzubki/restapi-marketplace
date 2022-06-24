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
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductByQuery = exports.getAllProducts = void 0;
const models_1 = require("../models");
// GET Method
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield models_1.Product.find().lean();
        return res
            .status(200)
            .json({ message: "Productos encontrados", products });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error conseguir los productos",
            error,
        });
    }
});
exports.getAllProducts = getAllProducts;
// GET Method
const getProductByQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (Object.keys(req.query).length === 0) {
            return res
                .status(400)
                .json({ message: "No se ha recibido ningun parametro" });
        }
        // Filter by nombre, proveedor, disponibilidad(stock), categoria, rango de precio
        const findProductByQuery = Object.assign({}, req.query);
        if (req.query.rango) {
            const rangeOfPrice = req.query.rango.toString().split("-");
            findProductByQuery.precio = {
                $gte: rangeOfPrice[0],
                $lte: rangeOfPrice[1],
            };
        }
        const products = yield models_1.Product.find(findProductByQuery)
            .select("nombre_del_producto proveedor stock precio categoria")
            .lean();
        return res.status(200).json({
            message: "Productos encontrados",
            products,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error al filtrar los productos",
        });
    }
});
exports.getProductByQuery = getProductByQuery;
// POST Method
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = yield models_1.Product.create(req.body);
        return res.status(201).json({
            message: "Producto creado",
            product: newProduct,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error al crear el producto",
        });
    }
});
exports.createProduct = createProduct;
// UPDATE Method
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield models_1.Product.findByIdAndUpdate(id, Object.assign({}, req.body));
        if (!product) {
            return res.status(400).json({
                message: "Producto no encontrado",
            });
        }
        return res.status(201).json({
            message: "Producto actualizado",
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Error en la base de datos",
        });
    }
});
exports.updateProduct = updateProduct;
// DELETE Method
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield models_1.Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(400).json({
                message: "Producto no encontrado",
            });
        }
        return res.status(200).json({
            message: "Producto eliminado",
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Error en la base de datos",
        });
    }
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=productController.js.map
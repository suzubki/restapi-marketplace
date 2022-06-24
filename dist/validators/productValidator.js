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
exports.updateProduct = exports.requestCreateProduct = exports.searchQuery = void 0;
const schema_1 = require("../schema");
const searchQuery = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validated = yield schema_1.productSchema.schemaSearchQuery.validateAsync(req.query);
        req.body = validated;
        next();
    }
    catch (err) {
        return res.status(400).json({
            message: "Envie un formato de petición válido",
            err,
        });
    }
});
exports.searchQuery = searchQuery;
const requestCreateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validated = yield schema_1.productSchema.schemaCreateProduct.validateAsync(req.body);
        req.body = validated;
        next();
    }
    catch (err) {
        return res.status(400).json({
            message: "Envie un formato de petición válido",
            err,
        });
    }
});
exports.requestCreateProduct = requestCreateProduct;
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validated = yield schema_1.productSchema.schemaSearchQuery.validateAsync(req.query);
        req.body = validated;
        next();
    }
    catch (err) {
        return res.status(400).json({
            message: "Envie un formato de petición válido",
            err,
        });
    }
});
exports.updateProduct = updateProduct;
//# sourceMappingURL=productValidator.js.map
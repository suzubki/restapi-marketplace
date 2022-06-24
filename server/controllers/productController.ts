import { Request, Response } from "express";

import { Product } from "../models";
import { IProduct } from "../interfaces";

// GET Method
export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products: IProduct[] = await Product.find().lean();

        return res
            .status(200)
            .json({ message: "Productos encontrados", products });
    } catch (error) {
        return res.status(400).json({
            message: "Error conseguir los productos",
            error,
        });
    }
};

// GET Method
export const getProductByQuery = async (req: Request, res: Response) => {
    try {
        if (Object.keys(req.query).length === 0) {
            return res
                .status(400)
                .json({ message: "No se ha recibido ningun parametro" });
        }

        // Filter by nombre, proveedor, disponibilidad(stock), categoria, rango de precio
        const findProductByQuery = { ...req.query };
        if (req.query.rango) {
            const rangeOfPrice = req.query.rango.toString().split("-");
            findProductByQuery.precio = {
                $gte: rangeOfPrice[0],
                $lte: rangeOfPrice[1],
            };
        }

        const products: IProduct[] = await Product.find(findProductByQuery)
            .select("nombre_del_producto proveedor stock precio categoria")
            .lean();

        return res.status(200).json({
            message: "Productos encontrados",
            products,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al filtrar los productos",
        });
    }
};

// POST Method
export const createProduct = async (req: Request, res: Response) => {
    try {
        const newProduct: IProduct = await Product.create(req.body);

        return res.status(201).json({
            message: "Producto creado",
            product: newProduct,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al crear el producto",
        });
    }
};

// UPDATE Method
export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndUpdate(id, {
            ...req.body,
        });
        if (!product) {
            return res.status(400).json({
                message: "Producto no encontrado",
            });
        }

        return res.status(201).json({
            message: "Producto actualizado",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error en la base de datos",
        });
    }
};

// DELETE Method
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(400).json({
                message: "Producto no encontrado",
            });
        }

        return res.status(200).json({
            message: "Producto eliminado",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error en la base de datos",
        });
    }
};

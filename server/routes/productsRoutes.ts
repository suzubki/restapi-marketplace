import { Request, Response, Router } from "express";
import { IProduct } from "../interfaces";
import { Product } from "../models";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
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
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const newProduct: IProduct = await Product.create(req.body);

        return res.status(201).json({
            message: "Producto creado",
            product: newProduct,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al crear el producto",
            error,
        });
    }
});

router.get("/search", async (req: Request, res: Response) => {
    try {
        if (Object.keys(req.query).length === 0) {
            return res
                .status(400)
                .json({ message: "No se ha recibido ningun parametro" });
        }

        // buscar por nombre, proveedor, disponibilidad(stock), categoria, rango de precio
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

        return res.json({
            message: "Productos encontrados",
            products,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al filtrar los productos",
            error,
        });
    }
});

export { router as productsRoutes };

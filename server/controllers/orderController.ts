import { Request, Response } from "express";

import { Coupon, Order, Product, User } from "../models";
import { IOrder, IProduct, IUser } from "../interfaces";

// Get Method
export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const allOrders: IOrder[] = await Order.find().lean();

        return res
            .status(200)
            .json({ message: "Productos encontrados", orders: allOrders });
    } catch (error) {
        return res.status(400).json({
            message: "Error conseguir los productos",
            error,
        });
    }
};

// Post Method
export const createOrder = async (req: Request, res: Response) => {
    // TODO: Validar que el cupón sea válido

    const { cupon, productos } = req.body as IOrder;

    const subtotal = await productos.reduce(async (promise, product) => {
        return promise.then(async (last) => {
            const productFinded = await Product.findById(product._id);

            return last + productFinded!.precio;
        });
    }, Promise.resolve(0));

    // TODO: Verificar si se ha introducido el cupón o no
    const couponFinded = await Coupon.findById(cupon);

    // TODO: Redondear el total t-t
    const total =
        couponFinded!.tipo === "Porcentaje"
            ? subtotal * (1 - couponFinded!.valor / 100)
            : subtotal - couponFinded!.valor;

    try {
        const { userId } = req.params;

        // Create the order and then assign it to user and viceversa
        const order: IOrder = await Order.create({
            ...req.body,
            usuario: userId,
            total,
        });
        await User.findByIdAndUpdate(userId, {
            $push: {
                orders: order._id,
            },
        });

        return res
            .status(200)
            .json({ message: "Orden creada exitosamente", order });
    } catch (error) {
        return res.status(400).json({
            message: "Error conseguir los productos",
            error,
        });
    }
};

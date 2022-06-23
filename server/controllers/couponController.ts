import { Request, Response } from "express";
import { ICoupon } from "../interfaces";
import { Coupon } from "../models";
import { date } from "../utils";

// Get Method
export const getAllCoupons = async (req: Request, res: Response) => {
    try {
        const allCoupons = await Coupon.find();

        return res.status(201).json({
            coupons: allCoupons,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error en el servidor",
        });
    }
};

// Get Method by id param
export const isValidCoupon = async (req: Request, res: Response) => {
    const { nombre } = req.params;

    try {
        const coupon = await Coupon.findOne({ nombre });
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
    } catch (error) {
        return res.status(500).json({
            message: "Error en el servidor",
        });
    }
};

// Post Method
export const createCoupon = async (req: Request, res: Response) => {
    // TODO: Verificar los campos del cupón
    let { fecha_de_vencimiento } = req.body as ICoupon;
    if (!fecha_de_vencimiento) {
        req.body.fecha_de_vencimiento = date.getDateInSomeDays(20);
    }
    // TODO: Verificar si la fecha es mayor a la actual
    if (date.isDateLessThanToday(fecha_de_vencimiento)) {
        return res.status(400).json({
            message:
                "La fecha de vencimiento del cupón no puede ser menor o igual a la actual",
        });
    }

    try {
        const newCoupon = await Coupon.create({ ...req.body });

        return res.status(201).json({
            message: "Cupón creado exitosamente",
            coupon: newCoupon,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error en el servidor",
        });
    }
};

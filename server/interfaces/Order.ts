import { ICoupon } from "./Coupon";
import { IProduct } from "./Product";
import { IUser } from "./User";

interface OrderProduct extends IProduct {
    cantidadALlevar: number;
}

export interface IOrder {
    productos: OrderProduct[];
    cupon: ICoupon;
    usuario: IUser;
    total: number;

    _id: string;

    // timestamps
    createdAt?: string;
    updatedAt?: string;
}

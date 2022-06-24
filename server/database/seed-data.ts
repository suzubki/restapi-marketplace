import { ICoupon, IProduct, IUser } from "../interfaces";
import bcrypt from "bcryptjs";

interface initialData {
    users: IUser[];
    products: IProduct[];
    coupons: ICoupon[];
}

export const initialData: initialData = {
    users: [
        {
            nombre: "First-Admin",
            apellidos: "First-Admin",
            correo: "First-Admin@Admin.com",
            contraseña: bcrypt.hashSync("Password-Admin"),
            fecha_de_nacimiento: "NacimientoAdmin",
            direccion: "AdminCasa",
            telefono: 123456789,

            ID: "120818",
            role: "admin",
        },
        {
            nombre: "First-User",
            apellidos: "First-User",
            correo: "First-User@User.com",
            fecha_de_nacimiento: "NacimientoUser",
            telefono: 123456789,
            contraseña: bcrypt.hashSync("Password-User"),
            direccion: "UserCasa",

            role: "client",
        },
    ],
    products: [
        {
            nombre_del_producto: "Rimel para las cejas",
            proveedor: ["Makro"],
            stock: 12,
            precio: 85,
            categoria: "Belleza",
            especificaciones: "Producto extraido del catálogo XXXX",
            descripcion_del_producto:
                "Producto para que las cejas luzcan más guay jejej",
        },
        {
            nombre_del_producto: "Rosquitas de anís",
            proveedor: "[Tottus]",
            stock: 20,
            precio: 4,
            categoria: "Comidas",
            descripcion_del_producto: "Galletas con sabor a anís",
            especificaciones: "Producto envasado",
        },
        {
            nombre_del_producto: "Inka Cola 5L",
            proveedor: ["Tottus"],
            stock: 4,
            precio: 24,
            categoria: "Bebidas",
            especificaciones: "Producto envasado",
            descripcion_del_producto: "Gaseosa Inka Cola de tamaño familiar",
        },
        {
            nombre_del_producto: "Inka Cola 1L",
            proveedor: ["Makro"],
            stock: 12,
            precio: 5,
            especificaciones: "Producto envasado",
            categoria: "Bebidas",
            descripcion_del_producto: "Gaseosa Inka Cola de tamaño grande",
        },
    ],
    coupons: [
        {
            nombre: "CUPON1",
            tipo: "Porcentaje",
            valor: 20,
            cantidad: 20,
            fecha_de_vencimiento: "2022-09-01",
        },
        {
            nombre: "CUPON2",
            tipo: "Monto",
            valor: 100,
            cantidad: 10,
            fecha_de_vencimiento: "2022-09-01",
        },
        {
            nombre: "CUPON3",
            tipo: "Porcentaje",
            valor: 8,
            cantidad: 50,
            fecha_de_vencimiento: "2022-09-01",
        },
    ],
};

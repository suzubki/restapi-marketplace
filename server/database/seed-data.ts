import { IProduct, IUser } from "../interfaces";
import bcrypt from "bcryptjs";

interface initialData {
    users: IUser[];
    products: IProduct[];
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
    ],
};

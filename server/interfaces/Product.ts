export interface IProduct {
    nombre_del_producto: string;
    proveedor: string | string[];
    stock: number;
    precio: number;
    categoria: IProductCategory;
    especificaciones: string;
    descripcion_del_producto: string;

    // timestamps
    createdAt: string;
    updatedAt: string;
}

export type IProductCategory =
    | "Tecnología"
    | "Electrohogar"
    | "Muebles"
    | "Dormitorio"
    | "Deportes"
    | "Moda Hombre"
    | "Moda Mujer"
    | "Moda Infantil"
    | "Accesorios"
    | "Belleza"
    | "Juguetería"
    | "Bebidas"
    | "Comidas"
    | "Limpieza"
    | "Abarrotes";

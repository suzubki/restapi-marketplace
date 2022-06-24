export interface ICoupon {
    _id?: string;

    nombre: string;
    tipo: string;
    valor: number;
    cantidad: number;
    fecha_de_vencimiento: string;

    // timestamps
    createdAt?: string;
    updatedAt?: string;
}

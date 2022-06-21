export interface IAdmin {
    _id: string;

    nombre: string;
    apellidos: string;
    fecha_de_nacimiento: string;
    telefono: number;
    direccion: string | string[];

    ID: string;
}

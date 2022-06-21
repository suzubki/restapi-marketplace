export interface IUser {
    _id: string;

    nombre: string;
    apellidos: string;
    correo: string;
    fecha_de_nacimiento: string;
    telefono: number;
    contraseña: string;
    direccion: string | string[];
}

import { Encargado } from './encargados.entity';
export declare class Usuario {
    Id_usuario_pk: number;
    Nombre: string;
    Contrasena: string;
    Token: string;
    Tipo: number;
    Cadena_qr: string;
    Imagen_qr: string;
    Correo: string;
    encargados: Encargado[];
}

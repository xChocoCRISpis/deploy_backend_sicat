import { Participa } from './participa.entity';
export declare class Evento {
    Id_evento_pk: number;
    Nombre: string;
    Lugar: string;
    Fecha: string;
    Hora: string;
    participaciones: Participa[];
}

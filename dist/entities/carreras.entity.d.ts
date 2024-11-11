import { Alumno } from './alumnos.entity';
export declare class Carrera {
    Id_carrera_pk: number;
    Nombre: string;
    Clave: string;
    Nombre_corto: string;
    alumnos: Alumno[];
}

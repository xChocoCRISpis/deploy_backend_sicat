import { Actividad } from './actividades.entity';
import { Alumno } from './alumnos.entity';
export declare class Pertenece {
    Id_pertenece_pk: number;
    Horas: number;
    Activo: boolean;
    actividad: Actividad;
    alumno: Alumno;
}

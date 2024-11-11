import { Carrera } from './carreras.entity';
import { Participa } from './participa.entity';
import { Pertenece } from './pertenece.entity';
export declare class Alumno {
    Id_alumno_pk: number;
    Num_control: string;
    Nombre: string;
    Ap_paterno: string;
    Ap_materno: string;
    Sexo: string;
    Fecha_nac: string;
    Semestre: number;
    Nivel: number;
    Foto: string;
    Telefono: string;
    Correo: string;
    carrera: Carrera;
    participaciones: Participa[];
    pertenencias: Pertenece[];
}

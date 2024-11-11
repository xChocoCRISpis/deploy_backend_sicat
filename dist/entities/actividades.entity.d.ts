import { Pertenece } from './pertenece.entity';
import { EncargadoDetalle } from './encargados_detalle.entity';
export declare class Actividad {
    Id_actividad_pk: number;
    Nombre: string;
    Tipo: string;
    pertenencias: Pertenece[];
    detalles: EncargadoDetalle[];
}

import { EncargadoDetalle } from './encargados_detalle.entity';
export declare class Horario {
    Id_horario_pk: number;
    Dia: string;
    Hora_inicio: string;
    Hora_fin: string;
    detalles: EncargadoDetalle[];
}

import { Encargado } from './encargados.entity';
import { Horario } from './horarios.entity';
import { Actividad } from './actividades.entity';
export declare class EncargadoDetalle {
    Id_encargado_fk: number;
    Id_horario_fk: number;
    Id_actividad_fk: number;
    encargado: Encargado;
    horario: Horario;
    actividad: Actividad;
}

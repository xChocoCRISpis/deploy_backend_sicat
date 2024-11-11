import { Usuario } from './usuarios.entity';
import { EncargadoDetalle } from './encargados_detalle.entity';
export declare class Encargado {
    Id_encargado_pk: number;
    Nombre: string;
    Ap_paterno: string;
    Ap_materno: string;
    usuario: Usuario;
    detalles: EncargadoDetalle[];
}

export declare class CreateBitacoraDto {
    id_usuario: number;
    bitacora_detalle: BitacoraDetallesDto[];
}
export declare class BitacoraDetallesDto {
    fecha: Date;
    hora: string;
    accion: string;
}

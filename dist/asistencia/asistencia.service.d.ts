import { AsistenciaDetallesDto } from './dto/create-asistencia.dto';
import { DetallesAsistencia } from 'src/schemas/asistencia/detalles-asistencia.schema';
import { Asistencia } from 'src/schemas/asistencia/asistencia.schema';
import { Model } from 'mongoose';
export declare class AsistenciaService {
    private readonly asistenciaModel;
    private readonly asistenciaDetallesModel;
    constructor(asistenciaModel: Model<Asistencia>, asistenciaDetallesModel: Model<DetallesAsistencia>);
    crearAsistencia(id_pertenece: number, id_encargado: number, detallesAsistenciaDto: AsistenciaDetallesDto): Promise<import("mongoose").Document<unknown, {}, Asistencia> & Asistencia & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    traerTodasEncargado(id_encargado: number): Promise<(import("mongoose").Document<unknown, {}, Asistencia> & Asistencia & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    traerTodasAlumno(id_pertenece: number): Promise<(import("mongoose").Document<unknown, {}, Asistencia> & Asistencia & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    actualizarPorEncargado(id_encargado: number, fecha: Date, horas: number): Promise<import("mongoose").Document<unknown, {}, Asistencia> & Asistencia & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    eliminarPorEncargado(id_encargado: number): Promise<{
        message: string;
    }>;
    obtenerHorasPorIdPertenece(id_pertenece: number): Promise<{
        totalHoras: any;
    }>;
}

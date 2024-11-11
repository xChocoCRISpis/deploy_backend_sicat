import { AsistenciaService } from './asistencia.service';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { Request } from 'express';
export declare class AsistenciaController {
    private readonly asistenciaService;
    constructor(asistenciaService: AsistenciaService);
    crearAsistencia(createAsistenciaDto: CreateAsistenciaDto, req: Request): Promise<import("mongoose").Document<unknown, {}, import("../schemas/asistencia/asistencia.schema").Asistencia> & import("../schemas/asistencia/asistencia.schema").Asistencia & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    traerTodas(req: Request, id_pertenece?: string): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/asistencia/asistencia.schema").Asistencia> & import("../schemas/asistencia/asistencia.schema").Asistencia & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    actualizarPorEncargado(req: Request, updateAsistenciaDto: UpdateAsistenciaDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/asistencia/asistencia.schema").Asistencia> & import("../schemas/asistencia/asistencia.schema").Asistencia & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    eliminarPorEncargado(req: Request): Promise<{
        message: string;
    }>;
    obtenerHoras(req: Request, id_pertenece: number): Promise<{
        totalHoras: any;
    }>;
}

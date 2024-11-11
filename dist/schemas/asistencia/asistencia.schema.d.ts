import { Document } from 'mongoose';
import { DetallesAsistencia } from './detalles-asistencia.schema';
export declare class Asistencia extends Document {
    id_pertenece: number;
    asistencia_detalle: DetallesAsistencia[];
}
export declare const AsistenciaSchema: import("mongoose").Schema<Asistencia, import("mongoose").Model<Asistencia, any, any, any, Document<unknown, any, Asistencia> & Asistencia & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Asistencia, Document<unknown, {}, import("mongoose").FlatRecord<Asistencia>> & import("mongoose").FlatRecord<Asistencia> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;

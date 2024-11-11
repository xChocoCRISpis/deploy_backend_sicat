import { Document } from 'mongoose';
export declare class DetallesAsistencia extends Document {
    id_encargado: number;
    fecha: Date;
    horas: number;
}
export declare const DetallesAsistenciaSchema: import("mongoose").Schema<DetallesAsistencia, import("mongoose").Model<DetallesAsistencia, any, any, any, Document<unknown, any, DetallesAsistencia> & DetallesAsistencia & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DetallesAsistencia, Document<unknown, {}, import("mongoose").FlatRecord<DetallesAsistencia>> & import("mongoose").FlatRecord<DetallesAsistencia> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;

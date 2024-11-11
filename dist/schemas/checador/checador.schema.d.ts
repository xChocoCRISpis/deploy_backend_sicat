import { Document } from 'mongoose';
import { ChecadorDetalles } from './checador-detalles.schema';
export declare class Checador extends Document {
    id_encargado: number;
    checador_detalle: ChecadorDetalles[];
}
export declare const ChecadorSchema: import("mongoose").Schema<Checador, import("mongoose").Model<Checador, any, any, any, Document<unknown, any, Checador> & Checador & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Checador, Document<unknown, {}, import("mongoose").FlatRecord<Checador>> & import("mongoose").FlatRecord<Checador> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;

import { Document } from 'mongoose';
import { BitacoraDetalles } from './bitacora-detalles.schema';
export declare class Bitacora extends Document {
    id_usuario: number;
    bitacora_detalle: BitacoraDetalles[];
}
export declare const BitacoraSchema: import("mongoose").Schema<Bitacora, import("mongoose").Model<Bitacora, any, any, any, Document<unknown, any, Bitacora> & Bitacora & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Bitacora, Document<unknown, {}, import("mongoose").FlatRecord<Bitacora>> & import("mongoose").FlatRecord<Bitacora> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;

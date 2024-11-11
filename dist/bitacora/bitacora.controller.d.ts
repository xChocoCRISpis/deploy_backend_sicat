import { BitacoraService } from './bitacora.service';
import { CreateBitacoraDto } from './dto/create-bitacora.dto';
import { UpdateBitacoraDto } from './dto/update-bitacora.dto';
export declare class BitacoraController {
    private readonly bitacoraService;
    constructor(bitacoraService: BitacoraService);
    create(createBitacoraDto: CreateBitacoraDto): Promise<{
        success: boolean;
        message: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/bitacora/bitacora.schema").Bitacora> & import("../schemas/bitacora/bitacora.schema").Bitacora & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/bitacora/bitacora.schema").Bitacora> & import("../schemas/bitacora/bitacora.schema").Bitacora & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    update(id: string, updateBitacoraDto: UpdateBitacoraDto): string;
    remove(id: string): string;
}

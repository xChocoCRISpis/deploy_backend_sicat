import { CreateBitacoraDto } from './dto/create-bitacora.dto';
import { UpdateBitacoraDto } from './dto/update-bitacora.dto';
import { Usuario } from 'src/entities/usuarios.entity';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { Bitacora } from 'src/schemas/bitacora/bitacora.schema';
export declare class BitacoraService {
    private readonly bitacoraModel;
    private readonly usuariosRepository;
    constructor(bitacoraModel: Model<Bitacora>, usuariosRepository: Repository<Usuario>);
    create(createBitacoraDto: CreateBitacoraDto): Promise<{
        success: boolean;
        message: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Bitacora> & Bitacora & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: number): Promise<(import("mongoose").Document<unknown, {}, Bitacora> & Bitacora & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    update(id: number, updateBitacoraDto: UpdateBitacoraDto): string;
    remove(id: number): string;
}

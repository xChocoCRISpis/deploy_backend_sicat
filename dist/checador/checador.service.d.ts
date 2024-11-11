import { CreateChecadorDto } from './dto/create-checador.dto';
import { UpdateChecadorDto } from './dto/update-checador.dto';
import { Checador } from 'src/schemas/checador/checador.schema';
import { Model } from 'mongoose';
export declare class ChecadorService {
    private readonly bitacoraModel;
    constructor(bitacoraModel: Model<Checador>);
    create(createChecadorDto: CreateChecadorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChecadorDto: UpdateChecadorDto): string;
    remove(id: number): string;
}

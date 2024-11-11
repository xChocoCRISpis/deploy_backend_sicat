import { ChecadorService } from './checador.service';
import { CreateChecadorDto } from './dto/create-checador.dto';
import { UpdateChecadorDto } from './dto/update-checador.dto';
export declare class ChecadorController {
    private readonly checadorService;
    constructor(checadorService: ChecadorService);
    create(createChecadorDto: CreateChecadorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateChecadorDto: UpdateChecadorDto): string;
    remove(id: string): string;
}

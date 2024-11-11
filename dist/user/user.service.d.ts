import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { Encargado } from 'src/entities/encargados.entity';
import { EncargadoDetalle } from 'src/entities/encargados_detalle.entity';
import { Horario } from 'src/entities/horarios.entity';
import { Actividad } from 'src/entities/actividades.entity';
export declare class UserService {
    private readonly encargadoRepo;
    private readonly encargadoDetalleRepo;
    private readonly horarioRepo;
    private readonly actividadRepo;
    constructor(encargadoRepo: Repository<Encargado>, encargadoDetalleRepo: Repository<EncargadoDetalle>, horarioRepo: Repository<Horario>, actividadRepo: Repository<Actividad>);
    profile(id_usuario: number, year?: string, semestre?: string): Promise<any>;
    horarios(id_encargado: number, ano?: string, semestre?: string): Promise<any>;
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}

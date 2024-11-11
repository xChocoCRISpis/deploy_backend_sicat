import { CreateActividadeDto } from './dto/create-actividade.dto';
import { UpdateActividadeDto } from './dto/update-actividade.dto';
import { Repository } from 'typeorm';
import { Usuario } from 'src/entities/usuarios.entity';
import { Encargado } from 'src/entities/encargados.entity';
import { EncargadoDetalle } from 'src/entities/encargados_detalle.entity';
import { Actividad } from 'src/entities/actividades.entity';
export declare class ActividadesService {
    private readonly usuarioRepo;
    private readonly encargadoRepo;
    private readonly encargadoDetalleRepo;
    private readonly actividadRepo;
    constructor(usuarioRepo: Repository<Usuario>, encargadoRepo: Repository<Encargado>, encargadoDetalleRepo: Repository<EncargadoDetalle>, actividadRepo: Repository<Actividad>);
    create(createActividadeDto: CreateActividadeDto): string;
    findAll(Id_usuario: number): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateActividadeDto: UpdateActividadeDto): string;
    remove(id: number): string;
}

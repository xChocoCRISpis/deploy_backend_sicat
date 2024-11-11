import { ActividadesService } from './actividades.service';
import { CreateActividadeDto } from './dto/create-actividade.dto';
import { UpdateActividadeDto } from './dto/update-actividade.dto';
export declare class ActividadesController {
    private readonly actividadesService;
    constructor(actividadesService: ActividadesService);
    create(createActividadeDto: CreateActividadeDto): string;
    findAll(req: Request): Promise<any>;
    findOne(id: string): string;
    update(id: string, updateActividadeDto: UpdateActividadeDto): string;
    remove(id: string): string;
}

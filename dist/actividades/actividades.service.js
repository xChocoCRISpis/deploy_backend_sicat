"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActividadesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const usuarios_entity_1 = require("../entities/usuarios.entity");
const encargados_entity_1 = require("../entities/encargados.entity");
const encargados_detalle_entity_1 = require("../entities/encargados_detalle.entity");
const actividades_entity_1 = require("../entities/actividades.entity");
const typeorm_2 = require("@nestjs/typeorm");
let ActividadesService = class ActividadesService {
    constructor(usuarioRepo, encargadoRepo, encargadoDetalleRepo, actividadRepo) {
        this.usuarioRepo = usuarioRepo;
        this.encargadoRepo = encargadoRepo;
        this.encargadoDetalleRepo = encargadoDetalleRepo;
        this.actividadRepo = actividadRepo;
    }
    create(createActividadeDto) {
        return 'This action adds a new actividade';
    }
    async findAll(Id_usuario) {
        const result = await this.actividadRepo
            .createQueryBuilder('a')
            .select(['a.Id_actividad_pk', 'a.Nombre', 'a.Tipo'])
            .innerJoin('a.detalles', 'ed')
            .innerJoin('ed.encargado', 'e')
            .where('e.id_usuarios_fk = :Id_usuario', { Id_usuario })
            .getMany();
        if (result.length === 0)
            throw new common_1.NotFoundException('El usuario no tiene actividades asignadas');
        return result;
    }
    findOne(id) {
        return `This action returns a #${id} actividade`;
    }
    update(id, updateActividadeDto) {
        return `This action updates a #${id} actividade`;
    }
    remove(id) {
        return `This action removes a #${id} actividade`;
    }
};
exports.ActividadesService = ActividadesService;
exports.ActividadesService = ActividadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(usuarios_entity_1.Usuario)),
    __param(1, (0, typeorm_2.InjectRepository)(encargados_entity_1.Encargado)),
    __param(2, (0, typeorm_2.InjectRepository)(encargados_detalle_entity_1.EncargadoDetalle)),
    __param(3, (0, typeorm_2.InjectRepository)(actividades_entity_1.Actividad)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], ActividadesService);
//# sourceMappingURL=actividades.service.js.map
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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const encargados_entity_1 = require("../entities/encargados.entity");
const encargados_detalle_entity_1 = require("../entities/encargados_detalle.entity");
const horarios_entity_1 = require("../entities/horarios.entity");
const actividades_entity_1 = require("../entities/actividades.entity");
let UserService = class UserService {
    constructor(encargadoRepo, encargadoDetalleRepo, horarioRepo, actividadRepo) {
        this.encargadoRepo = encargadoRepo;
        this.encargadoDetalleRepo = encargadoDetalleRepo;
        this.horarioRepo = horarioRepo;
        this.actividadRepo = actividadRepo;
    }
    async profile(id_usuario, year, semestre) {
        if (!id_usuario) {
            throw new common_1.BadRequestException('ID de usuario no proporcionado.');
        }
        const encargado = await this.encargadoRepo
            .createQueryBuilder('e')
            .select([
            'e.Nombre as nombre',
            'e.Ap_paterno as ap_paterno',
            'e.Ap_materno as ap_materno',
            'e.Id_encargado_pk as id_encargado_pk'
        ])
            .where('e.Id_usuarios_fk = :id_usuario', { id_usuario })
            .getRawOne();
        console.log(encargado);
        if (!encargado) {
            throw new common_1.NotFoundException(`Encargado no encontrado para el usuario con ID ${id_usuario}.`);
        }
        const { id_encargado_pk: id_encargado } = encargado;
        const horario = await this.horarios(id_encargado, year, semestre);
        if (horario.length === 0) {
            throw new common_1.NotFoundException(`No se encontraron horarios para el encargado con ID ${id_encargado}.`);
        }
        const usuario = { encargado: { ...encargado }, horarios: horario };
        return usuario;
    }
    async horarios(id_encargado, ano, semestre) {
        if (!id_encargado) {
            throw new common_1.BadRequestException('ID de encargado no proporcionado.');
        }
        let horario = await this.encargadoDetalleRepo
            .createQueryBuilder('ed')
            .select([
            'h.Id_horario_pk as id_horario',
            'h.Dia as dia',
            'h.Hora_inicio as hora_inicio',
            'h.Hora_fin as hora_fin',
            'a.Id_actividad_pk as id_actividad',
            'a.Nombre as nombre',
            'a.Tipo as tipo',
        ])
            .innerJoin('ed.horario', 'h')
            .innerJoin('ed.actividad', 'a')
            .where('ed.id_encargado_fk = :id_encargado', { id_encargado })
            .getRawMany();
        horario = horario.map(item => {
            const [dia_semana, ano, semestre] = item.dia.split('-');
            let semestreName = '';
            if (semestre === 'AD') {
                semestreName = 'Agosto-Diciembre';
            }
            else if (semestre === 'EJ') {
                semestreName = 'Enero-Junio';
            }
            delete item.dia;
            return {
                ...item,
                dia_semana,
                ano,
                semestre: semestreName,
            };
        });
        if (ano) {
            horario = horario.filter(item => item.ano === ano);
        }
        if (semestre) {
            const semestreName = semestre === 'AD' ? 'Agosto-Diciembre' : semestre === 'EJ' ? 'Enero-Junio' : '';
            horario = horario.filter(item => item.semestre === semestreName);
        }
        return horario;
    }
    create(createUserDto) {
        return 'This action adds a new user';
    }
    findAll() {
        return `This action returns all user`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(encargados_entity_1.Encargado)),
    __param(1, (0, typeorm_1.InjectRepository)(encargados_detalle_entity_1.EncargadoDetalle)),
    __param(2, (0, typeorm_1.InjectRepository)(horarios_entity_1.Horario)),
    __param(3, (0, typeorm_1.InjectRepository)(actividades_entity_1.Actividad)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map
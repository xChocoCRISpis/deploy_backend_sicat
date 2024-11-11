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
exports.AsistenciaController = void 0;
const common_1 = require("@nestjs/common");
const asistencia_service_1 = require("./asistencia.service");
const create_asistencia_dto_1 = require("./dto/create-asistencia.dto");
const update_asistencia_dto_1 = require("./dto/update-asistencia.dto");
let AsistenciaController = class AsistenciaController {
    constructor(asistenciaService) {
        this.asistenciaService = asistenciaService;
    }
    async crearAsistencia(createAsistenciaDto, req) {
        const usuario = req['Usuario'];
        const { asistencia } = createAsistenciaDto;
        const crearAsistencia = await this.asistenciaService.crearAsistencia(createAsistenciaDto.id_pertenece, usuario.Id_usuario_pk, asistencia[0]);
        req['logMessage'] = `Registro asistencia en la fecha ${asistencia[0].fecha} con ${asistencia[0].horas} horas para el alumno ${createAsistenciaDto.id_pertenece}`;
        console.log(crearAsistencia);
        return crearAsistencia;
    }
    async traerTodas(req, id_pertenece) {
        let asistencias = await this.asistenciaService.traerTodasEncargado(req['Usuario'].Id_usuario_pk);
        if (id_pertenece) {
            const idPerteneceNum = parseInt(id_pertenece, 10);
            if (isNaN(idPerteneceNum)) {
                throw new common_1.BadRequestException('El parámetro "alumno" debe ser un número');
            }
            return asistencias.filter((asistencia) => { return asistencia.id_pertenece === idPerteneceNum; });
        }
        return asistencias;
    }
    async actualizarPorEncargado(req, updateAsistenciaDto) {
        const { fecha, horas } = updateAsistenciaDto;
        return this.asistenciaService.actualizarPorEncargado(req['Usuario'].Id_usuario_pk, fecha, horas);
    }
    async eliminarPorEncargado(req) {
        return this.asistenciaService.eliminarPorEncargado(req['Usuario'].Id_usuario_pk);
    }
    async obtenerHoras(req, id_pertenece) {
        console.log(id_pertenece);
        return this.asistenciaService.obtenerHorasPorIdPertenece(id_pertenece);
    }
};
exports.AsistenciaController = AsistenciaController;
__decorate([
    (0, common_1.Post)('crear'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_asistencia_dto_1.CreateAsistenciaDto, Object]),
    __metadata("design:returntype", Promise)
], AsistenciaController.prototype, "crearAsistencia", null);
__decorate([
    (0, common_1.Get)('traer'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('alumno')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AsistenciaController.prototype, "traerTodas", null);
__decorate([
    (0, common_1.Put)('actualizar'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_asistencia_dto_1.UpdateAsistenciaDto]),
    __metadata("design:returntype", Promise)
], AsistenciaController.prototype, "actualizarPorEncargado", null);
__decorate([
    (0, common_1.Delete)('eliminar'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AsistenciaController.prototype, "eliminarPorEncargado", null);
__decorate([
    (0, common_1.Get)('horas'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('alumno', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], AsistenciaController.prototype, "obtenerHoras", null);
exports.AsistenciaController = AsistenciaController = __decorate([
    (0, common_1.Controller)('asistencia'),
    __metadata("design:paramtypes", [asistencia_service_1.AsistenciaService])
], AsistenciaController);
//# sourceMappingURL=asistencia.controller.js.map
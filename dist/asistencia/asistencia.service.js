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
exports.AsistenciaService = void 0;
const common_1 = require("@nestjs/common");
const asistencia_schema_1 = require("../schemas/asistencia/asistencia.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let AsistenciaService = class AsistenciaService {
    constructor(asistenciaModel, asistenciaDetallesModel) {
        this.asistenciaModel = asistenciaModel;
        this.asistenciaDetallesModel = asistenciaDetallesModel;
    }
    async crearAsistencia(id_pertenece, id_encargado, detallesAsistenciaDto) {
        if (!id_pertenece) {
            throw new Error('El campo id_pertenece es obligatorio');
        }
        const { horas, fecha } = detallesAsistenciaDto;
        try {
            return await this.asistenciaModel.findOneAndUpdate({ id_pertenece }, { $push: { asistencia_detalle: { id_encargado, fecha, horas } } }, { upsert: true, new: true });
        }
        catch (error) {
            if (error.name === 'ValidationError') {
                console.error('Error de validación:', error.message);
                throw new Error('Error de validación al guardar la asistencia');
            }
            throw error;
        }
    }
    async traerTodasEncargado(id_encargado) {
        console.log(id_encargado);
        return await this.asistenciaModel.find({ 'asistencia_detalle.id_encargado': id_encargado });
    }
    async traerTodasAlumno(id_pertenece) {
        return await this.asistenciaModel.find({ id_pertenece });
    }
    async actualizarPorEncargado(id_encargado, fecha, horas) {
        const asistencia = await this.asistenciaModel.findOneAndUpdate({ 'asistencia.id_encargado': id_encargado, 'asistencia.fecha': fecha }, { $set: { 'asistencia.$.horas': horas } }, { new: true });
        if (!asistencia)
            throw new Error('No se encontró la asistencia');
        return asistencia;
    }
    async eliminarPorEncargado(id_encargado) {
        const asistencia = await this.asistenciaModel.findOneAndUpdate({ 'asistencia.id_encargado': id_encargado }, { $pull: { asistencia: { id_encargado } } }, { new: true });
        if (!asistencia)
            throw new Error('No se encontró la asistencia');
        return { message: 'Asistencia eliminada' };
    }
    async obtenerHorasPorIdPertenece(id_pertenece) {
        const result = await this.asistenciaModel.aggregate([
            { $match: { id_pertenece: id_pertenece } },
            { $unwind: '$asistencia_detalle' },
            {
                $group: {
                    _id: '$id_pertenece',
                    totalHoras: { $sum: '$asistencia_detalle.horas' },
                },
            },
        ]);
        return result.length > 0 ? { totalHoras: result[0].totalHoras } : { totalHoras: 0 };
    }
};
exports.AsistenciaService = AsistenciaService;
exports.AsistenciaService = AsistenciaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(asistencia_schema_1.Asistencia.name, 'sicat_nest')),
    __param(1, (0, mongoose_2.InjectModel)(asistencia_schema_1.Asistencia.name, 'sicat_nest')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], AsistenciaService);
//# sourceMappingURL=asistencia.service.js.map
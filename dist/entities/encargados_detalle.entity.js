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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncargadoDetalle = void 0;
const typeorm_1 = require("typeorm");
const encargados_entity_1 = require("./encargados.entity");
const horarios_entity_1 = require("./horarios.entity");
const actividades_entity_1 = require("./actividades.entity");
let EncargadoDetalle = class EncargadoDetalle {
};
exports.EncargadoDetalle = EncargadoDetalle;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'Id_encargado_fk', type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], EncargadoDetalle.prototype, "Id_encargado_fk", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'Id_horario_fk', type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], EncargadoDetalle.prototype, "Id_horario_fk", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'Id_actividad_fk', type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], EncargadoDetalle.prototype, "Id_actividad_fk", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => encargados_entity_1.Encargado, encargado => encargado.detalles),
    (0, typeorm_1.JoinColumn)({ name: 'Id_encargado_fk' }),
    __metadata("design:type", encargados_entity_1.Encargado)
], EncargadoDetalle.prototype, "encargado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => horarios_entity_1.Horario, horario => horario.detalles),
    (0, typeorm_1.JoinColumn)({ name: 'Id_horario_fk' }),
    __metadata("design:type", horarios_entity_1.Horario)
], EncargadoDetalle.prototype, "horario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => actividades_entity_1.Actividad, actividad => actividad.detalles),
    (0, typeorm_1.JoinColumn)({ name: 'Id_actividad_fk' }),
    __metadata("design:type", actividades_entity_1.Actividad)
], EncargadoDetalle.prototype, "actividad", void 0);
exports.EncargadoDetalle = EncargadoDetalle = __decorate([
    (0, typeorm_1.Entity)('tb_encargados_detalle')
], EncargadoDetalle);
//# sourceMappingURL=encargados_detalle.entity.js.map
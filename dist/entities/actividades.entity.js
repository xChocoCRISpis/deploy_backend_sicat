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
exports.Actividad = void 0;
const typeorm_1 = require("typeorm");
const pertenece_entity_1 = require("./pertenece.entity");
const encargados_detalle_entity_1 = require("./encargados_detalle.entity");
let Actividad = class Actividad {
};
exports.Actividad = Actividad;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], Actividad.prototype, "Id_actividad_pk", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], Actividad.prototype, "Nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 3 }),
    __metadata("design:type", String)
], Actividad.prototype, "Tipo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pertenece_entity_1.Pertenece, pertenece => pertenece.actividad),
    __metadata("design:type", Array)
], Actividad.prototype, "pertenencias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => encargados_detalle_entity_1.EncargadoDetalle, detalle => detalle.actividad),
    __metadata("design:type", Array)
], Actividad.prototype, "detalles", void 0);
exports.Actividad = Actividad = __decorate([
    (0, typeorm_1.Entity)('tb_actividades')
], Actividad);
//# sourceMappingURL=actividades.entity.js.map
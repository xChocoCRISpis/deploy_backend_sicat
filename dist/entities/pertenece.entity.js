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
exports.Pertenece = void 0;
const typeorm_1 = require("typeorm");
const actividades_entity_1 = require("./actividades.entity");
const alumnos_entity_1 = require("./alumnos.entity");
let Pertenece = class Pertenece {
};
exports.Pertenece = Pertenece;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], Pertenece.prototype, "Id_pertenece_pk", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Pertenece.prototype, "Horas", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Boolean)
], Pertenece.prototype, "Activo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => actividades_entity_1.Actividad, actividad => actividad.pertenencias),
    (0, typeorm_1.JoinColumn)({ name: 'Id_actividad_fk' }),
    __metadata("design:type", actividades_entity_1.Actividad)
], Pertenece.prototype, "actividad", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => alumnos_entity_1.Alumno, alumno => alumno.pertenencias),
    (0, typeorm_1.JoinColumn)({ name: 'Id_alumnos_fk' }),
    __metadata("design:type", alumnos_entity_1.Alumno)
], Pertenece.prototype, "alumno", void 0);
exports.Pertenece = Pertenece = __decorate([
    (0, typeorm_1.Entity)('tb_pertenece')
], Pertenece);
//# sourceMappingURL=pertenece.entity.js.map
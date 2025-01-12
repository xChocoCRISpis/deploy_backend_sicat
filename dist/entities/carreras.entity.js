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
exports.Carrera = void 0;
const typeorm_1 = require("typeorm");
const alumnos_entity_1 = require("./alumnos.entity");
let Carrera = class Carrera {
};
exports.Carrera = Carrera;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], Carrera.prototype, "Id_carrera_pk", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], Carrera.prototype, "Nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 20 }),
    __metadata("design:type", String)
], Carrera.prototype, "Clave", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 10 }),
    __metadata("design:type", String)
], Carrera.prototype, "Nombre_corto", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => alumnos_entity_1.Alumno, alumno => alumno.carrera),
    __metadata("design:type", Array)
], Carrera.prototype, "alumnos", void 0);
exports.Carrera = Carrera = __decorate([
    (0, typeorm_1.Entity)('tb_carreras')
], Carrera);
//# sourceMappingURL=carreras.entity.js.map
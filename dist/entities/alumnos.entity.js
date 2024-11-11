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
exports.Alumno = void 0;
const typeorm_1 = require("typeorm");
const carreras_entity_1 = require("./carreras.entity");
const participa_entity_1 = require("./participa.entity");
const pertenece_entity_1 = require("./pertenece.entity");
let Alumno = class Alumno {
};
exports.Alumno = Alumno;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], Alumno.prototype, "Id_alumno_pk", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 10 }),
    __metadata("design:type", String)
], Alumno.prototype, "Num_control", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Alumno.prototype, "Nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Alumno.prototype, "Ap_paterno", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Alumno.prototype, "Ap_materno", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 1 }),
    __metadata("design:type", String)
], Alumno.prototype, "Sexo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Alumno.prototype, "Fecha_nac", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Alumno.prototype, "Semestre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Alumno.prototype, "Nivel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Alumno.prototype, "Foto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 12 }),
    __metadata("design:type", String)
], Alumno.prototype, "Telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Alumno.prototype, "Correo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carreras_entity_1.Carrera, carrera => carrera.alumnos),
    (0, typeorm_1.JoinColumn)({ name: 'Id_carreras_fk' }),
    __metadata("design:type", carreras_entity_1.Carrera)
], Alumno.prototype, "carrera", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => participa_entity_1.Participa, participa => participa.alumno),
    __metadata("design:type", Array)
], Alumno.prototype, "participaciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pertenece_entity_1.Pertenece, pertenece => pertenece.alumno),
    __metadata("design:type", Array)
], Alumno.prototype, "pertenencias", void 0);
exports.Alumno = Alumno = __decorate([
    (0, typeorm_1.Entity)('tb_alumnos')
], Alumno);
//# sourceMappingURL=alumnos.entity.js.map
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
exports.Participa = void 0;
const typeorm_1 = require("typeorm");
const alumnos_entity_1 = require("./alumnos.entity");
const eventos_entity_1 = require("./eventos.entity");
let Participa = class Participa {
};
exports.Participa = Participa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], Participa.prototype, "Id_participa_pk", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => alumnos_entity_1.Alumno, alumno => alumno.participaciones),
    (0, typeorm_1.JoinColumn)({ name: 'Id_alumno_fk' }),
    __metadata("design:type", alumnos_entity_1.Alumno)
], Participa.prototype, "alumno", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => eventos_entity_1.Evento, evento => evento.participaciones),
    (0, typeorm_1.JoinColumn)({ name: 'Id_evento_fk' }),
    __metadata("design:type", eventos_entity_1.Evento)
], Participa.prototype, "evento", void 0);
exports.Participa = Participa = __decorate([
    (0, typeorm_1.Entity)('tb_participa')
], Participa);
//# sourceMappingURL=participa.entity.js.map
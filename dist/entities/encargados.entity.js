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
exports.Encargado = void 0;
const typeorm_1 = require("typeorm");
const usuarios_entity_1 = require("./usuarios.entity");
const encargados_detalle_entity_1 = require("./encargados_detalle.entity");
let Encargado = class Encargado {
};
exports.Encargado = Encargado;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], Encargado.prototype, "Id_encargado_pk", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Encargado.prototype, "Nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Encargado.prototype, "Ap_paterno", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Encargado.prototype, "Ap_materno", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuarios_entity_1.Usuario, usuario => usuario.encargados),
    (0, typeorm_1.JoinColumn)({ name: 'Id_usuarios_fk' }),
    __metadata("design:type", usuarios_entity_1.Usuario)
], Encargado.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => encargados_detalle_entity_1.EncargadoDetalle, detalle => detalle.encargado),
    (0, typeorm_1.JoinColumn)({ name: 'Id_encargado_fk' }),
    __metadata("design:type", Array)
], Encargado.prototype, "detalles", void 0);
exports.Encargado = Encargado = __decorate([
    (0, typeorm_1.Entity)('tb_encargados')
], Encargado);
//# sourceMappingURL=encargados.entity.js.map
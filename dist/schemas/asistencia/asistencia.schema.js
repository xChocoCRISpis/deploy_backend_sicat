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
exports.AsistenciaSchema = exports.Asistencia = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const detalles_asistencia_schema_1 = require("./detalles-asistencia.schema");
let Asistencia = class Asistencia extends mongoose_2.Document {
};
exports.Asistencia = Asistencia;
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Asistencia.prototype, "id_pertenece", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [detalles_asistencia_schema_1.DetallesAsistenciaSchema] }),
    __metadata("design:type", Array)
], Asistencia.prototype, "asistencia_detalle", void 0);
exports.Asistencia = Asistencia = __decorate([
    (0, mongoose_1.Schema)({ collection: 'asistencia' })
], Asistencia);
exports.AsistenciaSchema = mongoose_1.SchemaFactory.createForClass(Asistencia);
//# sourceMappingURL=asistencia.schema.js.map
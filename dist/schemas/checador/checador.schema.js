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
exports.ChecadorSchema = exports.Checador = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const checador_detalles_schema_1 = require("./checador-detalles.schema");
let Checador = class Checador extends mongoose_2.Document {
};
exports.Checador = Checador;
__decorate([
    (0, mongoose_1.Prop)({ type: Number, require: true }),
    __metadata("design:type", Number)
], Checador.prototype, "id_encargado", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [checador_detalles_schema_1.ChecadorDetallesSchema], require: true }),
    __metadata("design:type", Array)
], Checador.prototype, "checador_detalle", void 0);
exports.Checador = Checador = __decorate([
    (0, mongoose_1.Schema)({ collection: 'checador' })
], Checador);
exports.ChecadorSchema = mongoose_1.SchemaFactory.createForClass(Checador);
//# sourceMappingURL=checador.schema.js.map
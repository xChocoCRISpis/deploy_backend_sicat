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
exports.BitacoraSchema = exports.Bitacora = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bitacora_detalles_schema_1 = require("./bitacora-detalles.schema");
let Bitacora = class Bitacora extends mongoose_2.Document {
};
exports.Bitacora = Bitacora;
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Bitacora.prototype, "id_usuario", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [bitacora_detalles_schema_1.BitacoraDetallesSchema], required: true }),
    __metadata("design:type", Array)
], Bitacora.prototype, "bitacora_detalle", void 0);
exports.Bitacora = Bitacora = __decorate([
    (0, mongoose_1.Schema)({ collection: 'bitacora' })
], Bitacora);
exports.BitacoraSchema = mongoose_1.SchemaFactory.createForClass(Bitacora);
//# sourceMappingURL=bitacora.schema.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitacoraSchemaModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const bitacora_schema_1 = require("./bitacora.schema");
let BitacoraSchemaModule = class BitacoraSchemaModule {
};
exports.BitacoraSchemaModule = BitacoraSchemaModule;
exports.BitacoraSchemaModule = BitacoraSchemaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: bitacora_schema_1.Bitacora.name, schema: bitacora_schema_1.BitacoraSchema }], 'sicat_nest'),
        ],
        exports: [mongoose_1.MongooseModule],
    })
], BitacoraSchemaModule);
//# sourceMappingURL=bitacora-schema.module.js.map
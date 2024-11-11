"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsistenciaSchemaModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const asistencia_schema_1 = require("./asistencia.schema");
let AsistenciaSchemaModule = class AsistenciaSchemaModule {
};
exports.AsistenciaSchemaModule = AsistenciaSchemaModule;
exports.AsistenciaSchemaModule = AsistenciaSchemaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: asistencia_schema_1.Asistencia.name, schema: asistencia_schema_1.AsistenciaSchema }
            ], 'sicat_nest')
        ],
        providers: [],
        controllers: [],
        exports: [mongoose_1.MongooseModule]
    })
], AsistenciaSchemaModule);
//# sourceMappingURL=asistencia-schema.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsistenciaModule = void 0;
const common_1 = require("@nestjs/common");
const asistencia_service_1 = require("./asistencia.service");
const asistencia_controller_1 = require("./asistencia.controller");
const typeorm_1 = require("@nestjs/typeorm");
const usuarios_entity_1 = require("../entities/usuarios.entity");
const asistencia_schema_module_1 = require("../schemas/asistencia/asistencia-schema.module");
const auth_middleware_1 = require("../middlewares/auth/auth.middleware");
const logs_middleware_1 = require("../middlewares/logs/logs.middleware");
const bitacora_schema_module_1 = require("../schemas/bitacora/bitacora-schema.module");
let AsistenciaModule = class AsistenciaModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes({ path: "asistencia/crear", method: common_1.RequestMethod.POST }, { path: "asistencia/traer", method: common_1.RequestMethod.GET }, { path: "asistencia/actualizar", method: common_1.RequestMethod.PUT }, { path: "asistencia/eliminar", method: common_1.RequestMethod.DELETE }, { path: "asistencia/horas", method: common_1.RequestMethod.GET });
        consumer.apply(logs_middleware_1.LogMiddleware).forRoutes({ path: "asistencia/crear", method: common_1.RequestMethod.POST });
    }
};
exports.AsistenciaModule = AsistenciaModule;
exports.AsistenciaModule = AsistenciaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            asistencia_schema_module_1.AsistenciaSchemaModule,
            typeorm_1.TypeOrmModule.forFeature([usuarios_entity_1.Usuario]),
            bitacora_schema_module_1.BitacoraSchemaModule
        ],
        controllers: [asistencia_controller_1.AsistenciaController],
        providers: [asistencia_service_1.AsistenciaService],
    })
], AsistenciaModule);
//# sourceMappingURL=asistencia.module.js.map
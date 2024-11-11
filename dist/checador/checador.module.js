"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecadorModule = void 0;
const common_1 = require("@nestjs/common");
const checador_service_1 = require("./checador.service");
const checador_controller_1 = require("./checador.controller");
const checador_schema_module_1 = require("../schemas/checador/checador-schema.module");
const usuarios_entity_1 = require("../entities/usuarios.entity");
const typeorm_1 = require("@nestjs/typeorm");
const auth_middleware_1 = require("../middlewares/auth/auth.middleware");
let ChecadorModule = class ChecadorModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes({ path: "checador", method: common_1.RequestMethod.GET });
    }
};
exports.ChecadorModule = ChecadorModule;
exports.ChecadorModule = ChecadorModule = __decorate([
    (0, common_1.Module)({
        imports: [checador_schema_module_1.ChecadorSchemaModule,
            typeorm_1.TypeOrmModule.forFeature([usuarios_entity_1.Usuario])
        ],
        controllers: [checador_controller_1.ChecadorController],
        providers: [checador_service_1.ChecadorService],
    })
], ChecadorModule);
//# sourceMappingURL=checador.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const typeorm_1 = require("@nestjs/typeorm");
const usuarios_entity_1 = require("../entities/usuarios.entity");
const bitacora_schema_module_1 = require("../schemas/bitacora/bitacora-schema.module");
const auth_middleware_1 = require("../middlewares/auth/auth.middleware");
const imgbb_service_1 = require("../services/imgbb/imgbb.service");
let AuthModule = class AuthModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes({ path: "auth/createUser", method: common_1.RequestMethod.POST });
    }
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([usuarios_entity_1.Usuario]),
            bitacora_schema_module_1.BitacoraSchemaModule],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, imgbb_service_1.ImgBBService],
        exports: [auth_service_1.AuthService]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map
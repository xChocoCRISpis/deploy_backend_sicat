"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const auth_middleware_1 = require("../middlewares/auth/auth.middleware");
const typeorm_1 = require("@nestjs/typeorm");
const encargados_entity_1 = require("../entities/encargados.entity");
const encargados_detalle_entity_1 = require("../entities/encargados_detalle.entity");
const horarios_entity_1 = require("../entities/horarios.entity");
const actividades_entity_1 = require("../entities/actividades.entity");
const usuarios_entity_1 = require("../entities/usuarios.entity");
let UserModule = class UserModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes({ path: "user/profile", method: common_1.RequestMethod.GET });
    }
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([usuarios_entity_1.Usuario, encargados_entity_1.Encargado, encargados_detalle_entity_1.EncargadoDetalle, horarios_entity_1.Horario, actividades_entity_1.Actividad])
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map
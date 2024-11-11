"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActividadesModule = void 0;
const common_1 = require("@nestjs/common");
const actividades_service_1 = require("./actividades.service");
const actividades_controller_1 = require("./actividades.controller");
const typeorm_1 = require("@nestjs/typeorm");
const usuarios_entity_1 = require("../entities/usuarios.entity");
const encargados_entity_1 = require("../entities/encargados.entity");
const encargados_detalle_entity_1 = require("../entities/encargados_detalle.entity");
const actividades_entity_1 = require("../entities/actividades.entity");
const auth_middleware_1 = require("../middlewares/auth/auth.middleware");
let ActividadesModule = class ActividadesModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes({ path: "actividades", method: common_1.RequestMethod.GET });
    }
};
exports.ActividadesModule = ActividadesModule;
exports.ActividadesModule = ActividadesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([usuarios_entity_1.Usuario, encargados_entity_1.Encargado, encargados_detalle_entity_1.EncargadoDetalle, actividades_entity_1.Actividad])
        ],
        controllers: [actividades_controller_1.ActividadesController],
        providers: [actividades_service_1.ActividadesService],
    })
], ActividadesModule);
//# sourceMappingURL=actividades.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnosModule = void 0;
const common_1 = require("@nestjs/common");
const alumnos_controller_1 = require("./alumnos.controller");
const alumnos_service_1 = require("./alumnos.service");
const typeorm_1 = require("@nestjs/typeorm");
const alumnos_entity_1 = require("../entities/alumnos.entity");
const carreras_entity_1 = require("../entities/carreras.entity");
const auth_middleware_1 = require("../middlewares/auth/auth.middleware");
const usuarios_entity_1 = require("../entities/usuarios.entity");
const pertenece_entity_1 = require("../entities/pertenece.entity");
const participa_entity_1 = require("../entities/participa.entity");
const eventos_entity_1 = require("../entities/eventos.entity");
const actividades_entity_1 = require("../entities/actividades.entity");
const imgbb_service_1 = require("../services/imgbb/imgbb.service");
let AlumnosModule = class AlumnosModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes({ path: "alumnos", method: common_1.RequestMethod.GET }, { path: "alumnos/buscar", method: common_1.RequestMethod.GET });
    }
};
exports.AlumnosModule = AlumnosModule;
exports.AlumnosModule = AlumnosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([alumnos_entity_1.Alumno, carreras_entity_1.Carrera, usuarios_entity_1.Usuario, pertenece_entity_1.Pertenece, participa_entity_1.Participa, eventos_entity_1.Evento, carreras_entity_1.Carrera, actividades_entity_1.Actividad])],
        controllers: [alumnos_controller_1.AlumnosController],
        providers: [alumnos_service_1.AlumnosService, imgbb_service_1.ImgBBService],
        exports: [alumnos_service_1.AlumnosService]
    })
], AlumnosModule);
//# sourceMappingURL=alumnos.module.js.map
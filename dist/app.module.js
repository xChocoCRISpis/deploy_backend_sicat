"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const alumnos_module_1 = require("./alumnos/alumnos.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const asistencia_schema_module_1 = require("./schemas/asistencia/asistencia-schema.module");
const bitacora_schema_module_1 = require("./schemas/bitacora/bitacora-schema.module");
const checador_schema_module_1 = require("./schemas/checador/checador-schema.module");
const bitacora_module_1 = require("./bitacora/bitacora.module");
const bitacora_controller_1 = require("./bitacora/bitacora.controller");
const auth_module_1 = require("./auth/auth.module");
const actividades_module_1 = require("./actividades/actividades.module");
const user_module_1 = require("./user/user.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const asistencia_module_1 = require("./asistencia/asistencia.module");
const checador_module_1 = require("./checador/checador.module");
const imgbb_service_1 = require("./services/imgbb/imgbb.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: process.env.MYSQL_HOST,
                port: +process.env.MYSQL_PORT,
                username: process.env.MYSQL_USERNAME,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE,
                autoLoadEntities: true,
                synchronize: true,
                entities: [__dirname + "/**/*.entity{.ts,.js}"],
            }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_CONNECTION_URI_ATLAS, { connectionName: "sicat_nest" }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, "..", "uploads"),
                serveRoot: "/uploads",
            }),
            alumnos_module_1.AlumnosModule,
            asistencia_schema_module_1.AsistenciaSchemaModule,
            checador_schema_module_1.ChecadorSchemaModule,
            bitacora_schema_module_1.BitacoraSchemaModule,
            bitacora_module_1.BitacoraModule,
            auth_module_1.AuthModule,
            actividades_module_1.ActividadesModule,
            user_module_1.UserModule,
            asistencia_module_1.AsistenciaModule,
            checador_module_1.ChecadorModule,
        ],
        controllers: [app_controller_1.AppController, bitacora_controller_1.BitacoraController],
        providers: [app_service_1.AppService, imgbb_service_1.ImgBBService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
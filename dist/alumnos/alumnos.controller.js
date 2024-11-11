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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnosController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const create_alumno_dto_1 = require("./dtos/create-alumno.dto");
const alumnos_service_1 = require("./alumnos.service");
let AlumnosController = class AlumnosController {
    constructor(alumnosService) {
        this.alumnosService = alumnosService;
    }
    getAllAlumnos(num_control, nombre, ap_paterno, sexo, semestre, nombre_corto, page) {
        return this.alumnosService.findAllWithCarreras(num_control, nombre, ap_paterno, sexo, semestre, nombre_corto, page);
    }
    getByIdAlumnos(id) {
        return this.alumnosService.getAlumnoDetail(id);
    }
    createAlumno(createAlumnoDto, imagen) {
        const alumno = this.alumnosService.createAlumno(createAlumnoDto, imagen);
        return alumno;
    }
};
exports.AlumnosController = AlumnosController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('num_control')),
    __param(1, (0, common_1.Query)('nombre')),
    __param(2, (0, common_1.Query)('ap_paterno')),
    __param(3, (0, common_1.Query)('sexo')),
    __param(4, (0, common_1.Query)('semestre')),
    __param(5, (0, common_1.Query)('nombre_corto')),
    __param(6, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Number, String, Number]),
    __metadata("design:returntype", void 0)
], AlumnosController.prototype, "getAllAlumnos", null);
__decorate([
    (0, common_1.Get)('/buscar'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AlumnosController.prototype, "getByIdAlumnos", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('Foto', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/alumnos',
            filename: (req, file, cb) => {
                const createAlumnoDto = req.body;
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                const filename = `${createAlumnoDto.Num_control}-${uniqueSuffix}${ext}`;
                cb(null, filename);
            },
        }),
    })),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_alumno_dto_1.CreateAlumnoDto, Object]),
    __metadata("design:returntype", void 0)
], AlumnosController.prototype, "createAlumno", null);
exports.AlumnosController = AlumnosController = __decorate([
    (0, common_1.Controller)('alumnos'),
    __metadata("design:paramtypes", [alumnos_service_1.AlumnosService])
], AlumnosController);
//# sourceMappingURL=alumnos.controller.js.map
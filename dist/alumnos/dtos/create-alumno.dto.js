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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAlumnoDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateAlumnoDto {
}
exports.CreateAlumnoDto = CreateAlumnoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(9, 10),
    __metadata("design:type", String)
], CreateAlumnoDto.prototype, "Num_control", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 150),
    __metadata("design:type", String)
], CreateAlumnoDto.prototype, "Nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 150),
    __metadata("design:type", String)
], CreateAlumnoDto.prototype, "Ap_paterno", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 150),
    __metadata("design:type", String)
], CreateAlumnoDto.prototype, "Ap_materno", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 1),
    (0, class_validator_1.IsIn)(['M', 'F']),
    __metadata("design:type", String)
], CreateAlumnoDto.prototype, "Sexo", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateAlumnoDto.prototype, "Fecha_nac", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateAlumnoDto.prototype, "Semestre", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateAlumnoDto.prototype, "Nivel", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlumnoDto.prototype, "Foto", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 12),
    __metadata("design:type", String)
], CreateAlumnoDto.prototype, "Telefono", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateAlumnoDto.prototype, "Correo", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateAlumnoDto.prototype, "carrera", void 0);
//# sourceMappingURL=create-alumno.dto.js.map
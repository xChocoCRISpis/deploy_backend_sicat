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
exports.ChecadorController = void 0;
const common_1 = require("@nestjs/common");
const checador_service_1 = require("./checador.service");
const create_checador_dto_1 = require("./dto/create-checador.dto");
const update_checador_dto_1 = require("./dto/update-checador.dto");
let ChecadorController = class ChecadorController {
    constructor(checadorService) {
        this.checadorService = checadorService;
    }
    create(createChecadorDto) {
        return this.checadorService.create(createChecadorDto);
    }
    findAll() {
        return this.checadorService.findAll();
    }
    findOne(id) {
        return this.checadorService.findOne(+id);
    }
    update(id, updateChecadorDto) {
        return this.checadorService.update(+id, updateChecadorDto);
    }
    remove(id) {
        return this.checadorService.remove(+id);
    }
};
exports.ChecadorController = ChecadorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_checador_dto_1.CreateChecadorDto]),
    __metadata("design:returntype", void 0)
], ChecadorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChecadorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChecadorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_checador_dto_1.UpdateChecadorDto]),
    __metadata("design:returntype", void 0)
], ChecadorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChecadorController.prototype, "remove", null);
exports.ChecadorController = ChecadorController = __decorate([
    (0, common_1.Controller)('checador'),
    __metadata("design:paramtypes", [checador_service_1.ChecadorService])
], ChecadorController);
//# sourceMappingURL=checador.controller.js.map
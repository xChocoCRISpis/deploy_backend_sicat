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
exports.ChecadorService = void 0;
const common_1 = require("@nestjs/common");
const checador_schema_1 = require("../schemas/checador/checador.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ChecadorService = class ChecadorService {
    constructor(bitacoraModel) {
        this.bitacoraModel = bitacoraModel;
    }
    create(createChecadorDto) {
        return 'This action adds a new checador';
    }
    findAll() {
        return `This action returns all checador`;
    }
    findOne(id) {
        return `This action returns a #${id} checador`;
    }
    update(id, updateChecadorDto) {
        return `This action updates a #${id} checador`;
    }
    remove(id) {
        return `This action removes a #${id} checador`;
    }
};
exports.ChecadorService = ChecadorService;
exports.ChecadorService = ChecadorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(checador_schema_1.Checador.name, 'sicat_nest')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ChecadorService);
//# sourceMappingURL=checador.service.js.map
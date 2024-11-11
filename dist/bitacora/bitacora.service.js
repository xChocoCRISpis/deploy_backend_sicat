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
exports.BitacoraService = void 0;
const common_1 = require("@nestjs/common");
const usuarios_entity_1 = require("../entities/usuarios.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bitacora_schema_1 = require("../schemas/bitacora/bitacora.schema");
let BitacoraService = class BitacoraService {
    constructor(bitacoraModel, usuariosRepository) {
        this.bitacoraModel = bitacoraModel;
        this.usuariosRepository = usuariosRepository;
    }
    async create(createBitacoraDto) {
        const { id_usuario, bitacora_detalle } = createBitacoraDto;
        const user = await this.usuariosRepository.findOneBy({ Id_usuario_pk: id_usuario });
        if (!user)
            throw new common_1.NotFoundException(`El usuario no existe en la base de datos`);
        let bitacora = await this.bitacoraModel.findOne({ id_usuario });
        if (bitacora) {
            bitacora.bitacora_detalle.push(...bitacora_detalle);
        }
        else {
            bitacora = new this.bitacoraModel({ id_usuario, bitacora_detalle });
        }
        await bitacora.save();
        return { success: true, message: `Se creo una entrada en la bitacora con exito` };
    }
    async findAll() {
        return await this.bitacoraModel.find();
    }
    async findOne(id) {
        const bitacoras = await this.bitacoraModel.find({ id_usuario: id });
        if (!bitacoras || bitacoras.length === 0)
            throw new common_1.NotFoundException(`El usuario no existe en la base de datos`);
        return bitacoras;
    }
    update(id, updateBitacoraDto) {
        return `This action updates a #${id} bitacora`;
    }
    remove(id) {
        return `This action removes a #${id} bitacora`;
    }
};
exports.BitacoraService = BitacoraService;
exports.BitacoraService = BitacoraService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(bitacora_schema_1.Bitacora.name, 'sicat_nest')),
    __param(1, (0, typeorm_1.InjectRepository)(usuarios_entity_1.Usuario)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        typeorm_2.Repository])
], BitacoraService);
//# sourceMappingURL=bitacora.service.js.map
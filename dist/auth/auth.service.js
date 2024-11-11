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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuarios_entity_1 = require("../entities/usuarios.entity");
const typeorm_2 = require("typeorm");
const bitacora_schema_1 = require("../schemas/bitacora/bitacora.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const QRCode = require("qrcode");
const crypto = require("crypto");
const imgbb_service_1 = require("../services/imgbb/imgbb.service");
let AuthService = class AuthService {
    constructor(usuarioRepository, bitacoraModel, imgbbService) {
        this.usuarioRepository = usuarioRepository;
        this.bitacoraModel = bitacoraModel;
        this.imgbbService = imgbbService;
    }
    async login(loginDto) {
        const { Nombre, Correo, Contrasena } = loginDto;
        if (loginDto.Nombre) {
            const login = await this.usuarioRepository
                .createQueryBuilder("usuario")
                .where("usuario.nombre = :nombre", { nombre: Nombre })
                .getOne();
            return this.verifyLogin(login, Contrasena);
        }
        else if (loginDto.Correo) {
            const login = await this.usuarioRepository
                .createQueryBuilder("usuario")
                .where("usuario.correo = :correo", { correo: Correo })
                .getOne();
            return this.verifyLogin(login, Contrasena);
        }
        else
            throw new common_1.NotFoundException(`Login necesita nombre de usuario o correo de usuario`);
    }
    async verifyLogin(login, Contrasena) {
        if (!login)
            throw new common_1.UnauthorizedException("Contraseña incorrecta y/o Usuario incorrecto");
        const jwtToken = this.generateJwtToken(login.Correo, login.Nombre);
        const updateToken = await this.usuarioRepository.update(login.Id_usuario_pk, { Token: jwtToken });
        console.log(updateToken);
        if (updateToken.affected < 1)
            throw new common_1.BadRequestException("No se pudo guardar el login");
        const match = await bcrypt.compare(Contrasena, login.Contrasena);
        if (!match)
            throw new common_1.UnauthorizedException("Contraseña incorrecta y/o Usuario incorrecto");
        return {
            login: true,
            id: login.Id_usuario_pk,
            token: jwtToken,
            Nombre: login.Nombre,
        };
    }
    async createUser(createAuthDto) {
        const { Nombre, Contrasena, Correo, Tipo } = createAuthDto;
        const emailUser = await this.usuarioRepository.findOne({
            where: { Correo },
        });
        const nameUser = await this.usuarioRepository.findOne({
            where: { Nombre },
        });
        if (emailUser)
            throw new common_1.BadRequestException("Correo ya registrado");
        if (nameUser)
            throw new common_1.BadRequestException("Nombre de usuario ya registrado");
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Contrasena, salt);
        const [qrBase64, encodeData] = await this.generateQrBase64(Contrasena);
        const imgbbResponse = await this.imgbbService.uploadImage(qrBase64);
        const qrUrl = imgbbResponse.url;
        console.log(imgbbResponse);
        const token = this.generateJwtToken(Correo, Nombre);
        const newUser = this.usuarioRepository.create({
            Nombre,
            Contrasena: hashedPassword,
            Cadena_qr: encodeData,
            Imagen_qr: qrUrl,
            Correo,
            Tipo,
            Token: token,
        });
        await this.usuarioRepository.save(newUser);
        return { token };
    }
    async convertImageToBase64(filePath) {
        const fs = await Promise.resolve().then(() => require("fs/promises"));
        try {
            await fs.access(filePath);
            const image = await fs.readFile(filePath);
            return image.toString("base64");
        }
        catch (error) {
            throw new Error(`Error al leer el archivo QR en ${filePath}: ${error.message}`);
        }
    }
    generateJwtToken(correo, usuario) {
        const payload = { correo, usuario };
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "4h" });
    }
    async generateQrBase64(cadena) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedData = await bcrypt.hash(cadena, salt);
            const qrBase64 = await QRCode.toDataURL(hashedData, {
                type: "image/png",
                width: 500,
                margin: 4,
                errorCorrectionLevel: "H",
                color: {
                    dark: "#5A0A18",
                    light: "#FFFFFF",
                },
            });
            const base64Data = qrBase64.replace(/^data:image\/png;base64,/, "");
            return [base64Data, hashedData];
        }
        catch (error) {
            throw new Error(`Error al generar el QR en base64: ${error}`);
        }
    }
    async generateQr(cadena) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedData = await bcrypt.hash(cadena, salt);
            const name = `${crypto.randomBytes(8).toString("hex")}-${crypto.randomBytes(8).toString("hex")}-${crypto.randomBytes(8).toString("hex")}-${crypto.randomBytes(6).toString("hex")}`;
            const path = `${process.env.FILE_PATH}/encargados/qr/${name}.png`;
            console.log(path);
            await QRCode.toFile(path, hashedData, {
                type: "png",
                width: 500,
                margin: 4,
                errorCorrectionLevel: "H",
                color: {
                    dark: "5A0A18",
                    light: "FFFFFF",
                },
            });
            return [name, hashedData];
        }
        catch (error) {
            throw new Error(`Error al generar el QR: ${error}`);
        }
    }
    findAll() {
        return `This action returns all auth`;
    }
    findOne(id) {
        return `This action returns a #${id} auth`;
    }
    update(id, updateAuthDto) {
        return `This action updates a #${id} auth`;
    }
    remove(id) {
        return `This action removes a #${id} auth`;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuarios_entity_1.Usuario)),
    __param(1, (0, mongoose_2.InjectModel)(bitacora_schema_1.Bitacora.name, "sicat_nest")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mongoose_1.Model,
        imgbb_service_1.ImgBBService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
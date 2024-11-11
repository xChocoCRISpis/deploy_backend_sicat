import { CreateAuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { Usuario } from "src/entities/usuarios.entity";
import { Repository } from "typeorm";
import { Bitacora } from "src/schemas/bitacora/bitacora.schema";
import { Model } from "mongoose";
import { LoginDto } from "./dto/login.dto";
import { ImgBBService } from "../services/imgbb/imgbb.service";
export declare class AuthService {
    private readonly usuarioRepository;
    private readonly bitacoraModel;
    private readonly imgbbService;
    constructor(usuarioRepository: Repository<Usuario>, bitacoraModel: Model<Bitacora>, imgbbService: ImgBBService);
    login(loginDto: LoginDto): Promise<{
        login: boolean;
        id: number;
        token: string;
        Nombre: string;
    }>;
    verifyLogin(login: Usuario, Contrasena: string): Promise<{
        login: boolean;
        id: number;
        token: string;
        Nombre: string;
    }>;
    createUser(createAuthDto: CreateAuthDto): Promise<{
        token: string;
    }>;
    private convertImageToBase64;
    private generateJwtToken;
    private generateQrBase64;
    private generateQr;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
}

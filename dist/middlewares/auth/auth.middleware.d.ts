import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { Usuario } from 'src/entities/usuarios.entity';
import { Repository } from 'typeorm';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    use(req: Request, res: Response, next: () => void): Promise<void>;
}

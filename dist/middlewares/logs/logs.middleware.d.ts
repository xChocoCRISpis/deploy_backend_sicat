import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Model } from 'mongoose';
import { Bitacora } from '../../schemas/bitacora/bitacora.schema';
export declare class LogMiddleware implements NestMiddleware {
    private readonly bitacoraModel;
    constructor(bitacoraModel: Model<Bitacora>);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}

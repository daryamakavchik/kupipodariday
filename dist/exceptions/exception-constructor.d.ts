import { HttpException } from '@nestjs/common';
import { ErrorCode } from './error-constants';
export declare class ServerException extends HttpException {
    constructor(code: ErrorCode);
}

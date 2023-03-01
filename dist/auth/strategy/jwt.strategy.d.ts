import { UsersService } from 'src/users/users.service';
import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private userService;
    constructor(configService: ConfigService, userService: UsersService);
    validate(jwtPayload: {
        sub: number;
    }): Promise<import("../../users/entities/user.entity").User>;
}
export {};

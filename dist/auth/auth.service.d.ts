import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UsersService);
    auth(user: User): {
        access_token: string;
    };
    validatePassword(email: string, password: string): Promise<User>;
}

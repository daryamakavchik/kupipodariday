import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class AuthController {
    private usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    signin(req: any): {
        access_token: string;
    };
    signup(createUserDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
}

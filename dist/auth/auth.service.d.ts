import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private jwtService;
    private usersService;
    private configService;
    constructor(jwtService: JwtService, usersService: UsersService, configService: ConfigService);
    login(user: User): {
        access_token: string;
    };
    validatePassword(username: string, password: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        username: string;
        about: string;
        avatar: string;
        email: string;
        wishes: import("../wishes/entities/wish.entity").Wish[];
        offers: import("../offers/entities/offer.entity").Offer[];
        wishlists: import("../wishlists/entities/wishlist.entity").Wishlist[];
    }>;
}

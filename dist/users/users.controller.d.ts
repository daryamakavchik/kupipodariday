import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getMe(req: any): any;
    updateMe(req: any, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").User>;
    getWishes(req: any): Promise<import("../wishes/entities/wish.entity").Wish[]>;
    getUserByUsername(username: any): Promise<import("./entities/user.entity").User[]>;
    getWishesByUsername(username: string): Promise<import("../wishes/entities/wish.entity").Wish[]>;
}

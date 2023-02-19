import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<import("./entities/user.entity").User[]>;
    getMe(req: any): any;
    updateMe(req: any, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").User>;
    getWishes(req: any): Promise<import("../wishes/entities/wish.entity").Wish[]>;
    getUserByUsername(username: string): Promise<import("./entities/user.entity").User[]>;
    getWishesByUsername(username: string): Promise<import("../wishes/entities/wish.entity").Wish[]>;
}

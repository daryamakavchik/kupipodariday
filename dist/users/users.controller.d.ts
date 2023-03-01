import { UsersService } from './users.service';
import { WishesService } from 'src/wishes/wishes.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    private readonly wishesService;
    constructor(usersService: UsersService, wishesService: WishesService);
    findMe(req: any): any;
    update(req: any, updateUserDto: UpdateUserDto): Promise<{}>;
    findMeWishes(req: any): Promise<import("../wishes/entities/wish.entity").Wish[]>;
    findOne(username: string): Promise<import("./entities/user.entity").User>;
    findUsersWishes(username: string): Promise<import("../wishes/entities/wish.entity").Wish[]>;
    findMany(query: string): Promise<import("./entities/user.entity").User[]>;
}

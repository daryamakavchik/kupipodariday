import { UsersService } from './users.service';
import { WishesService } from 'src/wishes/wishes.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Wish } from 'src/wishes/entities/wish.entity';
import { User } from './entities/user.entity';
export declare class UsersController {
    private readonly usersService;
    private readonly wishesService;
    constructor(usersService: UsersService, wishesService: WishesService);
    findMe(req: any): any;
    update(req: any, updateUserDto: UpdateUserDto): Promise<{}>;
    findMeWishes(req: any): Promise<Wish[]>;
    findOne(username: string): Promise<User>;
    findUsersWishes(username: string): Promise<Wish[]>;
    findMany(query: string): Promise<User[]>;
}

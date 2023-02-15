import { User } from '../entities/user.entity';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    create(user: CreateUserDto): Promise<User>;
    removeById(id: number): Promise<void>;
    updateById(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
}

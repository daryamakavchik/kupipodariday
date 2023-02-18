import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(id: number): Promise<User>;
    findByUsername(username: string): Promise<User>;
    updateOne(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    getWishes(username: any): Promise<import("../wishes/entities/wish.entity").Wish[]>;
    findMany(query: any): Promise<User[]>;
}

import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    removeById(id: number): Promise<import("typeorm").DeleteResult>;
    create(createUserDto: CreateUserDto): Promise<User>;
    updateById(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
}

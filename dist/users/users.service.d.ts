import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findById(id: number): Promise<User>;
    findByUsername(username: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    updateOne(user: User, updateUserDto: UpdateUserDto): Promise<{}>;
    findMany(query: string): Promise<User[]>;
}

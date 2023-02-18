import { Injectable } from "@nestjs/common";
import { Repository, Like } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hash = await bcrypt.hash(createUserDto.password, 10);

    const createUserWithHashPassword: CreateUserDto = {
      ...createUserDto,
      password: hash,
    };

    const user = await this.usersRepository.create(createUserWithHashPassword);

    return this.usersRepository.save(user);
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({ where: { id }});
    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.usersRepository.findOneBy({ username });
    return user;
  }

  async updateOne(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      const hash = await bcrypt.hash(updateUserDto.password, 10);
      updateUserDto.password = hash;
    }

    await this.usersRepository.update({ id }, updateUserDto);
    const user = await this.findOne(id);
    return user;
  }

  async getWishes(username) {
    const user = await this.findByUsername(username);
    const { wishes } = user;
    return wishes;
  }


  async findMany(query: any) {
    const users = await this.usersRepository.find({
      where: [
        { username : Like(query) },
        { email: Like(query) }
      ]
    })
    return users;
  }
}

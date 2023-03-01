import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wish } from 'src/wishes/entities/wish.entity';
import { Wishlist } from 'src/wishlists/entities/wishlist.entity';
import { User } from './entities/user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import bcrypt from 'bcrypt';
import { Like } from 'typeorm';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return bcrypt.hash(createUserDto.password, 10).then((hashed) =>
      this.userRepository.save({
        ...createUserDto,
        password: hashed,
      }),
    );
  }

  findById(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async findByUsername(username: string): Promise<User> {
    return await this.userRepository.findOneBy({ username });
  }

  async updateOne(user: User, updateUserDto: UpdateUserDto) {
    let updatedUser = {};

    // eslint-disable-next-line no-prototype-builtins
    if (updateUserDto.hasOwnProperty('password')) {
      updatedUser = await bcrypt
        .hash(updateUserDto.password, 10)
        .then((hashed) =>
          this.userRepository.save({
            ...user,
            ...updateUserDto,
            password: hashed,
          }),
        );
    } else {
      updatedUser = await this.userRepository.save({
        ...user,
        ...updateUserDto,
      });
    }

    return updatedUser;
  }

  async findMany(query: string) {
    const users = await this.userRepository.find({
      where: [{ username: Like(`%${query}%`) }, { email: Like(`%${query}%`) }],
    });

    if (!users.length) {
      throw new Error();
    }

    return users;
  }
}
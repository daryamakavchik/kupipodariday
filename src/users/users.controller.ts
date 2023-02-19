import {
  Controller,
  Get,
  Req,
  UseGuards,
  Body,
  Patch,
  Param
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindUserDto } from './dto/find-user.dto';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(
  private usersService: UsersService,
  ) {}

  @Get('')
  getAll() {
    return this.usersService.findAll()
  }

  @Get('me')
  getMe(@Req() req) {
    return req.user
  }

  @Patch('me')
  async updateMe(@Req() req, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateOne(req.user.id, updateUserDto);
  }

  @Get('me/wishes')
  async getWishes(@Req() req) {
    const wishes = await this.usersService.getWishes(req.user.username);
    return wishes;
  }

  @Get(':username')
  async getUserByUsername(@Param('username') username: string) {
    const user = await this.usersService.findMany(username);
    return user;
  }

  @Get(':username/wishes')
  async getWishesByUsername(@Param('username') username: string) {
    const wishes = await this.usersService.getWishes(username);
    return wishes;
  }

  @Post('find')
  async findUser(@Body() findUserDto: FindUserDto) {
    console.log(findUserDto);
    const user = await this.usersService.findMany(findUserDto.query);
    return user;
  }
}
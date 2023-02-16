import {
  Controller,
  Get,
  Req,
  UseGuards,
  Body,
  Patch,
  Param,
  Post,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(
  private usersService: UsersService,
  ) {}

  @Get('me')
  getMe(@Req() req) {
    return req.user;
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
  async getUserByUsername(@Param('username') username: any) {
    const user = await this.usersService.findByUsername(username);
    return user;
  }

  @Get(':username/wishes')
  async getWishesByUsername(@Param('username') username: string) {
    const wishes = await this.usersService.getWishes(username);
    return wishes;
  }
}
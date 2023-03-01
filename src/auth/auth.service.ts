import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { ErrorCode } from '../exceptions/error-constants';
import { ServerException } from '../exceptions/exception-constructor';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  auth(user: User) {
    const payload = { sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }

  async validatePassword(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new ServerException(ErrorCode.LoginOrPasswordIncorrect);
    }

    const matched = await bcrypt.compare(password, user.password);

    if (!matched) {
      throw new ServerException(ErrorCode.LoginOrPasswordIncorrect);
    }

    return user;
  }
}
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstant } from '../constants/constants';
import { UsersService } from 'src/users/users.service';
import { ConfigService } from 'nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private usersService: UsersService,
    configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConstant.secret,
      ignoreExpiration: false,
    });
  }

  async validate(payload: any) {
    const user = this.usersService.findOne(payload.sub);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}

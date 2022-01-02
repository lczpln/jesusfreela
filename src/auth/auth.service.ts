import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';
import { RefreshTokenDto } from 'src/dto/refresh-token.dto';
import { UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };

    return this.generateJwt(payload);
  }

  async refreshToken(token: RefreshTokenDto) {
    try {
      const validAccessToken: any = this.jwtService.verify(token.accessToken, {
        ignoreExpiration: true,
      });
      const validRefreshToken: any = this.jwtService.verify(token.refreshToken);

      if (!validRefreshToken.isRefreshToken)
        throw new BadRequestException(
          "provided refreshToken doesn't seems to be a refresh token",
        );

      const payload = {
        username: validAccessToken.username,
        sub: validAccessToken.id,
      };

      return this.generateJwt(payload);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async generateJwt(payload: any) {
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(
        { isRefreshToken: true },
        { expiresIn: '65m' },
      ),
    };
  }
}

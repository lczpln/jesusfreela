import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { CreateUserDto } from './users/dto/create-user.dto';
import { UserLoginDto } from './users/dto/user-login.dto';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Get()
  apiVerision(): { version: string } {
    return this.appService.apiVersion();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() user: UserLoginDto) {
    return this.authService.login(user);
  }

  @Post('auth/refresh')
  refreshToken(@Body() token: RefreshTokenDto) {
    return this.authService.refreshToken(token);
  }

  @Post('register')
  async register(@Body() user: CreateUserDto) {
    return this.usersService.register(user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('profile')
  getProfile(@Request() req) {
    return this.usersService.getUserProfile(req.user);
  }
}

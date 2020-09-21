import { Body, Controller, HttpCode, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from '../../services/auth.service';
import { CreateUserDto } from '../../../users/dto/create-user.dto';
import { Login } from '../../interfaces/login.interface';
import { AuthenticationGuard } from '../../guards/auth.guard';
import { Response } from 'express';
import JwtAuthenticationGuard from '../../guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('register')
  async register(@Body() user: CreateUserDto) {
    return this.authService.register(user);
  }

  @HttpCode(200)
  @UseGuards(AuthenticationGuard)
  @Post('login')
  async logIn(@Req() request: Login, @Res() response: Response) {
    const user = request.user;
    const cookie = this.authService.getCookieWithJwtToken(user.id);
    response.setHeader('Set-Cookie', cookie);
    user.password = null;
    return response.send(user);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('logout')
  async logOut(@Req() request: Login, @Res() response: Response) {
    response.setHeader('Set-Cookie', this.authService.getDroppedCookies());
    return response.sendStatus(200);
  }
}

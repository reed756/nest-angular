import {
  Body,
  Controller,
  Get,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './public';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() loginDto) {
    return this.authService.login(loginDto);
  }

  @Public()
  @Post('signup')
  async signUp(@Body() signupDto) {
    return this.authService.signUp(signupDto);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Public()
  @Post('logout')
  async logout(@Request() req) {
    return req.logout((err) => {
      if (err) {
        throw err;
      }
    });
  }
}

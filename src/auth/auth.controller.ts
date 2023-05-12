import { Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { Auth } from './decorators/auth.decorator';
import { Request } from 'express';

@ApiTags('auth')
@Controller({ path: 'auth' })
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * Login and get token
   *
   * @param {Request} req
   * @return {Promise<string>}
   * @memberof AuthController
   */
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request): Promise<string> {
    return this.authService.login(req.user);
  }

  /**
   * Get admin profile
   *
   * @param {Request} req
   * @return {Express.User}
   * @memberof AuthController
   */
  @Auth(Role.ADMIN)
  @Get('profile')
  getProfile(@Req() req: Request) {
    return req.user;
  }
}

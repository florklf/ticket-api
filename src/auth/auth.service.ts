import { Injectable, Logger } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  /**
   * Validate user
   *
   * @param {string} username
   * @param {string} password
   * @return {Promise<User>}
   * @memberof AuthService
   */
  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.usersService.user({ email: username });
    if (compareSync(password, user?.password)) {
      return user;
    }
    return null;
  }

  /**
   * Login user
   *
   * @param {Express.User}
   * @return {Promise<string>}
   * @memberof AuthService
   */
  async login(user: any) {
    Logger.log(user, JSON.stringify(user));
    const payload = { email: user.email, id: user.id, role: user.role };
    return await this.jwtService.signAsync(payload);
  }
}

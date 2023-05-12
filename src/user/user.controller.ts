import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User, Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('user')
@Controller({ path: 'users' })
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Get user by id
   *
   * @param {string} id
   * @return {Promise<User>}
   * @memberof UserController
   */
  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return await this.userService.user({ id: Number(id) });
  }

  /**
   * Get all users
   *
   * @return {Promise<User[]>}
   * @memberof UserController
   */
  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.users({});
  }

  /**
   * Create user
   *
   * @param {CreateUserDto} data
   * @return {Promise<User>}
   * @memberof UserController
   */
  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<User> {
    return await this.userService.createUser(data);
  }

  /**
   * Update user
   *
   * @param {string} id
   * @param {UpdateUserDto} data
   * @return {Promise<User>}
   * @memberof UserController
   */
  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data,
    });
  }

  /**
   * Delete user
   *
   * @param {Prisma.UserWhereUniqueInput} data
   * @return {Promise<User>}
   * @memberof UserController
   */
  @Delete(':id')
  async removeUser(data: Prisma.UserWhereUniqueInput): Promise<User> {
    return await this.userService.deleteUser(data);
  }
}

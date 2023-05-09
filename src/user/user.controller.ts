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

@ApiTags('user')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return await this.userService.user({ id: Number(id) });
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.users({});
  }

  @Post()
  async createUser(@Body() data: Prisma.UserCreateInput): Promise<User> {
    return await this.userService.createUser(data);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete(':id')
  async removeUser(data: Prisma.UserWhereUniqueInput): Promise<User> {
    return await this.userService.deleteUser(data);
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  /**
   * Get one user
   *
   * @param {Prisma.UserWhereUniqueInput} userWhereUniqueInput
   * @return {Promise<User>}
   * @memberof UserService
   */
  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUniqueOrThrow({
      where: userWhereUniqueInput,
    });
  }

  /**
   * Get all users
   *
   * @param {{
   *     skip?: number;
   *     take?: number;
   *     cursor?: Prisma.UserWhereUniqueInput;
   *     where?: Prisma.UserWhereInput;
   *     orderBy?: Prisma.UserOrderByWithRelationInput;
   *   }} params
   * @return {Promise<User>}
   * @memberof UserService
   */
  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  /**
   * Create a user
   *
   * @param {Prisma.UserCreateInput} data
   * @return {Promise<User>}
   * @memberof UserService
   */
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    data.password = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data,
    });
  }

  /**
   * Update a user
   *
   * @param {{
   *     where: Prisma.UserWhereUniqueInput;
   *     data: Prisma.UserUpdateInput;
   *   }} params
   * @return {Promise<User>}
   * @memberof UserService
   */
  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    if (data.password) {
      data.password = await bcrypt.hash(data.password as string, 10);
    }
    return this.prisma.user.update({
      data,
      where,
    });
  }

  /**
   * Delete a user
   *
   * @param {Prisma.UserWhereUniqueInput} where
   * @return {Promise<User>}
   * @memberof UserService
   */
  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}

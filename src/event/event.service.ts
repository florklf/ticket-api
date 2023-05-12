import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Event, Prisma } from '@prisma/client';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  /**
   * Get one event by id
   *
   * @param {Prisma.EventWhereUniqueInput} eventWhereUniqueInput
   * @return {(Promise<Event | null>)}
   * @memberof EventService
   */
  async event(
    eventWhereUniqueInput: Prisma.EventWhereUniqueInput,
  ): Promise<Event | null> {
    return this.prisma.event.findUniqueOrThrow({
      where: eventWhereUniqueInput,
    });
  }

  /**
   * Get all events
   *
   * @param {{
   *     skip?: number;
   *     take?: number;
   *     cursor?: Prisma.UserWhereUniqueInput;
   *     where?: Prisma.UserWhereInput;
   *     orderBy?: Prisma.UserOrderByWithRelationInput;
   *   }} params
   * @return {Promise<Event[]>}
   * @memberof EventService
   */
  async events(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<Event[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.event.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  /**
   * Create a new event
   *
   * @param {Prisma.EventCreateInput} data
   * @return {Promise<Event>}
   * @memberof EventService
   */
  async createEvent(data: Prisma.EventCreateInput): Promise<Event> {
    return this.prisma.event.create({
      data,
    });
  }

  /**
   * Update an event
   *
   * @param {{
   *     where: Prisma.EventWhereUniqueInput;
   *     data: Prisma.EventUpdateInput;
   *   }} params
   * @return {Promise<Event>}
   * @memberof EventService
   */
  async updateEvent(params: {
    where: Prisma.EventWhereUniqueInput;
    data: Prisma.EventUpdateInput;
  }): Promise<Event> {
    const { where, data } = params;
    return this.prisma.event.update({
      data,
      where,
    });
  }

  /**
   * Delete an event
   *
   * @param {Prisma.EventWhereUniqueInput} where
   * @return {Promise<Event>}
   * @memberof EventService
   */
  async deleteEvent(where: Prisma.EventWhereUniqueInput): Promise<Event> {
    return this.prisma.event.delete({
      where,
    });
  }
}

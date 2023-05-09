import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EventService } from './event.service';
import { Prisma, Event } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@ApiTags('event')
@Controller({ path: 'events' })
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get(':id')
  async getEvent(@Param('id') id: string): Promise<Event> {
    return await this.eventService.event({ id: Number(id) });
  }

  @Get()
  async findAll(): Promise<Event[]> {
    return await this.eventService.events({});
  }

  @Post()
  async createEvent(@Body() data: CreateEventDto): Promise<Event> {
    return await this.eventService.createEvent(data);
  }

  @Patch(':id')
  async updateEvent(
    @Param('id') id: string,
    @Body() data: UpdateEventDto,
  ): Promise<Event> {
    return this.eventService.updateEvent({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete(':id')
  async removeEvent(data: Prisma.EventWhereUniqueInput): Promise<Event> {
    return await this.eventService.deleteEvent(data);
  }
}

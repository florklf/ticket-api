import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { PrismaService } from 'src/prisma.service';
import { EventController } from './event.controller';

@Module({
  imports: [],
  controllers: [EventController],
  providers: [EventService, PrismaService],
  exports: [EventService],
})
export class EventModule {}

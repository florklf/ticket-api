import { Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { EnumEventType } from '@prisma/client';

export class CreateEventDto implements Prisma.EventCreateInput {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDate()
  date?: Date;

  @IsOptional()
  place?: string;

  @ApiProperty({ enum: EnumEventType })
  @IsOptional()
  @IsEnum(EnumEventType)
  type?: EnumEventType;
}

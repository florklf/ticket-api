import { Prisma, Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateUserDto implements Prisma.UserUpdateInput {
  @IsOptional()
  @IsEmail()
  email?: string | Prisma.StringFieldUpdateOperationsInput;

  @IsOptional()
  @IsString()
  firstname?: string;

  @IsOptional()
  @IsString()
  lastname?: string;

  @IsOptional()
  @ApiProperty({ enum: Role })
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  @MinLength(5)
  password?: string;
}

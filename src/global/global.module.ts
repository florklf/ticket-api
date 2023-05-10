import { Global, Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Global()
@Module({
  imports: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class GlobalModule {}

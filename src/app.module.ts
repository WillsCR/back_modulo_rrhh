import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RrhhModule } from './RRHH/rrhh.module';

@Module({
  imports: [PrismaModule,RrhhModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

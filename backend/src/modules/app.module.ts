import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

@Module({
  imports: [DatabaseModule /*, ConfigModule.forRoot({ isGlobal: true })  */],
  controllers: [AppController],
  providers: [
    AppService,
    /*
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard,
    }, */
  ],
})
export class AppModule {}

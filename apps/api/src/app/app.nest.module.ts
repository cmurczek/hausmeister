import { Module } from '@nestjs/common';

import { AppController } from './app.nest.controller';
import { AppService } from './app.nest.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

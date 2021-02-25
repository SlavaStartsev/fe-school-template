import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { NextService } from './next.service';

@Module({
  providers: [NextService],
  exports: [NextService],
})
export class NextModule {}

import { HttpModule, Module } from '@nestjs/common';

import { NextModule } from '../next/next.module';
import { MyPageController } from './my-page.controller';
import { MyPageService } from './my-page.service';

@Module({
  imports: [HttpModule, NextModule],
  providers: [MyPageService],
  controllers: [MyPageController],
})
export class MyPageModule {}

import { Module } from '@nestjs/common';

import { MyPageModule } from '../my-page/my-page.module';

@Module({
  imports: [MyPageModule],
})
export class ViewModule {}

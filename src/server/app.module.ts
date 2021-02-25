import { ServeStaticModule } from '@nestjs/serve-static';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ViewModule } from './view/view.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvVars: false,
    }),
    ServeStaticModule.forRoot(),
    ViewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
// import { ConfigModule } from './configmodule/configmodule.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './.development.env',
    }),
    MongooseModule.forRoot(process.env.DB_URL_CLOUD),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

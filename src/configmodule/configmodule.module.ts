import { Module } from '@nestjs/common';
import { ConfigModuleService } from './configmodule.service';
import { ConfigModuleController } from './configmodule.controller';

@Module({
  imports: [],
  controllers: [ConfigModuleController],
  providers: [ConfigModuleService],
})
export class ConfigModule {}

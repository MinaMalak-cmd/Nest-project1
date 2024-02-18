import { Controller, Get, HttpCode, Header, Param, Res, Req } from '@nestjs/common';
import { ConfigModuleService } from './configmodule.service';
import { Response, Request} from 'express';

@Controller('/config')
export class ConfigModuleController {
  constructor(private readonly configModuleService: ConfigModuleService) {}
  @Get()
  getEnvVars(): string {
    return this.configModuleService.getEnvVars();
  }
}

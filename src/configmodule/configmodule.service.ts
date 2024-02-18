import { Injectable } from '@nestjs/common';
@Injectable()
export class ConfigModuleService {
  getEnvVars(): string {
    return 'Hello From config';
  }
}

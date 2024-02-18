import { Injectable } from '@nestjs/common';
import { Response } from 'express';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!2234';
  }
  getHello2Service(id: string, response: Response): Response {
    return response.status(200).send(`find-one ${id}`);
  }
}

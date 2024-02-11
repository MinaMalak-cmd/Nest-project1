import { Injectable } from '@nestjs/common';
import { Response } from 'express';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!2234';
  }
  getHello2Service(id: string, response: Response): Response {
    // console.log("🚀 ~ AppController ~ findOne ~ param:", id, response)
    // return `find-one ${id}`;
    return response.status(200).send(`find-one ${id}`);
  }
}

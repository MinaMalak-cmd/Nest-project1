import { Controller, Get, HttpCode, Header, Param, Res, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request} from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('/hello')
  @Get()
  // @HttpCode(404)
  // @HttpCode(500)
  @Header('Cache-Control', 'none')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/find-one/:id')
  findOne(@Param('id') id: string, @Res() response: Response, @Req() request: Request): Response {
    // console.log("🚀 ~ AppController ~ findOne ~ request:", request.body, request.query);
    // console.log("🚀 ~ AppController ~ findOne ~ request:", request.body, request.query);
    // @Req() request: Request
    return this.appService.getHello2Service(id, response);
  }
}

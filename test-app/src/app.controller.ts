import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { getHello } from '@shreaya/nestjs-package-starter';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return getHello();
  }
}

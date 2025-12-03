import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //meotodo get principal para comprobar que funciona el servicio
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //metodo get adicional de ejemplo
  @Get('create')
  secondHello(): string {
    return this.appService.createHello();
  }

  //metodo post que recibe un mensaje en el body de ejemplo
  @Post('post')
  postHello(@Body() { mensaje }: { mensaje: string }): string {
    return this.appService.postHello({ mensaje: mensaje });
  }
}

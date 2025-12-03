import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createHello(): string {
    return 'Hello from createHello method!';
  }

  postHello({ mensaje }): string {
    return 'mensaje recibido: ' + mensaje;
  }
}

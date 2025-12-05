import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.useGlobalPipes(new ValidationPipe({
    whitelist:true //saca del campo cualquier valor que no sea el debido DTO
  })) //validacion de los DTOs de manera global

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

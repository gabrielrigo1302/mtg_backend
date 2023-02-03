import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { CardsModule } from './cards/cards.module';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(CardsModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  )

  await app.listen(port);
}
bootstrap();

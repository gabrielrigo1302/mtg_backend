import { NestFactory } from '@nestjs/core';
import { CardsModule } from './cards/cards.module';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(CardsModule);
  await app.listen(port);
}
bootstrap();

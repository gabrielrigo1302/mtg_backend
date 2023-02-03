import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { HttpModule } from '@nestjs/axios';
import { MtgDevelopersAdapterClass } from 'src/adapters/mtgDevelopers.adapter';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [CardsController],
  providers: [CardsService, MtgDevelopersAdapterClass],
})
export class CardsModule {}

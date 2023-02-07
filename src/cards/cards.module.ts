import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { HttpModule } from '@nestjs/axios';
import { MtgDevelopersAdapterClass } from 'src/adapters/mtgDevelopers.adapter';
import { HttpServiceAdapterClass } from 'src/adapters/httpService.adapter';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [CardsController],
  providers: [
    CardsService, 
    MtgDevelopersAdapterClass, 
    HttpServiceAdapterClass
  ],
})
export class CardsModule {}

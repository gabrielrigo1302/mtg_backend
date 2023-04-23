import {
  Controller,
  Query,
  Get,
} from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardFilterDto, CardDto } from './dto/card.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get('/search')
  // return cards from an query
  async find(@Query() queryParameters: string): Promise<void | CardDto[]> {
    return await this.cardsService.search(queryParameters);
  }

  @Get('/list')
  // return a list of card filtered by set and order (name, coust, etc...)
  async findAll(@Query() queryParameters: CardFilterDto): Promise<any> {
    return await this.cardsService.list();
  }
}

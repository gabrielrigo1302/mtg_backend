import {
  Controller,
  Query,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardFilterDto, CardDto } from './dto/card.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  async find(@Query() queryParameters: CardFilterDto): Promise<void | CardDto[]> {
    return await this.cardsService.find(queryParameters);
  }

  // @Get('/test')
  // async findAll(@Query() queryParameters: CardFilterDto): Promise<any> {
  //   const a = await this.cardsService.findAll();

  //   // console.log('a --- ', a);

  //   return a;
  // }
}

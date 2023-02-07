import { HttpServiceAdapterClass } from '../adapters/httpService.adapter';
import { Injectable } from '@nestjs/common';
import { CardDto, CardFilterDto } from './dto/card.dto';
import { MtgDevelopersAdapterClass } from '../adapters/mtgDevelopers.adapter';

@Injectable()
export class CardsService {
  constructor(
    private readonly httpService: HttpServiceAdapterClass, 
    private readonly mtgDeveloperAdapterService: MtgDevelopersAdapterClass 
  ) {}

  // fazer aqui ou em uma pasta utils?
  async mergeRequests(mtgDevelopersCards: CardDto[], scryfallCard: any) {
    return true;
  }

  async find(queryParameters: CardFilterDto): Promise<void | CardDto[]> {
    // a lista de cartas que vem no mtgDevelopersCard é por conta da quantidade de variações das versões das cartas
    const mtgDevelopersCards = await this.mtgDeveloperAdapterService.getCards(queryParameters);
    const scryfallCards = await this.httpService.getCards('s');
 
    console.log('Scryfall  response  --- ', scryfallCards);
    return mtgDevelopersCards;
  }

  // update(id: number, updateCardDto: UpdateCardDto) {
  //   return `This action updates a #${id} card`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} card`;
  // }
}

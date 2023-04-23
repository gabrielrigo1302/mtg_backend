import { HttpServiceAdapterClass } from '../adapters/httpService.adapter';
import { Injectable } from '@nestjs/common';
import { CardDto, CardFilterDto } from './dto/card.dto';
import { MtgDevelopersAdapterClass } from '../adapters/mtgDevelopers.adapter';
import { MtgDevelopersCardDto } from '../adapters/dtos/mtgDevelopersCard.dto';

@Injectable()
export class CardsService {
  constructor(
    private readonly httpService: HttpServiceAdapterClass, 
    private readonly mtgDeveloperAdapterService: MtgDevelopersAdapterClass 
  ) {}

  // fazer aqui ou em uma pasta utils?
  async mergeRequests(mtgDevelopersCards: MtgDevelopersCardDto[], scryfallCard: any) {

    return true;
  }

  // usar Mtg developers expecificamente para pegar os nomes em diversos idiomas e scryfall para o resto

  async search(queryParameters: string): Promise<void | CardDto[]> {
    // a lista de cartas que vem no mtgDevelopersCard é por conta da quantidade de variações das versões das cartas. Fazer o match pelo multiverseId
    //const mtgDevelopersCards = await this.mtgDeveloperAdapterService.searchCards(queryParameters);
    const scryfallCards = await this.httpService.searchCards(queryParameters);
 
    console.log('Scryfall  response  --- ', scryfallCards);
    return scryfallCards;
  }

  async list(): Promise<any> {
    const scryfallCards = await this.httpService.listCards('s');
 
    console.log('Scryfall  response  --- ', scryfallCards);
    return scryfallCards;
  }
}

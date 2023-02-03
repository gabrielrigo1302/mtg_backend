import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';
import { CardDto, CardFilterDto } from './dto/card.dto';
import { MtgDevelopersAdapterClass } from '../adapters/mtgDevelopers.adapter';

@Injectable()
export class CardsService {
  constructor(private readonly httpService: HttpService, private mtgDeveloperAdapterService: MtgDevelopersAdapterClass ) {}

  async find(queryParameters: CardFilterDto): Promise<void | CardDto[]> {
    return await  this.mtgDeveloperAdapterService.getCards(queryParameters);
  }

  // findAll() {
  //   return this.httpService
  //     .get('https://api.magicthegathering.io/v1/cards?name=nissa', {
  //       headers: {
  //         'Accept-Encoding': 'gzip,deflate,compress',
  //       },
  //     })
  //     .pipe(
  //       map((res) => {
  //         console.log('res ---- ', res);
  //         return res.data;
  //       }),
  //     )
  //     .pipe(
  //       catchError((error) => {
  //         console.log('ERROR - ', error);
  //         throw 'An error happened!';
  //       }),
  //     );
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} card`;
  // }

  // update(id: number, updateCardDto: UpdateCardDto) {
  //   return `This action updates a #${id} card`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} card`;
  // }
}

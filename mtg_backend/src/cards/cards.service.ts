import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Injectable()
export class CardsService {
  constructor(private readonly httpService: HttpService) {}

  create(createCardDto: CreateCardDto) {
    return 'This action adds a new card';
  }

  findAll() {
    return this.httpService
      .get('https://api.magicthegathering.io/v1/cards?name=nissa', {
        headers: {
          'Accept-Encoding': 'gzip,deflate,compress',
        },
      })
      .pipe(
        map((res) => {
          console.log('res ---- ', res);
          return res.data;
        }),
      )
      .pipe(
        catchError((error) => {
          console.log('ERROR - ', error);
          throw 'An error happened!';
        }),
      );
  }

  findOne(id: number) {
    return `This action returns a #${id} card`;
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}

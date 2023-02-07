import { HttpServiceAdapterInterface } from './interfaces/httpService.interfaces'
import { HttpService } from '@nestjs/axios'
import { map, catchError, lastValueFrom } from 'rxjs';

// export class HttpServiceAdapterClass implements HttpServiceAdapterInterface {

export class HttpServiceAdapterClass {
  constructor(private httpService: HttpService) {}

  async getCards(query: any) {
    // separar as dependências (n está funcionando no momento)
    const temporaryHttpService = new HttpService();

    const request = temporaryHttpService
      .get(`https://api.scryfall.com/cards/named?fuzzy=Atraxa, Praetor's Voice`, {
        headers: {
          'Accept-Encoding': 'gzip,deflate,compress',
        },
      })
      .pipe(
        map((res) => {
          return res.data;
        }),
      )
      .pipe(
        catchError((error) => {
          console.log('ERROR - ', error);
          throw 'An error happened!';
        }),
      );
     
      return await lastValueFrom(request);
    }
}

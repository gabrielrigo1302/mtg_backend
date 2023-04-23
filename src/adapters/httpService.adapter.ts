import { HttpServiceAdapterInterface } from './interfaces/httpService.interfaces'
import { HttpService } from '@nestjs/axios'
import { map, catchError, lastValueFrom } from 'rxjs';

// export class HttpServiceAdapterClass implements HttpServiceAdapterInterface {

export class HttpServiceAdapterClass {
  constructor(private httpService: HttpService) {}

  async searchCards(query: any) {
    // separar as dependências (n está funcionando no momento)
    const temporaryHttpService = new HttpService();

    console.log('Q ==== ', query);
    const request = temporaryHttpService
      .get(`https://api.scryfall.com/cards/search?q=${query.query}`, {
        headers: {
          'Accept-Encoding': 'gzip,deflate,compress',
        },
      })
      .pipe(
        map((res) => {
          // console.log('res.data? --- ', res.data);
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

    async listCards(query: any) {
      // separar as dependências (n está funcionando no momento)
      const temporaryHttpService = new HttpService();
  
      const request = temporaryHttpService
        .get(`https://api.scryfall.com/cards/search?order=name&q=Atraxa`, {
          headers: {
            'Accept-Encoding': 'gzip,deflate,compress',
          },
        })
        .pipe(
          map((res) => {
            console.log('res.data? --- ', res.data);
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

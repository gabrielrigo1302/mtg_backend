import { Card, Cards, CardFilter } from 'mtgsdk-ts';
import { MtgDevelopersAdapterInterface } from './interfaces/mtgDevelopers.interfaces';

// export class MtgDevelopersAdapter implements ...{
export class MtgDevelopersAdapterClass implements MtgDevelopersAdapterInterface {
  async getCards(query: CardFilter): Promise<void | Card[]> {
    return await Cards.where({
      name: query.name
    })
    .catch((error) => {
      console.error('Erro - ', error);
    });
  }
}

// analisar onde a entidade carta deve ficar, já que ela vai ser
// usada em outros diversos agrupamentos. Pensar na arquitetura 
// para separar isso;

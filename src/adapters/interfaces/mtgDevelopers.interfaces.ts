import { Card, CardFilter } from "mtgsdk-ts";

export interface MtgDevelopersAdapterInterface {
  getCards: (query: CardFilter) => Promise<void | Card[]> 
}

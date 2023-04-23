import { Card, CardFilter } from "mtgsdk-ts";

export interface MtgDevelopersAdapterInterface {
  searchCards: (query: CardFilter) => Promise<void | Card[]> 
}

import { HttpService } from "@nestjs/axios"

export interface HttpServiceAdapterInterface {
  getCards: (query: any) => Promise<void | any[]>
}

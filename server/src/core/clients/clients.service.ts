/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@nestjs/common';
import { ClientsRepository } from 'src/datalake/clients/clients.repository';

@Injectable()
export class ClientsService {
  constructor(private readonly clientsRepo: ClientsRepository) {}
  async find(conditions, projection, options): Promise<{}[]> {
    return this.clientsRepo.find(conditions, projection, options);
  }
}

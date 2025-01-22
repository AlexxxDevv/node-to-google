/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@nestjs/common';
import { ClientsStatusRepository } from 'src/datalake/clients-status/clients-status.repository';

@Injectable()
export class ClientsStatusService {
  constructor(private readonly clientsStatusRepo: ClientsStatusRepository) {}
  async find(conditions, projection, options): Promise<{}[]> {
    return this.clientsStatusRepo.find(conditions, projection, options);
  }
}

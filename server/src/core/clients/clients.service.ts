/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@nestjs/common';
import { CteateClientDto } from 'src/api/data-api/dto/create-client.dto';
import { ClientProfile } from 'src/common/types/system.types';
import { ClientsRepository } from 'src/datalake/clients/clients.repository';

@Injectable()
export class ClientsService {
  constructor(private readonly clientsRepo: ClientsRepository) {}
  async find(conditions, projection, options): Promise<{}[]> {
    return this.clientsRepo.find(conditions, projection, options);
  }

  async create(dto: CteateClientDto): Promise<ClientProfile> {
    return this.clientsRepo.create(dto);
  }
}

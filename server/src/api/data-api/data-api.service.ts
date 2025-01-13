import { Injectable } from '@nestjs/common';
import { GetClientsDto } from './dto/get-clients.dto';
import { ClientsRepository } from 'src/datalake/clients/clients.repository';
import { CteateClientDto } from './dto/create-client.dto';

@Injectable()
export class DataService {
  constructor(private readonly clientsRepo: ClientsRepository) {}
  async find(query: GetClientsDto) {
    const { offset, limit } = query;
    return `Этот метод будет возвращать список клиентов через ${offset} в количестве ${limit} записей`;
  }

  async create(dto: CteateClientDto) {
    console.log(dto);
    return this.clientsRepo.create(dto);
  }
}

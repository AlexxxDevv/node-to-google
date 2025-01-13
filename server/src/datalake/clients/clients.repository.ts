import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './schemas/clients.schema';
import { BaseRepositoryService } from '../base-repository/base-repository.service';

@Injectable()
export class ClientsRepository extends BaseRepositoryService<Client> {
  constructor(
    @InjectModel(Client.name) private readonly clientModel: Model<Client>,
  ) {
    super(clientModel);
  }
}

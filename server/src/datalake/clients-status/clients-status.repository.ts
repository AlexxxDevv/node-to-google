import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepositoryService } from '../base-repository/base-repository.service';
import { ClientStatus } from './schemas/clients-status.schema';

@Injectable()
export class ClientsStatusRepository extends BaseRepositoryService<ClientStatus> {
  constructor(
    @InjectModel(ClientStatus.name)
    private readonly clientStatusModel: Model<ClientStatus>,
  ) {
    super(clientStatusModel);
  }
}

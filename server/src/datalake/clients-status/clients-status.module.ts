import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsStatusRepository } from './clients-status.repository';
import {
  ClientStatus,
  ClientStatusSchema,
} from './schemas/clients-status.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ClientStatus.name, schema: ClientStatusSchema },
    ]),
  ],
  providers: [ClientsStatusRepository],
  exports: [ClientsStatusRepository],
})
export class ClientsStatusRepositoryModule {}

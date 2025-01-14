import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './schemas/clients.schema';
import { ClientsRepository } from './clients.repository';
import { ClientsService } from './clients.service';
import { ClientsStatusRepositoryModule } from '../clients-status/clients-status.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
    ClientsStatusRepositoryModule,
  ],
  providers: [ClientsRepository, ClientsService],
  exports: [ClientsRepository, ClientsService],
})
export class ClientsRepositoryModule {}

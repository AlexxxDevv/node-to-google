import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './schemas/clients.schema';
import { ClientsRepository } from './clients.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
  ],
  providers: [ClientsRepository],
  exports: [ClientsRepository],
})
export class ClientsRepositoryModule {}

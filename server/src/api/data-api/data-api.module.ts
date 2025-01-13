import { Module } from '@nestjs/common';
import { DataController } from '../data-api/data-api.controller';
import { DataService } from './data-api.service';
import { ClientsRepositoryModule } from 'src/datalake/clients/clients.module';

@Module({
  imports: [ClientsRepositoryModule],
  controllers: [DataController],
  providers: [DataService],
})
export class DataModule {}

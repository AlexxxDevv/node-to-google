import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsRepositoryModule } from 'src/datalake/clients/clients.module';

@Module({
  imports: [ClientsRepositoryModule],
  providers: [ClientsService],
  exports: [ClientsService],
})
export class ClientsModule {}

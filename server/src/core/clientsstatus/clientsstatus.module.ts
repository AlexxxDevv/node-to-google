import { Module } from '@nestjs/common';
import { ClientsStatusRepositoryModule } from 'src/datalake/clients-status/clients-status.module';
import { ClientsStatusService } from './clientsstatus.service';

@Module({
  imports: [ClientsStatusRepositoryModule],
  providers: [ClientsStatusService],
  exports: [ClientsStatusService],
})
export class ClientsStatusModule {}

import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GetClientsDto } from './dto/get-clients.dto';
import { DataService } from './data-api.service';
import { CteateClientDto } from './dto/create-client.dto';

@Controller('clients')
export class DataController {
  constructor(private dataService: DataService) {}
  @Get()
  findClients(@Query() query: GetClientsDto): Promise<string> {
    return this.dataService.find(query);
  }
  /* @Post()
  findClientsStatusById(@Body() dto: GetClientsStatusDto): string {
    console.log(dto);
    return 'Этот метод будет возвращать список статусов клиентов';
  } */
  @Post()
  createClients(@Body() dto: CteateClientDto) {
    return this.dataService.create(dto);
  }
}

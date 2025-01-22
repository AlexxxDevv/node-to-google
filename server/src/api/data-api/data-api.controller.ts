/* eslint-disable @typescript-eslint/ban-types */
import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { GetClientsDto } from './dto/get-clients.dto';
import { DataService } from './data-api.service';
import { CteateClientDto } from './dto/create-client.dto';
import { ClientsService } from 'src/core/clients/clients.service';
import { GetClientsStatusDto } from './dto/get-clients-status.dto';
import { ClientsStatusService } from 'src/core/clientsstatus/clientsstatus.service';
import { JwtAuthGuard } from 'src/core/aut/guards/jwt-auth.guard';

@Controller('clients')
export class DataController {
  constructor(
    private dataService: DataService,
    private clientsService: ClientsService,
    private clientsStatusService: ClientsStatusService,
  ) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  findClients(@Query() query: GetClientsDto): Promise<{}[]> {
    return this.clientsService.find(null, null, {
      limit: query.limit,
      skip: query.offset,
    });
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  createClients(@Body() dto: CteateClientDto) {
    return this.dataService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('status')
  findClientsStatus(@Body() dto: GetClientsStatusDto): Promise<{}[]> {
    return this.clientsStatusService.find(
      { _id: { $in: dto.ids } },
      null,
      null,
    );
  }
}

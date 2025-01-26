/* eslint-disable @typescript-eslint/ban-types */
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GetClientsDto } from './dto/get-clients.dto';
import { CteateClientDto } from './dto/create-client.dto';
import { ClientsService } from 'src/core/clients/clients.service';
import { GetClientsStatusDto } from './dto/get-clients-status.dto';
import { ClientsStatusService } from 'src/core/clientsstatus/clientsstatus.service';
import { JwtAuthGuard } from 'src/core/aut/guards/jwt-auth.guard';
import {
  ApiOperation,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiBody,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { constants } from 'http2';
import { schema } from 'src/common/utils/apiSchemaObj';
import { UserDto } from '../auth-api/dto/user.dto';
import { ClientDto } from './dto/client.dto';
import { ClientStatusDto } from './dto/status.dto';

@Controller('clients')
export class DataController {
  constructor(
    private clientsService: ClientsService,
    private clientsStatusService: ClientsStatusService,
  ) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Получения списка клиентов' })
  @ApiOkResponse({
    description: 'Список клиентов получен',
    type: [UserDto],
  })
  @ApiBadRequestResponse({
    schema: schema(['string'], 'Bad Request', 400),
    description: 'Произошла ошибка',
  })
  @ApiUnauthorizedResponse({
    schema: schema('Unauthorized', null, 401),
    description: 'Требуется авторизация',
  })
  @HttpCode(constants.HTTP_STATUS_OK)
  findClients(@Query() query: GetClientsDto): Promise<{}[]> {
    return this.clientsService.find(null, null, {
      limit: query.limit,
      skip: query.offset,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBody({ type: CteateClientDto })
  @ApiOperation({ summary: 'Создание клиента' })
  @ApiCreatedResponse({
    description: 'клиент создан',
    type: ClientDto,
  })
  @ApiBadRequestResponse({
    schema: schema(['string'], 'Bad Request', 400),
    description: 'Произошла ошибка',
  })
  @ApiUnauthorizedResponse({
    schema: schema('Unauthorized', null, 401),
    description: 'Требуется авторизация',
  })
  @ApiInternalServerErrorResponse({
    schema: schema('Internal server error', null, 500),
    description: 'Внутрення ошибка на сервере',
  })
  @HttpCode(constants.HTTP_STATUS_CREATED)
  createClients(@Body() dto: CteateClientDto) {
    return this.clientsService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('status')
  @ApiBody({ type: GetClientsStatusDto })
  @ApiOperation({ summary: 'Статус клиента' })
  @ApiCreatedResponse({
    description: 'список айди клиентов и статусов',
    type: [ClientStatusDto],
  })
  @ApiBadRequestResponse({
    schema: schema(['string'], 'Bad Request', 400),
    description: 'Произошла ошибка',
  })
  @ApiUnauthorizedResponse({
    schema: schema('Unauthorized', null, 401),
    description: 'Требуется авторизация',
  })
  @ApiInternalServerErrorResponse({
    schema: schema('Internal server error', null, 500),
    description: 'Внутрення ошибка на сервере',
  })
  @HttpCode(constants.HTTP_STATUS_OK)
  findClientsStatus(@Body() dto: GetClientsStatusDto): Promise<{}[]> {
    return this.clientsStatusService.find(
      { _id: { $in: dto.ids } },
      null,
      null,
    );
  }
}

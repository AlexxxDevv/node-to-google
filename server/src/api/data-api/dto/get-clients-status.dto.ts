import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class GetClientsStatusDto {
  @ApiProperty()
  @IsNumber()
  ids: number[];
}

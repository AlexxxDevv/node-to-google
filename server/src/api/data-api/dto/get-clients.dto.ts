import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class GetClientsDto {
  @ApiProperty()
  @IsNumber()
  offset: number;

  @ApiProperty()
  @IsNumber()
  limit: number;
}

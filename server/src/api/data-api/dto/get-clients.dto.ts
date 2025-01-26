import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsString, Max } from 'class-validator';

export class GetClientsDto {
  @ApiProperty()
  @IsString()
  offset: number;

  @ApiProperty()
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @Max(1000)
  limit: number;
}

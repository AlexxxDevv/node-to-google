import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export class GetClientsStatusDto {
  @ApiProperty({
    example: ['66d1c8595f28e1f67ef545c0', '6793582134bc91fe519c82f9'],
    description: 'ай ди клиента',
  })
  @IsArray()
  ids: string[];
}

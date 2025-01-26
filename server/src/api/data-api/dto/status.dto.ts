import { ApiProperty } from '@nestjs/swagger';

export class ClientStatusDto {
  @ApiProperty({
    example: '66d1c8595f28e1f67ef545c0',
    description: 'Ай ди клиента',
  })
  _id: string;

  @ApiProperty({
    example: 'Online',
    description: 'Статус клиента',
  })
  status: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ClientDto {
  @ApiProperty({
    example: '66d1c8595f28e1f67ef545c0',
    description: 'Ай ди клиента',
  })
  _id: string;

  @ApiProperty({
    example: 'Quentin',
    description: 'Имя клиента',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'Tarantino',
    description: 'Фамилия клиента',
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    example: 'Male',
    description: 'Пол клиента',
  })
  @IsString()
  gender: string;

  @ApiProperty({
    example: 'Adalberto Park',
    description: 'Адрес клиента',
  })
  @IsString()
  address: string;

  @ApiProperty({
    example: 'Los-Angeles',
    description: 'Город',
  })
  @IsString()
  city: string;

  @ApiProperty({
    example: '(970) 896-6058',
    description: 'Телефон клиента',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    example: 'Aisha_Dickinson-Murazik59@gmail.com',
    description: 'Email клиента',
  })
  @IsString()
  email: string;
}

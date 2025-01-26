import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    example: '66e286b3b279ac443e0029e5',
    description: 'Уникальный идентификатор пользователя',
  })
  _id: string;

  @ApiProperty({
    example: 'Анастасия',
    description: 'Имя пользователя',
  })
  username: string;
}

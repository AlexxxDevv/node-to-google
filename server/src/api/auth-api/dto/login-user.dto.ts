import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Alexey',
    description: 'Имя пользователя',
    required: true,
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'secret',
    description: 'Пароль',
    required: true,
  })
  password: string;
}

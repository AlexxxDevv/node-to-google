import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './user.dto';

export class CreatedUserDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R0dHVzZXIiLCJzdWIiOiI2NzkxZTY2Y2I0MDg1NDQxMTJiODY1ODkiLCJpYXQiOjE3Mzc2MTQ5NTYsImV4cCI6MTczODIxOTc1Nn0.FUKcYqe9l6aiX9zzGg8uATaF-5szMdT_2okcn4Azs98',
    description: 'токен',
  })
  access_token: string;

  @ApiProperty({
    description: 'DTO пользователя',
  })
  user: UserDto;
}

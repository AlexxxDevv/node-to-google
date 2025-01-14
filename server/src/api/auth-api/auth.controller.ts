import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/core/users/users.service';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthApiController {
  constructor(private readonly usersService: UsersService) {}

  @Post('new')
  async auth(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }
}

import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/core/users/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from 'src/core/aut/auth.service';
import { JwtAuthGuard } from 'src/core/aut/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/core/aut/guards/local-auth.guard';

@ApiTags('Auth')
@Controller()
export class AuthApiController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  async signup(@Body() dto: CreateUserDto) {
    const user = await this.usersService.createUser(dto);
    return this.authService.auth(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

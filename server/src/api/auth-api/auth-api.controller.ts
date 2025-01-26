import {
  Body,
  Controller,
  Get,
  HttpCode,
  InternalServerErrorException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { constants } from 'http2';
import { UsersService } from 'src/core/users/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from 'src/core/aut/auth.service';
import { JwtAuthGuard } from 'src/core/aut/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/core/aut/guards/local-auth.guard';
import { CreatedUserDto } from './dto/created-user.dto';
import { schema } from 'src/common/utils/apiSchemaObj';
import { LoginUserDto } from './dto/login-user.dto';
import { UserDto } from './dto/user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthApiController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  @ApiOperation({ summary: 'Регистрация пользователя' })
  @ApiBody({ type: CreateUserDto })
  @ApiCreatedResponse({
    description: 'Пользователь успешно создан.',
    type: CreatedUserDto,
  })
  @ApiBadRequestResponse({
    schema: schema(['string'], 'Bad Request', 400),
    description: 'Произошла ошибка',
  })
  @ApiForbiddenResponse({
    schema: schema(['string'], 'Forbidden', 403),
    description: 'Пользователь с таким username уже существует',
  })
  @ApiInternalServerErrorResponse({
    schema: schema('Internal server error', null, 500),
    description: 'Внутрення ошибка на сервере',
  })
  @HttpCode(constants.HTTP_STATUS_CREATED)
  async signup(@Body() dto: CreateUserDto) {
    const user = await this.usersService.createUser(dto);
    if (user) {
      return this.authService.auth(user);
    }
    throw new InternalServerErrorException('Ошибка создания пользователя');
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'Авторизация пользователя' })
  @ApiOkResponse({
    description: 'Авторизация прошла успешно.',
    type: CreatedUserDto,
  })
  @ApiBadRequestResponse({
    schema: schema(['string'], 'Bad Request', 400),
    description: 'Произошла ошибка',
  })
  @ApiUnauthorizedResponse({
    schema: schema('Неверное имя пользователя или пароль', 'Unauthorized', 401),
    description: 'Неверное имя пользователя или пароль',
  })
  @ApiBody({ type: LoginUserDto })
  @HttpCode(constants.HTTP_STATUS_OK)
  async login(@Request() req) {
    const user: LoginUserDto = req.user;
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOperation({ summary: 'Информация о пользователе' })
  @ApiOkResponse({
    description: 'Данные профиля получены',
    type: UserDto,
  })
  @ApiUnauthorizedResponse({
    schema: schema('Unauthorized', null, 401),
    description: 'Требуется авторизация',
  })
  @HttpCode(constants.HTTP_STATUS_OK)
  getProfile(@Request() req) {
    return req.user;
  }
}

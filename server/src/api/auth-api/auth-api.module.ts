import { Module } from '@nestjs/common';
import { AuthApiController } from './auth-api.controller';
import { UsersModule } from 'src/core/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/core/aut/auth.module';

@Module({
  imports: [UsersModule, AuthModule, PassportModule],
  controllers: [AuthApiController],
})
export class AuthApiModule {}

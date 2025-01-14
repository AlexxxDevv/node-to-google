import { Module } from '@nestjs/common';
import { AuthApiController } from './auth.controller';
import { UsersModule } from 'src/core/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AuthApiController],
})
export class AuthApiModule {}

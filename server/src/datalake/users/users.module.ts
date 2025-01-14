import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersRepository } from './users.repository';
import { User, UserSchema } from './schemas/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersRepository],
  exports: [UsersRepository],
})
export class UsersRepositoryModule {}

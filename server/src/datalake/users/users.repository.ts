/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepositoryService } from '../base-repository/base-repository.service';
import { User } from './schemas/users.schema';
import { UserProfile } from 'src/common/types/system.types';

@Injectable()
export class UsersRepository extends BaseRepositoryService<
  User,
  {},
  UserProfile
> {
  constructor(
    @InjectModel(User.name)
    private readonly UserModel: Model<User, {}, {}, UserProfile>,
  ) {
    super(UserModel);
  }
}

/* eslint-disable @typescript-eslint/ban-types */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/api/auth-api/dto/create-user.dto';
import { UsersRepository } from 'src/datalake/users/users.repository';
import { hashValue } from 'src/helpers/hash';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async createUser(dto: CreateUserDto) {
    const password = await hashValue(dto.password);
    const possibleUser = await this.usersRepo.findOne({
      username: dto.username,
    });
    if (possibleUser) {
      throw new ForbiddenException(
        'Пользователь с таким username уже существует',
      );
    }
    return this.usersRepo.create({
      ...dto,
      password,
    });
  }

  async find(query: {}) {
    const user = await this.usersRepo.find(query);
    return user;
  }

  async findOne(id: number) {
    const query = { _id: id };
    const user = await this.usersRepo.findOne(query);
    return user;
  }

  async findByUsername(username: string) {
    const query = { username: username };
    const user = await this.usersRepo.findOne(query);
    return user;
  }
}

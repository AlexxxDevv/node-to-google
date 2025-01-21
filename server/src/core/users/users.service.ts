import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/api/auth-api/dto/create-user.dto';
import { UsersRepository } from 'src/datalake/users/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async createUser(dto: CreateUserDto) {
    return this.usersRepo.create(dto);
  }

  async findOne(id: number) {
    const query = { _id: id };
    const user = await this.usersRepo.findOne(query);
    return user;
  }

  async findByUsername(username: string) {
    const query = { login: username };
    const user = await this.usersRepo.findOne(query);
    return user;
  }
}

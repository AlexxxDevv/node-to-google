import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { ClientsRepository } from './clients.repository';
import { ClientsStatusRepository } from '../clients-status/clients-status.repository';

interface FakeClient {
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  city: string;
  phone: string;
  email: string;
}

@Injectable()
export class ClientsService implements OnModuleInit {
  constructor(
    private readonly clientsRepo: ClientsRepository,
    private readonly clientsStatusRepo: ClientsStatusRepository,
  ) {}
  async onModuleInit() {
    const userData: FakeClient[] = [];
    const userCount = 10;

    for (let i = 0; i < userCount; i++) {
      const sex = faker.person.sexType();
      const gender = faker.person.sexType().toString();
      const firstName = faker.person.firstName(sex);
      const lastName = faker.person.lastName();
      const address = faker.location.street();
      const city = faker.location.city();
      const phone = faker.phone.number();
      const email = faker.internet.email();

      userData.push({
        firstName,
        lastName,
        gender,
        address,
        city,
        phone,
        email,
      });
    }
    try {
      await this.clientsRepo.deleteMany();
      await this.clientsRepo.createMany(userData);
      const users = await this.clientsRepo.find({});
      const usersStatus: any = users.map((user) => {
        const index = Math.floor(Math.random() * 3);
        const statusname = ['busy', 'online', 'offline', 'ready'];
        const userS = {
          _id: user._id,
          status: statusname[index],
        };
        return userS;
      });
      await this.clientsStatusRepo.deleteMany();
      await this.clientsStatusRepo.createMany(usersStatus);
      Logger.log('Data seeded successfully');
    } catch (error) {
      Logger.error(`Error seeding data: ${error.message}`, error.stack);
    }
  }
}

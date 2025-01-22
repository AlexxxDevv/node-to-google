import { Client } from 'src/datalake/clients/schemas/clients.schema';
import { User } from 'src/datalake/users/schemas/users.schema';

export interface UserProfile extends User {
  _id: string;
}

export interface ClientProfile extends Client {
  _id: string;
}

import { User } from 'src/datalake/users/schemas/users.schema';

export interface UserProfile extends User {
  _id: string;
}

import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserProfile } from 'src/common/types/system.types';
import { verifyHash } from 'src/helpers/hash';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async auth(user: Omit<UserProfile, 'password'>) {
    const payload = { username: user.username, sub: user._id };
    const userData = await this.usersService.findByUsername(user.username);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = userData;
    return { access_token: this.jwtService.sign(payload), user: result };
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);

    if (user && (await verifyHash(pass, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user._id };
    const userData = await this.usersService.findByUsername(user.username);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = userData;
    return {
      access_token: this.jwtService.sign(payload),
      user: result,
    };
  }
}

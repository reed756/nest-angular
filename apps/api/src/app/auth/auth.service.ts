import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from '../users/users.schema';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(id: number, pass: string): Promise<User | null> {
    const user = await this.usersService.findOne(id);
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

  async login(user: UserDocument): Promise<{ access_token: string }> {
    const payload = { username: user.username, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/users.schema';
import { SignUpDto, LoginDto } from '@nest-angular/shared';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private readonly UserModel: Model<User>, private jwtService: JwtService, private configService: ConfigService) {}

  async signUp(signupDto: SignUpDto) {
    const { username, email, password } = signupDto;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.UserModel.create({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    const token = await this.jwtService.sign(
      { id: user.id },
      {
        secret: this.configService.get('JWT_SECRET'),
        expiresIn: this.configService.get('JWT_EXPIRES'),
      },
    );
    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;
    const user = await this.UserModel.findOne({
      email,
    });

    if (!user) throw new UnauthorizedException('invalid email or password');
    const passwordMatch = await bcrypt.compare(password,
      user.password);
    if (!passwordMatch) throw new UnauthorizedException('invalid email or password');
    const token = await this.jwtService.sign(
      { id: user.id },
      {
        secret: this.configService.get('JWT_SECRET'),
      },
    );
    return { token };
  }
}

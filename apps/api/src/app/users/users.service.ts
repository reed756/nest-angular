import { CreateUserDto } from '@nest-angular/shared';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly UserModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.UserModel.create(createUserDto);
    return createdUser.save();
  }

  async findOne(id: number): Promise<User | undefined> {
    const user = await this.UserModel.findById(id);
    if (!user) throw new NotFoundException('could not find the user');
    return user;
  }
}

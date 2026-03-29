import { CreateUserDto } from '@nest-angular/shared';
import { Injectable } from '@nestjs/common';
import { User } from './users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly UserModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdSymptom = await this.UserModel.create(createUserDto);
    return createdSymptom.save();
  }

  async findOne(id: number): Promise<User | undefined> {
    return this.UserModel.findOne({ _id: id }).exec();
  }
}

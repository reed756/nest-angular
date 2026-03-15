import { Injectable } from '@nestjs/common';
import { Food } from './foods.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFoodDto, UpdateFoodDto } from '@nest-angular/shared';

@Injectable()
export class FoodsService {
  constructor(@InjectModel(Food.name) private readonly FoodModel: Model<Food>) {}

  async create(createFoodDto: CreateFoodDto): Promise<Food> {
    const createdFood = await this.FoodModel.create(createFoodDto);
    return createdFood.save();
  }

  async findAll(): Promise<Food[]> {
    return this.FoodModel.find().exec();
  }

  async findOne(id: number): Promise<Food> {
    return this.FoodModel.findOne({ _id: id }).exec();
  }

  async update(id: number, updateFoodDto: UpdateFoodDto): Promise<Food> {
    return this.FoodModel.findByIdAndUpdate({ _id: id }, updateFoodDto, { new: true }).exec();
  }

  async remove(id: number): Promise<Food> {
    const foodToDelete = await this.FoodModel.findByIdAndDelete({ _id: id }).exec();
    return foodToDelete;
  }
}

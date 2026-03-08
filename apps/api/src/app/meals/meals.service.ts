import { Injectable } from '@nestjs/common';
import { CreateMealDto, UpdateMealDto } from '@nest-angular/interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meal } from './meal.schema';

@Injectable()
export class MealsService {
  constructor(@InjectModel(Meal.name) private readonly MealModel: Model<Meal>) {}

  async create(createMealDto: CreateMealDto): Promise<Meal> {
    const createdMeal = await this.MealModel.create(createMealDto);
    return createdMeal.save();
  }

  async findAll(): Promise<Meal[]> {
    return this.MealModel.find().exec();
  }

  async findOne(id: string): Promise<Meal> {
    return this.MealModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateMealDto: UpdateMealDto): Promise<Meal> {
    return this.MealModel.findByIdAndUpdate({ _id: id }, updateMealDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Meal> {
    const mealToDelete = await this.MealModel.findByIdAndDelete({ _id: id }).exec();
    return mealToDelete;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateMealDto, UpdateMealDto } from '@nest-angular/shared';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meal } from './meals.schema';

@Injectable()
export class MealsService {
  constructor(@InjectModel(Meal.name) private readonly MealModel: Model<Meal>) {}

  async create(createMealDto: CreateMealDto): Promise<Meal> {
    const createdMeal = await this.MealModel.create(createMealDto);
    return createdMeal.save();
  }

  async findAll(userID: string, date: Date): Promise<Meal[]> {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    return this.MealModel.find({
      userID,
      timeEaten: {
        "$gte": `${day} ${month} ${year} 00:00:00 GMT`,
        "$lt": `${day} ${month} ${year} 23:59:59 GMT`
      }
    }).exec();
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

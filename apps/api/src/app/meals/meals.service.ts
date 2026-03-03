import { Injectable } from '@nestjs/common';
import { CreateMealDto, MealType, UpdateMealDto } from '@nest-angular/interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meal } from './meal.schema';

const meals: Meal[] = [
  {
    id: '1',
    userID: "user1",
    timestamp: new Date(),
    mealType: MealType.Breakfast,
    notes: "Had eggs and toast"
  },
  {
    id: '2',
    userID: "user2",
    timestamp: new Date(),
    mealType: MealType.Lunch,
    notes: "Had a salad"
  }
]

@Injectable()
export class MealsService {
  constructor(@InjectModel(Meal.name) private MealModel: Model<Meal>) {}

  create(createMealDto: CreateMealDto) {
    const createdMeal = new this.MealModel({ ...createMealDto });
    return createdMeal.save();
  }

  findAll() {
    return this.MealModel.find().exec();
  }

  findOne(id: string) {
    return meals.find(meal => meal.id === id);
  }

  update(id: string, updateMealDto: UpdateMealDto) {
    const mealToUpdate = meals.find(meal => meal.id === id);
    if (mealToUpdate) {
      Object.assign(mealToUpdate, updateMealDto);
      return mealToUpdate;
    }
    return null;
  }

  remove(id: string) {
    const mealToRemove = meals.find(meal => meal.id === id);
    if (mealToRemove) {
      const index = meals.indexOf(mealToRemove);
      meals.splice(index, 1);
      return mealToRemove;
    }
    return null;
  }
}

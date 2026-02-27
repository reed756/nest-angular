import { Injectable } from '@nestjs/common';
import { CreateMealDto, Meal, UpdateMealDto } from '@nest-angular/interfaces';

const meals = [
  {
    id: '1',
    userID: "user1",
    timestamp: new Date(),
    mealType: "Breakfast",
    notes: "Had eggs and toast"
  },
  {
    id: '2',
    userID: "user2",
    timestamp: new Date(),
    mealType: "Lunch",
    notes: "Had a salad"
  }
]

@Injectable()
export class MealsService {
  create(createMealDto: CreateMealDto) {
    Object.assign(createMealDto, {
      id: (meals.length + 1).toString(),
      userID: "user1"
    });
    meals.push(createMealDto as Meal);
    return createMealDto;
  }

  findAll() {
    return meals;
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

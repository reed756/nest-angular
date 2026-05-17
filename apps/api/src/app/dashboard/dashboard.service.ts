import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SymptomLog } from '../symptom-logs/symptom-logs.schema';
import { Meal } from '../meals/meals.schema';

@Injectable()
export class DashboardService {
  constructor(@InjectModel(SymptomLog.name) private readonly symptomLogModel: Model<SymptomLog>, @InjectModel(Meal.name) private readonly mealModel: Model<Meal>) {}

  async getDashboardData(userId: string) {
    const [recentMeals, recentSymptoms] = await Promise.all([
      // 1. Fetch recent meals and populate the embedded food details
      this.mealModel
        .find({ userID: userId })
        .sort({ timeEaten: -1 })
        .limit(10)
        .populate('foods.foodID') // Reaches into the array to grab food names/allergens
        .exec(),

      // 2. Fetch recent symptoms and populate the symptom definitions
      this.symptomLogModel
        .find({ userID: userId })
        .sort({ timeExperienced: -1 })
        .limit(10)
        .populate('symptomID') // Grabs symptom name and category
        .exec(),
    ]);

    return {
      recentMeals,
      recentSymptoms
    };
  }
}
